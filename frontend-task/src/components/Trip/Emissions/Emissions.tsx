import {
  Card,
  CardBody,
  Text,
  Divider,
  UnorderedList,
  SimpleGrid,
  ListItem,
} from "@chakra-ui/react";
import ITripDetails from "../../../models/TripDetails";

interface Props {
  trip: ITripDetails | null;
}

const Emissions = ({ trip }: Props) => {
  return (
    <Card w={300} minH={250} maxH={250} textAlign={["left"]}>
      <CardBody p={5} pb={0} borderRadius="8">
        <Text noOfLines={1} fontSize={18} fontWeight={600} color="black">
          {trip?.days} days
        </Text>
        <Text fontSize={12} fontWeight={600} color="gray.900">
          Emissions: {trip?.co2Kilograms} CO₂e
        </Text>
        <Divider my={4} />
        <Text fontSize={12} fontWeight={600} color="gray.900">
          Countries included:
        </Text>
        <UnorderedList>
          <SimpleGrid columns={2} spacingX={2} mt={2}>
            {trip?.countries.map((country) => (
              <ListItem fontSize={10} color="gray.900">
                {country}
              </ListItem>
            ))}
          </SimpleGrid>
        </UnorderedList>
      </CardBody>
    </Card>
  );
};
export default Emissions;
