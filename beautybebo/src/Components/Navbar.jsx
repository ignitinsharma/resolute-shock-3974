import { Box, Flex, Heading, HStack, Spacer, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <Flex
      minWidth="full"
      minHeight="80px"
      alignItems="center"
      gap="2"
      py={6}
      px={5}
      bg="white"
    >
      <Link to="/">
        <Box>
         <img src="https://www.beautybebo.com/pub/media/logo/default/beautybebo_1.png" alt="" />
        </Box>
      </Link>
      <Spacer />
      <HStack>
        <Link to="/login">
          <Text fontSize="lg" fontWeight="bolder">LOG IN</Text>
        </Link>
        <Link to="/signup" >
          <Text fontSize="lg" fontWeight="bolder" >SIGN UP</Text>
        </Link>
      </HStack>
    </Flex>
  );
}

export default Navbar;