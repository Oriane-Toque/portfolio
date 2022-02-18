<?php

namespace App\DataFixtures;

use Doctrine\Bundle\FixturesBundle\Fixture;
use Doctrine\Persistence\ObjectManager;
use App\DataFixtures\Providers\Skill;
use App\Entity\Collaboration;
use App\Entity\Langage;
use App\Entity\Skill as EntitySkill;
use App\Entity\Technology;

class AppFixtures extends Fixture
{
    public function load(ObjectManager $manager): void
    {
        $skill = new Skill;

        // Création d'objets Language
        foreach($skill->getLanguage() as $icon => $name) {
            $language = new Langage;
            $language->setName($name);
            $language->setIcon($icon);

            $manager->persist($language);
        }

        // Création d'objets Technology
        foreach($skill->getTech() as $icon => $name) {
            $technology = new Technology;
            $technology->setName($name);
            $technology->setIcon($icon);

            $manager->persist($technology);
        }

        // Création d'objets Collaboration
        foreach($skill->getCollaboration() as $icon => $name) {
            $collaboration = new Collaboration;
            $collaboration->setName($name);
            $collaboration->setIcon($icon);

            $manager->persist($collaboration);
        }

        // Création d'objets Skill
        foreach($skill->getSkills() as $icon => $name) {
            $newSkill = new EntitySkill;
            $newSkill->setName($name);
            $newSkill->setIcon($icon);

            $manager->persist($newSkill);
        }

        $manager->flush();
    }
}
