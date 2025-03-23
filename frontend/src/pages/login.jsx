import { useState } from "react";
import { Box, Button, Container, Heading, Input, Stack, Text } from "@chakra-ui/react";
import { useAuth } from "../contexts/AuthContext";

const LoginPage = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Logging in with email:", email);
    login(email);
  };

  return (
    <Container centerContent mt={40}>
      <Box
        p={8}
        maxW="600px"
        borderWidth="2px"
        borderRadius="lg"
        boxShadow="lg"
        bg="white"
        textAlign="center"
      >
        <Heading size="2xl" mb={4} color="blue.600">
          Welcome Back
        </Heading>
        <Text mb={6} fontSize="lg" color="gray.600">
          Please log in to continue
        </Text>

        <form onSubmit={handleSubmit}>
          <Stack spacing={6}>
            <Input
              type="email"
              placeholder="Enter your email"
              focusBorderColor="blue.400"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Input
              type="password"
              placeholder="Enter your password"
              focusBorderColor="blue.400"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button
              type="submit"
              colorScheme="blue"
              bgGradient="linear(to-r, blue.400, blue.600)"
              _hover={{ bgGradient: "linear(to-r, blue.500, blue.700)" }}
              size="lg"
              w="full"
              mt={2}
            >
              Login
            </Button>
          </Stack>
        </form>
      </Box>
    </Container>
  );
};

export default LoginPage;

