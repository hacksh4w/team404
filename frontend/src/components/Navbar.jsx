import { Box, Flex, Text, Show, HStack, Spacer, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useState, useEffect } from "react";
import { GoTypography } from "react-icons/go";


const Navbar = () => {
  const { user, logout } = useAuth();
 
  const [storedUser, setStoredUser] = useState(null); //avatar to be added
  

  useEffect(() => {
    setStoredUser(localStorage.getItem("user"));
  }, [user]);

  
  return (
    <Box bg="blue.700" color="white" width={["100%"]} m={0} top={0}>
      <Flex h={20} alignItems={"center"} justifyContent={"space-between"} p={6}>
        <HStack w="32%" pl={8}>
           <Text fontSize='2xl' fontFamily='mono'> SiteCheck
           </Text>
        </HStack>

        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            {/* <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            /> */}
            <HStack spacing={8} alignItems={"center"} >
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
                id="myDIV"
              >
                <Button className="btnRes" m={4} color='grey.600'>
                <Link to="/dashboard" m={2}>Dashboard</Link>
                </Button>

                <Button className="btnRes" m={4}>
                <Link to="/form" m={2}>Upload</Link>
                </Button>

            {/*  <Button className="btnRes" m={4}>
                  <a href="#Skills">
                    {" "}
                    <b>Profile</b>
                  </a>
                </Button> */}

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
