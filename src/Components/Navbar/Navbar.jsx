import Logo from "@/assets/navBar/Logo.svg";
import ProfilePhoto from "@/assets/navBar/ProfilePhoto.svg";
import { pagesRoutes } from "@/Helpers";
import { links } from "@/Helpers/navBarLinks";

import {
  Box,
  Button,
  Flex,
  Hide,
  HStack,
  IconButton,
  Image,
  Link,
} from "@chakra-ui/react";
import { GrCart } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import { NavBarMobileScreen } from "..";

function Navbar() {
  return (
    <>
      <Flex borderBottom="1px" borderColor="gray" justify="center">
        <Flex
          gap={{ base: "2", md: "3", lg: 10, xl: 16 }}
          h="92px"
          alignItems="center"
          display={["none", "none", "none", "flex"]}
          px={2}
        >
          <NavLink to={"/"}>
            <Image src={Logo} h="30px" w="40px" />
          </NavLink>
          <Flex gap={{ md: 2, lg: 8 }}>
            {links.map((link) => {
              return (
                <HStack key={link.id}>
                  <NavLink
                    to={pagesRoutes[link.id - 1]}
                    fontSize={{ base: "12px", md: "12px", lg: "14px" }}
                    fontWeight="600"
                    display={"flex"}
                    align={"center"}
                  >
                    {link.title}
                  </NavLink>
                </HStack>
              );
            })}
            <Box>
              <Button
                variant="outline"
                colorScheme="blue"
                fontSize={{ md: "description", lg: "general" }}
                fontWeight={"semibold"}
                w={{ md: "5rem", xl: "7.5rem" }}
                borderRadius="66px"
              >
                Our deals
              </Button>
            </Box>
          </Flex>
          <HStack align="center">
            <IconButton
              aria-label="Cart"
              size="lg"
              icon={<GrCart />}
              fontSize="20px"
            />
            <Button w="60px" h="36px" bgColor="transparent">
              <Image src={ProfilePhoto} alt="profile-icon" />
            </Button>
          </HStack>
        </Flex>
      </Flex>

      {/* mobile view */}
      <Hide above="md">
        <NavBarMobileScreen />
      </Hide>
    </>
  );
}
export default Navbar;
