import { Box } from "@chakra-ui/react";
import { Center } from "@chakra-ui/react";
import NewProducts from "./NewProducts";

export default function NewProduct() {
  return (
    <>
      <Center>
        <Box breakpoint="(min-width: 800px)" w="95%" p={4}>
          <NewProducts />
        </Box>
      </Center>
    </>
  );
}
