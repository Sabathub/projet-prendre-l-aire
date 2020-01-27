<?php

namespace App\Controller;

use App\Entity\Contact;
use App\Form\ContactType;
use App\Notification\ContactNotification;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\Routing\Annotation\Route;

class ContactController extends AbstractController
{
    /**
     * @Route("/contact", name="contact", methods={"POST"})
     */
    public function show(Request $request, ContactNotification $notification)
    {
        // first action we get the Json content
        $contact = $request->getContent();

        // then decode Json
        $data = json_decode($contact, true);

        // and replace this into the request with parameters in array shape
        $request->request->replace(is_array($data) ? $data : array());

        // second action is to create a new object user and a UserType form associated that we fill with the request
        $contact = new Contact();
        $form = $this->createForm(ContactType::class, $contact, ['csrf_protection' => false]);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {

            // notify the contact
            $notification->notify($contact);

            // return user in JSON
            // $data = $serializer->normalize($user, null, ['groups' => 'api_v1_user']);
            return $this->json('contact sent');
        }
        
        return $this->json('failed to send the message');
    }
}
