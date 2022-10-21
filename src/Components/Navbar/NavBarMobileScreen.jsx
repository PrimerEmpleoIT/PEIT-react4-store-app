import { GiHamburgerMenu } from "react-icons/gi";
import { GrCart, GrFormNext } from "react-icons/gr";
import { links } from "@/Helpers/navBarLinks";
import {
  Text,
  Flex,
  Image,
  Button,
  IconButton,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerHeader,
  DrawerBody,
  useDisclosure,
  DrawerCloseButton,
  Box,
} from "@chakra-ui/react";
import Logo from "./../../assets/navBar/Logo.svg";
import ProfilePhoto from "./../../assets/navBar/ProfilePhoto.svg";

function NavBarMobileScreen() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Flex
        justify="space-around"
        alignItems="center"
        borderBottom="1px"
        borderColor="gray"
        paddingY={2}
      >
        <Button
          as={IconButton}
          icon={<GiHamburgerMenu />}
          variant="outline"
          onClick={onOpen}
        ></Button>
        <Image src={Logo} />

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

        {/* <Box borderBottom="1px" borderColor="gray" paddingY={2}> */}
      </Flex>
      <Drawer placement="left" onClose={onClose} isOpen={isOpen} gap={2}>
        <DrawerOverlay />
        <DrawerContent>
          <Flex direction="column">
            <DrawerCloseButton fontSize="12px" mt="10px" />

            <DrawerHeader borderBottomWidth="1px">
              {" "}
              <Image src={Logo} h="30px" w="40px" mr={"120px"} />
            </DrawerHeader>
          </Flex>
          <DrawerBody>
            {links.map((link) => {
              return (
                <Flex justify="space-between">
                  <Text key={link.id} mb={2}>
                    {link.title}
                  </Text>
                  <GrFormNext />
                </Flex>
              );
            })}
            <Button variant="outline" colorScheme="blue" borderRadius="66px">
              Our deals
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default NavBarMobileScreen;
