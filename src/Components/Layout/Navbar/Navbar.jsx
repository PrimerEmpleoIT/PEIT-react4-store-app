import Logo from "@/assets/navBar/Logo.svg";
import ProfilePhoto from "@/assets/navBar/ProfilePhoto.svg";
import { links } from "@/Helpers/navBarLinks";
import { NavLink } from "react-router-dom";
import { pagesRoutes } from "@/Helpers";
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
import NavBarMobileScreen from "./NavBarMobileScreen";

function Navbar() {
  return (
    <>
      <Box borderBottom="1px" borderColor="empty">
        <Flex
          gap={{ base: "2", md: "3", lg: 4, xl: 4 }}
          h="92px"
          maxW={"1440px"}
          alignItems="center"
          justifyContent="space-between"
          display={["none", "none", "none", "flex"]}
          mx={"auto"}
          pr={2}
        >
          <HStack spacing={{ md: 4, lg: 12 }} pl={{ md: 2, lg: 6 }}>
            <NavLink to="/">
              <Image src={Logo} h="30px" w="40px" alt="" />
            </NavLink>
            <Flex gap={{ md: 3, lg: 6, xl: 8 }}>
              {links.map((link) => {
                return (
                  <HStack key={link.id}>
                    <NavLink
                      to={pagesRoutes[link.id - 1]}
                      fontSize={{
                        base: "small",
                        lg: "description",
                        xl: "general",
                      }}
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
                  borderWidth={"2px"}
                  border={"solid"}
                  borderColor={"logo"}
                  color={"logo"}
                  fontSize={{ md: "description", lg: "general" }}
                  fontWeight={"semibold"}
                  w={{ md: "6rem", xl: "7.5rem" }}
                  borderRadius="66px"
                >
                  Our deals
                </Button>
              </Box>
            </Flex>
          </HStack>
          <HStack align="center">
            <IconButton
              aria-label="Cart"
              size="lg"
              icon={<GrCart />}
              fontSize={"large"}
            />
            <Button w="60px" h="36px" bgColor="transparent">
              <Image src={ProfilePhoto} alt="profile-icon" />
            </Button>
          </HStack>
        </Flex>
      </Box>

      {/* mobile view */}
      <Hide above="md">
        <NavBarMobileScreen />
      </Hide>
    </>
  );
}
export default Navbar;
