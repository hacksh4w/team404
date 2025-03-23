import { Box, Flex, Spacer, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Navbar = () => {
  const { user, logout } = useAuth();

  return (
    <Box bg="blue.500" p={4} color="white">
      <Flex>
        <Link to="/dashboard">Dashboard</Link>
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
