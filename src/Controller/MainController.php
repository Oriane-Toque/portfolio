<?php
namespace App\Controller;

use App\Repository\CollaborationRepository;
use App\Repository\LangageRepository;
use App\Repository\SkillRepository;
use App\Repository\TechnologyRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\HttpFoundation\Response;

/**
 * @Route(name="app_")
 */
class MainController extends AbstractController {

    /**
     * OnePage with description & all projects
     *
     * @Route("/", name="home", methods={"GET"})
     * @return Response
     */
    public function list(LangageRepository $lr, CollaborationRepository $cr, SkillRepository $sr, TechnologyRepository $tr): Response {

        return $this->render("home/index.html.twig", [
            "languages" => $lr->findAll(),
            "collaborations" => $cr->findAll(),
            "technos" => $tr->findAll(),
            "skills" => $sr->findAll(),
        ]);
    }
}