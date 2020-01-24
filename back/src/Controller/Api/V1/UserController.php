<?php

namespace App\Controller\Api\V1;

use App\Entity\User;
use App\Form\EditPasswordType;
use App\Form\UserType;
use App\Form\EditUserType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

/**
 * @Route("/api/v1/users", name="api_v1_users_")
 */
class UserController extends AbstractController
{
    /**
     * Show single user's information
     * @Route("/{username}", name="show", methods={"GET"})
     */
    public function show(User $user, SerializerInterface $serializer)
    {
        // return single user's informations in JSON
        $data = $serializer->normalize($user, null, ['groups' => 'api_v1_user']);
        return $this->json($data);
    }

    /**
     * Create a new user
     * @Route("/register", name="register", methods={"POST"})
     */
    public function register(Request $request, SerializerInterface $serializer, UserPasswordEncoderInterface $passwordEncoder): Response
    {
        // first action we get the Json content
        $newUser = $request->getContent();

        // then decode Json
        $data = json_decode($newUser, true);

        // and replace this into the request with parameters in array shape
        $request->request->replace(is_array($data) ? $data : array());

        // second action is to create a new object user and a UserType form associated that we fill with the request
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

            // return JSON
            return $this->json('user registered');
        }

        // return JSON if not a success
        return $this->json('failed to register');
    }

     /**
      * Change user datas (email or username)
     * @Route("/{id}/edit", name="edit", requirements={"id": "\d+"}, methods="PATCH")
     */
    public function edit(Request $request, User $user, UserPasswordEncoderInterface $passwordEncoder): Response
    {
        // first action we get the Json content
        $editUser = $request->getContent();

        // then decode Json
        $data = json_decode($editUser, true);

        // and replace this into the request with parameters in array shape
        $request->request->replace(is_array($data) ? $data : array());
        
        // second action is to create a EditUserType form (PATCH method to be able to change username and/or email) associated that we fill with the request
        $form = $this->createForm(EditUserType::class, $user, ['method' => 'PATCH', 'csrf_protection' => false]);
        $form->handleRequest($request);      

        if ($form->isSubmitted() && $form->isValid()) {
            
            // save in the database
            $this->getDoctrine()->getManager()->flush();

            // return JSON
            return $this->json('username and/or email modified');
        }

        // return JSON if not a success
        return $this->json('failed to edit');
    }
   
     /**
      * Change the password
     * @Route("/{id}/edit/password", name="edit_password", requirements={"id": "\d+"}, methods="PUT")
     */
    public function editPassword(Request $request, User $user, UserPasswordEncoderInterface $passwordEncoder): Response
    {
        // first action we get the Json content
        $editPwd = $request->getContent();

        // then decode Json
        $data = json_decode($editPwd, true);

        // and replace this into the request with parameters in array shape
        $request->request->replace(is_array($data) ? $data : array());
        
        // second action is to create a EditPasswordType form (PUT method) associated that we fill with the request
        $form = $this->createForm(EditPasswordType::class, $user, ['method' => 'PUT', 'csrf_protection' => false]);
        $form->handleRequest($request);         

        if ($form->isSubmitted() && $form->isValid()) {
            
            // get plain password 
            $plainPassword = $user->getPassword();

            // encode password
            $encodedPassword = $passwordEncoder->encodePassword($user, $plainPassword);
            
            // replace plain password by the hashed password
            $user->setPassword($encodedPassword);
            
            // save in the database
            $this->getDoctrine()->getManager()->flush();

            // return JSON
            return $this->json('password modified');
        }

        // return JSON if not a success
        return $this->json('failed to change password');
    }

    /**
     * Delete a user
     * @Route("/{id}/delete", name="delete", requirements={"id": "\d+"}, methods={"DELETE"})
     */
    public function delete(User $user)
    {
        // we find the user by the id and remove it
        $em = $this->getDoctrine()->getManager();
        $em->remove($user);
        $em->flush();

        // return JSON 
        return $this->json('user deleted');

    }
   
}
