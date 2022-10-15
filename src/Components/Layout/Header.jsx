import { Flex, Box, Text, Icon } from "@chakra-ui/react";
import { FaFacebookSquare } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import "./header.css";
function Header() {
  return (
    <Flex bgColor="#020202" w="100%">
      <Flex justify="space-around" align="center" w="100%">
        <Box>
          <Text color="#ACACAC" fontSize="12px" fontWeight="800">
            Mon-Thru:{" "}
            <span className="header_OpenToClose">9:00 AM - 5:30 PM</span>
          </Text>
        </Box>
        <Box>
          <Text color="#ACACAC" fontSize="12px" fontWeight="800">
            {" "}
            Visit our showroom in 1234 Street Adress City Adress,1234
            <span className="header_ContacUS"> Contact US</span>
          </Text>
        </Box>
        <Box>
          <Flex gap="2" align="center">
            <Text color="#ACACAC" fontSize="12px" fontWeight="800">
              Call us:(00)1234 5678
            </Text>
            <Icon as={FaFacebookSquare} color="#fff" h={10} />
            <Icon as={AiFillInstagram} color="#fff" h={10} />
          </Flex>
        </Box>
      </Flex>
    </Flex>
  );
}
export default Header;
