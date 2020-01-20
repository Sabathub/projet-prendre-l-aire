<?php

namespace App\Controller\Api\V1;

use App\Entity\Highway;
use App\Repository\HighwayRepository;
use Symfony\Component\Routing\Annotation\Route;
use Symfony\Component\Serializer\SerializerInterface;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;

/**
 * @Route("/api/v1/highways", name="api_v1_highways_")
 */
class HighwayController extends AbstractController
{
    /**
     * @Route("/", name="list", methods={"GET"})
     */
    public function list(HighwayRepository $highwayRepository, SerializerInterface $serializer)
    {
        $highways = $highwayRepository->findAll();
        $data = $serializer->normalize($highways, null, ['groups' => 'api_v1_highways']);
        return $this->json($data);
    }

    /**
     * @Route("/{id}", name="show", methods={"GET"})
     */
    public function show(Highway $highway, SerializerInterface $serializer)
    {
        $data = $serializer->normalize($highway, null, ['groups' => 'api_v1_highways']);
        return $this->json($data);
    }
}
