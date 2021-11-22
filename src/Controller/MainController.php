<?php
namespace App\Controller;

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
    public function list(): Response {

        return $this->render("home/index.html.twig", []);
    }
}