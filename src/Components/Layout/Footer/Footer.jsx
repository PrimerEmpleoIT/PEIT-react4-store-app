import { footerIcons, footerList } from "@/Helpers"
import {
  Box,
  Button,
  Container,
  Flex,
  HStack,
  Image,
  Input,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react"
import { FaFacebook, FaInstagram } from "react-icons/fa"

function Footer() {
  return (
    <Box
      fontFamily={"body"}
      bg={useColorModeValue("dark", "white")}
      color={useColorModeValue("white", "black")}
      overflowX={"hidden"}
    >
      <Container
        as={Stack}
        maxW={"7xl"}
        py={10}
        px={16}
        display={"flex"}
        gap={10}
      >
        <Flex justify={"space-between"} align={"center"}>
          <Stack gap={1}>
            <Text
              fontWeight={"medium"}
              fontSize={{ md: "large", lg: "title" }}
              color={"white"}
            >
              Sign Up To Our Newsletter.
            </Text>
            <Text
              fontWeight={"regular"}
              fontSize={{ base: "review", lg: "normal" }}
              color={"white"}
            >
              Be the first to hear about the latest offers.
            </Text>
          </Stack>
          <HStack align={"center"} gap={3} color={"white"}>
            <Input
              type={"email"}
              w={{ base: "12rem", lg: "100%" }}
              focusBorderColor={"white"}
              placeholder={"Your Email"}
              fontWeight={"regular"}
              fontSize={{ base: "small", lg: "general" }}
            />
            <Button
              bg={"logo"}
              textAlign={"center"}
              fontWeight={"semibold"}
              fontSize={{ base: "description", lg: "general" }}
              borderRadius={"3.125rem"}
              w={"9.4rem"}
              py={3}
              px={5}
            >
              Suscribe
            </Button>
          </HStack>
        </Flex>
        <SimpleGrid columns={{ xs: 1, lg: 5 }} spacing={2}>
          {footerList.map((footer) => {
            const { id, title, list } = footer

            return (
              <Stack key={id} gap={4}>
                <Text
                  fontWeight={"bold"}
                  fontSize={{ base: "small", lg: "general" }}
                  color={"disable"}
                >
                  {title}
                </Text>
                <Flex flexDirection={"column"} gap={1} w={"18vw"}>
                  {list.map((pages, i) => (
                    <Text
                      key={i}
                      fontWeight={"normal"}
                      fontSize={{ base: "review", lg: "description" }}
                      color={"white"}
                    >
                      {pages}
                    </Text>
                  ))}
                </Flex>
              </Stack>
            )
          })}
          <Stack align={"flex-start"} gap={4}>
            <Text
              fontWeight={"bold"}
              fontSize={{ base: "small", lg: "general" }}
              color={"disable"}
            >
              Address
            </Text>
            <Flex flexDirection={"column"} gap={1} w={"18vw"}>
              <Text
                fontWeight={"normal"}
                fontSize={{ base: "review", lg: "description" }}
                color={"white"}
              >
                <Text>Address: 1234 Street Adress City Address, 1234</Text>
                <Text display={"flex"} gap={1}>
                  Phones: <Text color={"contact"}>(00) 1234 5678</Text>
                </Text>
                <Text>We are open: Monday-Thursday: 9:00 AM - 5:30 PM</Text>
                <Text>Friday: 9:00 AM - 6:00 PM</Text>
                <Text>Saturday: 11:00 AM - 5:00 PM</Text>
                <Text display={"flex"} gap={1}>
                  E-mail: <Text color={"contact"}>shop@email.com</Text>
                </Text>
              </Text>
            </Flex>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={"solid"}
        borderColor={useColorModeValue("gray.200", "gray.700")}
      >
        <Container
          as={Stack}
          maxW={"6xl"}
          py={10}
          px={16}
          display={"flex"}
          gap={{ base: 4, md: 10 }}
          direction={{ base: "column", md: "row" }}
          justify={{ md: "space-between" }}
          align={{ md: "center" }}
        >
          <HStack>
            <FaFacebook />
            <FaInstagram />
          </HStack>
          <HStack>
            {footerIcons.map((icons) => {
              const { id, icon } = icons

              return <Image key={id} src={icon} alt="footer-icon" />
            })}
          </HStack>
          <Text
            fontWeight={"medium"}
            fontSize={"review"}
            textAlign={"right"}
            color={"disable"}
          >
            Copyright © 2020 Shop Pty. Ltd.
          </Text>
        </Container>
      </Box>
    </Box>
  )
}
export default Footer
