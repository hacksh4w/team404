import { Box, Flex, Show, HStack, Spacer, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <Box bg="blue.500" p={4} color="white" width={["100%"]}>
      <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
        <HStack w="32%">
            Nameee
        </HStack>

        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            {/* <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            /> */}
            <HStack spacing={8} alignItems={"center"}>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
                id="myDIV"
              >
                <Button className="btnRes">
                <Link to="/dashboard" m={2}>Dashboard</Link>
                </Button>

                <Button className="btnRes">
                <Link to="/form" m={2}>Upload</Link>
                </Button>

                <Button className="btnRes">
                  <a href="#Skills">
                    {" "}
                    <b>Profile</b>
                  </a>
                </Button>

              </HStack>
            </HStack>  
        </Flex>
        <Spacer />
        {user ? (
          <Button colorScheme="red" onClick={logout}>Logout</Button>
        ) : (
          <Link to="/login">
            <Button colorScheme="green">Login</Button>
          </Link>
        )}
      </Flex>
    </Box>
  );
};

export default Navbar;
