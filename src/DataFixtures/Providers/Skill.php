<?php

namespace App\DataFixtures\Providers;

class Skill {

    private $languages = [
        "fab fa-html5" => "HTML5",
        "fab fa-css3-alt" => "CSS3",
        "fab fa-js-square" => "Javascript",
        "fab fa-php" => "PHP",
        "fas fa-database" => "MySQL",
    ];

    private $technologies = [
        "fab fa-symfony" => "Symfony",
        "fab fa-laravel" => "Lumen",
        "fab fa-bootstrap" => "Bootstrap",
        "fab fa-sass" => "Sass",
    ];

    private $collaborations = [
        "fab fa-trello" => "Trello",
        "fab fa-github" => "Github",
        "fab fa-slack" => "Slack",
        "fab fa-discord" => "Discord",
        "fas fa-share-square" => "LiveShare",
        "fab fa-google-drive" => "Google Drive",
    ];

    private $other_skills = [
        "fab fa-git-alt" => "Git",
        "fas fa-spinner" => "Méthode Agile",
        "fas fa-bolt" => "API / API REST",
        "fas fa-sitemap" => "Architecture MVC",
        "fas fa-paint-brush" => "Photoshop",
        "fas fa-palette" => "Illustrator",
    ];

    public function getLanguage() {
        return $this->languages;
    }

    public function getTech() {
        return $this->technologies;
    }

    public function getCollaboration() {
        return $this->collaborations;
    }

    public function getSkills() {
        return $this->other_skills;
    }
}