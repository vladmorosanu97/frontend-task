import { Text, Box, Image, SimpleGrid } from "@chakra-ui/react";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import TripService from "../../services/TripService";
import ITripDetails from "../../models/TripDetails";
import Advantage from "./Advantage/Advantage";
import Emissions from "./Emissions/Emissions";

import "./Trip.scss";

const Trip = () => {
  const [trip, setTrip] = useState<ITripDetails | null>(null);
  const params = useParams();
  const tripId: number = +params.tripId!;

  const navigate = useNavigate();

  const retrieveTrip = (tripId: number) => {
    TripService.getById(tripId)
      .then((response: any) => {
        setTrip(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };

  useEffect(() => {
    retrieveTrip(tripId);
  }, []);

  return (
    <div className="trip-container">
      <Text
        cursor="pointer"
        fontSize={12}
        color="gray.900"
        onClick={() => navigate(-1)}
      >
        Go back
      </Text>
      <Text mt={30} fontSize="3xl" fontWeight={600}>
        {trip?.title}
      </Text>
      <Text fontSize="sm" color="gray.900">
        {trip?.subtitle}
      </Text>
      <SimpleGrid minChildWidth="300px" gap={6} my={8}>
        <Box boxSize="10xl">
          <Image
            minW="100px"
            borderRadius={10}
            src={trip?.photoUrl}
            alt="tourist photo trap"
          />
        </Box>
        <Emissions trip={trip} />
      </SimpleGrid>
      <Text fontSize="md" fontWeight={600}>
        Overview
      </Text>
      <SimpleGrid columns={2} spacing={8} maxW="3xl" mt={5}>
        {trip?.advantages.map((advantage) => (
          <Advantage advantage={advantage} />
        ))}
      </SimpleGrid>
      <Text maxW="3xl" py={10} fontSize={12}>
        {trip?.description}
      </Text>
    </div>
  );
};

export default Trip;
