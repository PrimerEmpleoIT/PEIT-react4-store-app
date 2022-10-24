import { Box } from "@chakra-ui/react";
import ImageSlider from "./ImageSlider";
import { SlideData } from "./SlideData";
import { Center } from "@chakra-ui/react";

export default function Banner() {
  return (
    <>
      <Center>
        <Box w="80%" p={1} color="white">
          <ImageSlider slides={SlideData} />
        </Box>
      </Center>
    </>
  );
}
