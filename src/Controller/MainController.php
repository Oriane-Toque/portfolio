<?php

namespace App\Controller;

use App\Repository\CollaborationRepository;
use App\Repository\LangageRepository;
use App\Repository\ProjectRepository;
use App\Repository\SkillRepository;
use App\Repository\TechnologyRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\File\File;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\HttpFoundation\ResponseHeaderBag;

/**
 * @Route(name="app_")
 */
class MainController extends AbstractController
{

    /**
     * OnePage with description & all projects
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
