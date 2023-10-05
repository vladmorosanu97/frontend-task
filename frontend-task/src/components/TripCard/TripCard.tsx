import { Card, CardBody, Text, Button, Stack, Flex } from "@chakra-ui/react";
import ITrip from "../../models/Trip";
import { FaStar } from "react-icons/fa";

interface Props {
  trip: ITrip;
  handleShowMore: (id: number) => void;
}

const TripCard = ({ trip, handleShowMore }: Props) => {
  const imageUrl = `url('${trip.photoUrl}')`;
  return (
    <Card p={2}>
      <CardBody p={5} pb={0} bgImage={imageUrl} borderRadius="8">
        <Text
          noOfLines={1}
          fontSize={18}
          fontWeight={600}
          textAlign={["center"]}
          color="white"
        >
          {trip.title}
        </Text>
        <Text fontSize={12} textAlign={["center"]} color="gray.100">
          {trip.countries.length} countries, {trip.days} days.
        </Text>
        <Stack align="center" my="7">
          <Button
            size="sm"
            variant="solid"
            bg="blue.100"
            color="white"
            fontWeight={400}
            fontSize={12}
            onClick={() => handleShowMore(trip.id)}
          >
            Learn more
          </Button>
        </Stack>
        <Flex p={2} justify="space-between" bg="blue.900" borderRadius="8">
          <Text fontSize={12} color="white">
            Emissions offset:
          </Text>
          <Text fontSize={12} color="white">
            {trip.co2Kilograms} CO₂e
          </Text>
        </Flex>
        <Flex
          mt={1}
          p={2}
          justify="space-between"
          bg="white"
          borderTopRadius="8"
        >
          <Text fontSize={12} fontWeight={700} color="black">
            Trip rating
          </Text>
          <Flex align="center">
            {Array.from({ length: Math.floor(trip.rating) }, () => {
              return <FaStar size={15} color="#ffc107" />;
            })}
            {Array.from({ length: 5 - Math.floor(trip.rating) }, () => {
              return <FaStar size={15} color="#aaaaaa" />;
            })}
            <Text ml={1} fontSize={12} color="black" fontWeight={700}>
              {trip.rating}
            </Text>
          </Flex>
        </Flex>
      </CardBody>
    </Card>
  );
};

export default TripCard;
