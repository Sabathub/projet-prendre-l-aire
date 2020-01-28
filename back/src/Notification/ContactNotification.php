<?php

namespace App\Notification;

use App\Entity\Contact;

class ContactNotification
{
    /**
     * Undocumented function
     *
     * @param \Swift_Mailer $mailer
     * @param Environment $renderer
     */
    private $mailer;

    /**
     * Undocumented variable
     *
     * @var Environment
     */
    private $renderer;


    public function __construct(\Swift_Mailer $mailer, Environment $renderer)
    {
        $this->mailer = $mailer;
        $this->renderer = $renderer;
    }

    public function notify(Contact $contact){
        $message = (new \Swift_Message('Re : ' . $contact->getSubject()))
            ->setFrom($contact->getEmail())
            ->setTo('contact@prendrelaire.com')
            ->setReplyTo($contact->getEmail())
            ->setBody(
                $this->renderer->render(
                    // templates/emails/contact.html.twig
                    'emails/contact.html.twig', [
                    'contact' => $contact
                    ]),
                'text/html'
                    );
        $this->mailer->send($message);



    // return $this->render(...);
    }
}