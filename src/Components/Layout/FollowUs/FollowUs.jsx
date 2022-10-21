import React from "react";
import { Box, Flex, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";

import desk3 from "@/assets/FollowUs/desk2.svg";

function FollowUs() {
  return (
    <>
      <SimpleGrid
        columns={6}
        spacing={1}
        w="100%"
        justifyItems="center"
        paddingX={20}
      >
        <Flex w="230px">
          <Text>
            <Image src={desk3} />
            If you’ve recently made a desktop PC or laptop purchase, you might
            want to consider adding peripherals to enhance your home office
            setup, your gaming rig, or your business workspace...
          </Text>
        </Flex>
        <Box> hola</Box>
        <Box> hola</Box>
        <Box> hola</Box>
        <Box> hola</Box>
        <Box> hola</Box>
      </SimpleGrid>
    </>
  );
}

export default FollowUs;
