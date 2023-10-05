import { Stack } from "@chakra-ui/react";
import { FaStar } from "react-icons/fa";
import { Flex, Text } from "@chakra-ui/react";

import IAdvantage from "../../../models/Advantage";

interface Props {
  advantage: IAdvantage;
}

const Advantage = ({ advantage }: Props) => {
  return (
    <>
      <Flex>
        <FaStar size="35px" />
        <Stack maxW="sm" ml={2}>
          <Text mt={1} fontSize="md" fontWeight={600}>
            {advantage.title}
          </Text>
          <Text fontSize={12} color="gray.900">
            {advantage.description}
          </Text>
        </Stack>
      </Flex>
    </>
  );
};
export default Advantage;
