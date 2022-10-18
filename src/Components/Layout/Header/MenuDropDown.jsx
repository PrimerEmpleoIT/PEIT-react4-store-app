import {
  Flex,
  Text,
  MenuButton,
  MenuList,
  Button,
  MenuGroup,
  Image,
} from "@chakra-ui/react";
import { FaChevronDown } from "react-icons/fa";
import Clock from "./../../../assets/Header/bx_bx-time.svg";
import Location from "./../../../assets/Header/location.svg";
function MenuDropDown() {
  return (
    <Flex>
      <MenuButton
        as={Button}
        rightIcon={<FaChevronDown />}
        color="grey"
        fontSize={["10px", "10px", "12px"]}
        fontWeight="800"
        fontFamily="Poppins"
      >
        Mon-Thru: <span className="header_OpenToClose">9:00 AM - 5:30 PM</span>
        <MenuList>
          <MenuGroup>
            <Flex
              alignItems="start"
              justify="start"
              paddingX={2}
              gap={1}
              borderBottom="1px solid gray"
            >
              <Image src={Clock} h="35px" w="35px" />
              <Flex direction="column" mt={1} gap={2} fontWeight="normal">
                <Text textAlign="start" fontSize="12px" fontFamily="Poppins">
                  We Are Open
                </Text>
                <Text textAlign="start" fontWeight="semibold" fontSize="12px">
                  Mon-Thu:
                  <Text as="span" color="black">
                    {" "}
                    9:00 AM - 5:30 PM
                  </Text>
                </Text>
                <Text textAlign="start" fontWeight="semibold">
                  Fr:
                  <Text as="span" color="black">
                    {" "}
                    9:00 AM - 6:00 PM
                  </Text>
                </Text>
                <Text textAlign="start" fontWeight="semibold">
                  Sat:
                  <Text as="span" color="black">
                    {" "}
                    11:00 AM - 5:00 PM
                  </Text>
                </Text>
              </Flex>
            </Flex>
          </MenuGroup>
          <MenuGroup>
            <Flex
              paddingY={1}
              paddingX={2}
              gap={1}
              align="center"
              borderBottom="1px solid gray"
            >
              <Image src={Location} w={"35px"} h={"35px"} />
              <Flex direction="column">
                <Text
                  fontSize="13px"
                  fontWeight="semibold"
                  fontFamily="Poppins"
                  color="black"
                >
                  Address: 1234 Street Adress,
                </Text>
                <Text
                  textAlign="start"
                  fontSize="13px"
                  fontWeight="semibold"
                  fontFamily="Poppins"
                  color="black"
                >
                  City Address, 1234
                </Text>
              </Flex>
            </Flex>
          </MenuGroup>
          <MenuGroup>
            <Flex direction="column" paddingY={1} paddingX={5}>
              <Text
                textAlign="start"
                fontSize="13px"
                fontWeight="sembiold"
                fontFamily="Poppins"
                color="black"
              >
                Phones:{" "}
                <Text as="span" color="blue">
                  (00) 1234 5678
                </Text>
              </Text>
              <Text
                textAlign="start"
                fontSize="13px"
                fontWeight="semibold"
                color="black"
                fontFamily="Poppins"
              >
                E-mail:{" "}
                <Text as="span" color="blue">
                  shop@email.com
                </Text>
              </Text>
            </Flex>
          </MenuGroup>
        </MenuList>
      </MenuButton>
    </Flex>
  );
}

export default MenuDropDown;
