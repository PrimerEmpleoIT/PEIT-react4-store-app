import { Box } from "@chakra-ui/react";
import ImageSlider from "./ImageSlider";
import { SlideData } from "./SlideData";
import {Center} from "@chakra-ui/react";

export default function Banner() {
  return (
    <>
      <Center> 
        <Box w="80%" p={4} color="white" alignItems="center">
        <ImageSlider slides={SlideData} />
        </Box>
      </Center>
    </>
  );
}
