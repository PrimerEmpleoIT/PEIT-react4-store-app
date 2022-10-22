import React from "react";
import followUs from "./../../../Helpers/followUs";

import { Flex, Hide, Image, SimpleGrid, Stack, Text } from "@chakra-ui/react";

function FollowUs() {
  return (
    <Hide below="lg">
      <Stack>
        <SimpleGrid
          gap={1}
          columns={6}
          w="100%"
          justifyItems="center"
          paddingX={20}
        >
          {followUs.map((i) => {
            return (
              <Flex
                direction="column"
                key={i.id}
                maxW="235px"
                mH="322px"
                mb={3}
              >
                <Image src={i.img} mW="235px" mH="152px" alt="notebook" />
                <Text
                  mt={1}
                  textAlign="center"
                  fontFamily="Poppins"
                  fontSize="12px"
                  fontWeight="medium"
                >
                  {" "}
                  {i.description}
                </Text>
              </Flex>
            );
          })}
        </SimpleGrid>
      </Stack>
    </Hide>
  );
}

export default FollowUs;
