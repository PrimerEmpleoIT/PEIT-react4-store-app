import { GiHamburgerMenu } from "react-icons/gi";
import { GrClose, GrCart } from "react-icons/gr";
import {
  Stack,
  Box,
  Text,
  Flex,
  Image,
  Button,
  IconButton,
  Link,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Show,
  Hide,
} from "@chakra-ui/react";
import Logo from "./../../assets/navBar/Logo.svg";
import ProfilePhoto from "./../../assets/navBar/ProfilePhoto.svg";
function Navbar() {
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
        {" "}
        <Stack borderBottom="1px" borderColor="gray" paddingY={2}>
          <Menu>
            <Flex justify="space-around" alignItems="center">
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<GiHamburgerMenu />}
                variant="outline"
              />
              <Image src={Logo} />
              <Button variant="outline" colorScheme="blue" borderRadius="66px">
                Our deals
              </Button>
              <IconButton
                aria-label="Cart"
                size="lg"
                icon={<GrCart />}
                fontSize="20px"
                Color="transparent"
              />
              <Button w="60px" h="36px" bgColor="transparent">
                <Image src={ProfilePhoto} />
              </Button>
            </Flex>
            <MenuList>
              {links.map((link) => {
                return <MenuItem key={link.id}>{link.title}</MenuItem>;
              })}
            </MenuList>
          </Menu>
        </Stack>
      </Hide>
    </>
  );
}
export default Navbar;
