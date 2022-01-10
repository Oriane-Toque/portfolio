<?php

namespace App\Controller;

use App\Form\ContactType;
use App\Repository\CollaborationRepository;
use App\Repository\LangageRepository;
use App\Repository\ProjectRepository;
use App\Repository\SkillRepository;
use App\Repository\TechnologyRepository;
use Symfony\Bridge\Twig\Mime\TemplatedEmail;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;
use Symfony\Component\Mailer\Exception\TransportExceptionInterface;
use Symfony\Component\Mailer\MailerInterface;
use Symfony\Component\Mime\Address;

/**
 * @Route(name="app_")
 */
class MainController extends AbstractController
{

    /**
     * Page with description & all projects
     *
     * @Route("/", name="home", methods={"GET"})
     * @return Response
     */
    public function list(LangageRepository $lr, CollaborationRepository $cr, SkillRepository $sr, TechnologyRepository $tr, ProjectRepository $pr): Response
    {

        // récupération des projets pour la liste
        $projects = $pr->findProjects();

        for ($i = 0; $i < count($projects); $i++) {
            // transformation de la chaine langages en tableau
            $projects[$i]['languages'] = explode(',', $projects[$i]['languages']);
            // transformation de la chaine technologies en tableau
            $projects[$i]['technologies'] = explode(',', $projects[$i]['technologies']);
        }

        return $this->render("home/index.html.twig", [
            "languages" => $lr->findAll(),
            "collaborations" => $cr->findAll(),
            "technos" => $tr->findAll(),
            "skills" => $sr->findAll(),
            "projects" => $projects,
        ]);
    }

    /**
     * Contact page
     * 
     * @Route("/contact", name="contact", methods={"GET", "POST"})
     * @return Response
     */
    public function contact(Request $request, MailerInterface $mailer): Response {
        // formulaire de contact
        $form = $this->createForm(ContactType::class);
        $form->handleRequest($request);

        if($form->isSubmitted() && $form->isValid()) {
            
            $lastname = $form['lastname']->getData();
            $firstname = $form['firstname']->getData();
            $email = $form['email']->getData();
            $subject = $form['subject']->getData();

            $email = (new TemplatedEmail())
                ->from(Address::create($lastname.' '.$firstname.' <'.$email.'>'))
                ->to(Address::create('TOQUE Oriane <oriane.toque@gmail.com>'))
                ->cc(Address::create($lastname.' '.$firstname.' <'.$email.'>'))
                ->subject('Contact avec Oriane TOQUE : '.$subject)
                ->htmlTemplate('email/contact.html.twig')
                ->context([
                    'lastname' => $lastname,
                    'firstname' => $firstname,
                    'organism' => $form['organism']->getData(),
                    'subject' => $subject,
                    'message' => $form['message']->getData()
                ]);
            
            try {
                $mailer->send($email);

                $this->addFlash('success', 'Votre email a bien été envoyé et sera traité dans les plus brefs délais !');

                return $this->redirectToRoute('app_contact');

            } catch(TransportExceptionInterface $e) {

                $this->addFlash('warning', 'Une erreur s\'est produite lors de l\'envoi, l\'email n\'a pu être envoyé !');

                return $this->redirectToRoute('app_contact');
            } 
        }

        return $this->render("contact/contact.html.twig", [
            "contact" => $form->createView(),
        ]);
    }

    /**
     * @Route("/cv", name="cv", methods={"GET"})
     *
     * @return Response
     */
    public function download(): Response
    {
        // load the file from the filesystem
        $file = new File($this->getParameter('kernel.project_dir').'/public/files/cv_oriane_toque.pdf');

        // rename the downloaded file
        return $this->file($file, 'curriculum_vitae.pdf', ResponseHeaderBag::DISPOSITION_ATTACHMENT);
    }
}
