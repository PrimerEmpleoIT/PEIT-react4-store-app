import Logo from "@/assets/navBar/Logo.svg";
import ProfilePhoto from "@/assets/navBar/ProfilePhoto.svg";
import { links } from "@/Helpers/navBarLinks";
import { Button, Flex, Hide, IconButton, Image, Link } from "@chakra-ui/react";
import { GrCart } from "react-icons/gr";
import { NavBarMobileScreen } from "..";

function Navbar() {
  return (
    <>
      <Flex borderBottom="1px" borderColor="gray" justify="center">
        <Flex
          gap={{ base: "2", md: "3", lg: "6" }}
          h="92px"
          alignItems="center"
          display={["none", "none", "none", "flex"]}
        >
          <Image src={Logo} h="30px" w="40px" />
          {links.map((link) => {
            return (
              <Flex key={link.id}>
                <Link
                  fontSize={{ base: "12px", md: "12px", lg: "14px" }}
                  fontWeight="600"
                  fontFamily="Poppins"
                >
                  {link.title}
                </Link>
              </Flex>
            );
          })}
          <Flex>
            <Button variant="outline" colorScheme="blue" borderRadius="66px">
              Our deals
            </Button>
          </Flex>
          <Flex>
            <Flex alignItems="center" gap="2">
              <IconButton
                aria-label="Cart"
                size="lg"
                icon={<GrCart />}
                fontSize="20px"
              />
              <Button w="60px" h="36px" bgColor="transparent">
                <Image src={ProfilePhoto} />
              </Button>
            </Flex>
          </Flex>
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
