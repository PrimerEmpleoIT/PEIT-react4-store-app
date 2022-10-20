import { GiHamburgerMenu } from "react-icons/gi";
import { GrCart } from "react-icons/gr";
import { links } from "@/Helpers/navBarLinks";
import {
  Stack,
  Text,
  Flex,
  Image,
  Button,
  IconButton,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import Logo from "./../../assets/navBar/Logo.svg";
import ProfilePhoto from "./../../assets/navBar/ProfilePhoto.svg";

function NavBarMobileScreen() {
  return (
    <Stack borderBottom="1px" borderColor="gray" paddingY={2}>
      <Menu>
        {({ onClose }) => (
          <>
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
            <MenuList zIndex={10}>
              <Flex alignItems="center" justify="space-between">
                <Image src={Logo} h="30px" w="40px" mr={"120px"} />
                <MenuItem onClick={() => onClose} w="0" mr="10px">
                  {" "}
                  <Text fontSize="25px">X</Text>
                </MenuItem>
              </Flex>

              <MenuDivider />
              {links.map((link) => {
                return <MenuItem key={link.id}>{link.title}</MenuItem>;
              })}
              <Button
                variant="outline"
                colorScheme="blue"
                borderRadius="66px"
                ml={2}
              >
                Our deals
              </Button>
            </MenuList>
          </>
        )}
      </Menu>
    </Stack>
  );
}

export default NavBarMobileScreen;
