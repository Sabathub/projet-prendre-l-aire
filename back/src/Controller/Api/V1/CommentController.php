<?php

namespace App\Controller\Api\V1;

use App\Entity\Comment;
use App\Form\CommentType;
use App\Repository\CommentRepository;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;


/**
* @Route("/api/v1/comments", name="api_v1_comments_")
*/
class CommentController extends AbstractController
{
    /**
     * @Route("/", name="list", methods={"GET"})
     */
    public function list(CommentRepository $commentRepository, SerializerInterface $serializer)
    {
        $comments = $commentRepository->findAll();
        $data = $serializer->normalize($comments, null, ['groups' => 'api_v1_comment']);
        return $this->json($data);
    }

    /**
     * @Route("/{id}", name="show", methods={"GET"})
     */
    public function show(Comment $comment, SerializerInterface $serializer)
    {
        $data = $serializer->normalize($comment, null, ['groups' => 'api_v1_comment']);
        return $this->json($data);
    }

    /**
     * @Route("/", name="new", methods={"POST"})
     */
    public function new(Request $request)
    {
        dd($request);
        $comment = new Comment();
        $form = $this->createForm(CommentType::class, $comment);
        $form->handleRequest($request);
        // Jusqu'ci tout se passe comme d'habitude
        // On crée un objet Question (vide), on crée un formulaire QuestionType lié à $question
        //On relie le formulaire à la requête, ce qui nous donne un formulaire rempli et un objet Question rempli avec les données reçues
        // Donc, $form->isSubmitted() donne true
        // Cependant ->isValid() donne false
        // La validation concerne à la fois les contraintes sur les données du formulaire mais aussi le token. On peut désactiver le token avec une option comme ici dans ->createForm()
        if ($form->isSubmitted() && $form->isValid()) {

            // Ici, si on teste le contrôleur maintenant, Symfony ne trouve pas d'utilisateur, $this->getUser() donne null. Ça produira une erreur dans notre code
            // Pour aller jusqu'au bout, il faudrait que la requête API envoie quelque chose pour s'authentifier. C'est là que le JWT devient intéressant, on peut aussi utiliser le cookie.
            // On associe le user connecté à la question
            //$comment->setUser($this->getUser());
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($comment);
            $entityManager->flush();
            return $this->json('un truc pour dire que ça marche');
        }
        return $this->json('le formulaire envoyé est mal formé');
    }
}
