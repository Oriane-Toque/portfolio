<?php

namespace App\Form;

use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\SubmitType;
use Symfony\Component\Form\Extension\Core\Type\TextareaType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Email;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;
use Symfony\Component\Validator\Constraints\Sequentially;
use Symfony\Component\Validator\Constraints\Type;

class ContactType extends AbstractType
{
    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('lastname', TextType::class, [
                'label' => 'Nom *',
                'required' => true,
                'constraints' => [
                    new Sequentially([
                        new NotBlank([], 'Ce champs ne doit pas être vide', false, 'trim'),
                        new Type('string', 'Ce champs doit contenir une chaîne de caractères'),
                        new Length(['min' => 2, 'max' => 50, 'normalizer' => 'trim',
                            'minMessage' => 'Ton nom doit au moins contenir {{ limit }} caractères',
                            'maxMessage' => 'Ton nom ne peut contenir plus de {{ limit }} caractères'
                        ])
                    ])
                ]
            ])
            ->add('firstname', TextType::class, [
                'label' => 'Prénom *',
                'required' => true,
                'constraints' => [
                    new Sequentially([
                        new NotBlank([], 'Ce champs ne doit pas être vide', false, 'trim'),
                        new Type('string', 'Ce champs doit contenir une chaîne de caractères'),
                        new Length(['min' => 2, 'max' => 50, 'normalizer' => 'trim',
                            'minMessage' => 'Ton prénom doit au moins contenir {{ limit }} caractères',
                            'maxMessage' => 'Ton prénom ne peut contenir plus de {{ limit }} caractères'
                        ])
                    ])
                ]
            ])
            ->add('organism', TextType::class, [
                'label' => 'Raison Sociale',
                'required' => false,
                'empty_data' => 'Aucune',
                'constraints' => [
                    new Sequentially([
                        new NotBlank([], 'Ce champs ne doit pas être vide', false, 'trim'),
                        new Type('string', 'Ce champs doit contenir une chaîne de caractères'),
                        new Length(['min' => 2, 'max' => 50, 'normalizer' => 'trim',
                            'minMessage' => 'Le nom de l\'entreprise doit au moins contenir {{ limit }} caractères',
                            'maxMessage' => 'Le nom de l\'entreprise ne peut contenir plus de {{ limit }} caractères'
                        ])
                    ])
                ]
            ])
            ->add('email', EmailType::class, [
                'label' => 'Email *',
                'required' => true,
                'constraints' => [
                    new Sequentially([
                        new NotBlank([], 'Ce champs ne doit pas être vide'),
                        new Email(['message' => '{{ value }} n\'est pas une adresse mail valide.']),
                        new Length(['min' => 6, 'max' => 254, 'normalizer' => 'trim',
                            'minMessage' => 'Une adresse mail doit au moins contenir {{ limit }} caractères',
                            'maxMessage' => 'Une adresse mail ne doit pas contenir plus de {{ limit }} caractères',
                        ])
                    ])
                ]
            ])
            ->add('subject', TextType::class, [
                'label' => 'Objet *',
                'required' => true,
                'constraints' => [
                    new Sequentially([
                        new NotBlank([], 'Ce champs ne doit pas être vide', false, 'trim'),
                        new Type('string', 'Ce champs doit contenir une chaîne de caractères'),
                        new Length(['min' => 2, 'max' => 50, 'normalizer' => 'trim',
                            'minMessage' => 'L\'objet doit au moins contenir {{ limit }} caractères',
                            'maxMessage' => 'L\'objet ne peut contenir plus de {{ limit }} caractères'
                        ])
                    ])
                ]
            ])
            ->add('message', TextareaType::class, [
                'label' => 'Message *',
                'required' => true,
                'constraints' => [
                    new Sequentially([
                        new NotBlank([], 'Ce champs ne doit pas être vide'),
                        new Type('string', 'Ce champs doit contenir une chaîne de caractères'),
                        new Length(['min' => 20, 'max' => 1000, 'normalizer' => 'trim',
                            'minMessage' => 'Le contenu du message doit au moins contenir {{ limit }} caractères',
                            'maxMessage' => 'Le contenu du message ne peut contenir plus de {{ limit }} caractères'
                        ])
                    ])
                ]
            ])
            ->add('submit', SubmitType::class, [
                'label' => 'Envoyer'
            ])
        ;
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            // Configure your form options here
        ]);
    }
}
