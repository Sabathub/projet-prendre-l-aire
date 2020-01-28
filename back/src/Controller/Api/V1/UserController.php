<?php

namespace App\Controller\Api\V1;

use App\Form\EditPasswordType;
use App\Form\EditUserType;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

/**
 * @Route("/api/v1/secured/users", name="api_v1_secured_users_")
 */
class UserController extends AbstractController
{
    /**
     * Show single user's information
     * @Route("/profile", name="show", methods={"GET"})
     */
    public function show(SerializerInterface $serializer)
    {
        // get the current user connected with the Jwt Token
        $user = $this->getUser();

        // return single user's informations in JSON
        $data = $serializer->normalize($user, null, ['groups' => 'api_v1_user']);
        return $this->json($data);
    }

     /**
      * Change user datas (email or username)
     * @Route("/edit", name="edit", requirements={"id": "\d+"}, methods="PATCH")
     */
    public function edit(Request $request): Response
    {
        // get the current user connected with the Jwt Token
        $user = $this->getUser();

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
     * @Route("/edit/password", name="edit_password", requirements={"id": "\d+"}, methods="PUT")
     */
    public function editPassword(Request $request, UserPasswordEncoderInterface $passwordEncoder): Response
    {
        // get the current user connected with the Jwt Token
        $user = $this->getUser();

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
     * @Route("/delete", name="delete", requirements={"id": "\d+"}, methods={"DELETE"})
     */
    public function delete()
    {
        // get the current user connected with the Jwt Token
        $user = $this->getUser();

        // we find the user by the id and remove it
        $em = $this->getDoctrine()->getManager();
        $em->remove($user);
        $em->flush();

        // return JSON 
        return $this->json('user deleted');
    }
   
}