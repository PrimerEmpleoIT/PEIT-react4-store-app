import { useState } from "react";
import {
  Stack,
  Box,
  Text,
  Flex,
  Image,
  Button,
  IconButton,
  Link,
} from "@chakra-ui/react";
import Logo from "./../../assets/navBar/Logo.svg";
function Navbar() {
  const [display, setDisplay] = useState("none");

  const links = [
    {
      id: 1,
      title: "laptops",
    },
    {
      id: 2,
      title: "Desktop PC",
    },
    {
      id: 3,
      title: "Networkin Devices",
    },
    {
      id: 4,
      title: "Printer & Scanners",
    },
    {
      id: 5,
      title: "Pc Parts",
    },
    {
      id: 6,
      title: "All Other Producs",
    },
    {
      id: 7,
      title: "Repairs",
    },
  ];

  return (
    <>
      {/* <Flex
        borderBottom="1px"
        borderColor="gray.200"
        w="100%"
        justify="center"
        gap="20"
      >
        <Flex
          gap="8"
          h="92px"
          alignItems="center"
          display={["none", "none", "flex", "flex"]}
        >
          <Image src={Logo} />
          {links.map((link) => {
            return (
              <Box>
                <Link key={link.id} fontSize="14px" fontWeight="600">
                  {link.title}
                </Link>
              </Box>
            );
          })}
          <Button variant="outline" colorScheme="blue" borderRadius="66px">
            Our deals
          </Button>
          <Flex>
            <Flex alignItems="center" gap="2">
              <Button>C</Button>
              <Button>IMG</Button>
            </Flex>
          </Flex>
        </Flex>

        <Flex
          justifyContent="space-between"
          w="100%"
          m={2}
          display={["flex", "flex", "none", "none"]}
        >
          <Image src={Logo} />
          <IconButton
            aria-label="Open Menu"
            size="lg"
            mr={2}
            display={["flex", "flex", "none", "none"]}
            onClick={() => setDisplay("Flex")}
          >
            H
          </IconButton>
        </Flex>
      </Flex>

      <Flex
        w="100%"
        justify="center"
        bgColor="#fff"
        zIndex={20}
        display={display}
        pos="fixed"
        top="0"
        left="0"
        flexDir="column"
      >
        <Flex justify="flex-end">
          <IconButton
            mt={2}
            mr={2}
            aria-label="Close Menu"
            size="lg"
            onClick={() => setDisplay("none")}
          />
        </Flex>
        <Flex flexDir="column" align="center">
          {links.map((link) => {
            return (
              <Link>
                <Link key={link.id} fontSize="14px" fontWeight="600">
                  {link.title}
                </Link>
              </Link>
            );
          })}
          <Button variant="outline" colorScheme="blue" borderRadius="66px">
            Our deals
          </Button>
          <Flex>
            <Flex alignItems="center" gap="2">
              <Button>C</Button>
              <Button>IMG</Button>
            </Flex>
          </Flex>
        </Flex>
      </Flex>*/}
    </>
  );
}
export default Navbar;
