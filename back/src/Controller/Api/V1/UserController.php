<?php

namespace App\Controller\Api\V1;

use App\Entity\User;
use App\Form\UserType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Http\Authentication\AuthenticationUtils;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

/**
 * @Route("/api/v1/users", name="api_v1_users_")
 */
class UserController extends AbstractController
{
    /**
     * Show single user's information
     * @Route("/{id}", name="show", requirements={"id": "\d+"}, methods={"GET"})
     */
    public function show(User $user, SerializerInterface $serializer)
    {
        // return single user's informations in JSON
        $data = $serializer->normalize($user, null, ['groups' => 'api_v1_user']);
        return $this->json($data);
    }

    /**
     * Create a new user
     * @Route("/new", name="register", methods={"POST"})
     */
    public function register(Request $request, SerializerInterface $serializer, UserPasswordEncoderInterface $passwordEncoder): Response
    {
        // first create new object user and a form associated
        $user = new User();
        $form = $this->createForm(UserType::class, $user, ['csrf_protection' => false]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            
            // attribute role user
            $user->setRoles(['ROLE_USER']);
            
            // get plain password 
            $plainPassword = $user->getPassword();

            // encode password
            $encodedPassword = $passwordEncoder->encodePassword($user, $plainPassword);
            
            // replace plain password by the hashed password
            $user->setPassword($encodedPassword);

            // save in database
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($user);
            $entityManager->flush();

            // return user in JSON
            $data = $serializer->normalize($user, null, ['groups' => 'api_v1_user']);
            return $this->json($data);
        }
        
    }

    /**
     * @Route("/logout", name="app_logout")
     */
    public function logout()
    {
        throw new \Exception('This method can be blank - it will be intercepted by the logout key on your firewall');
    }
}
