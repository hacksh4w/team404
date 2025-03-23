import { useAuth } from "../contexts/AuthContext";
import { Text, Image, VStack, Button, Center, Stack } from "@chakra-ui/react";

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div m={4} pt={5}>
    <VStack>
      <Image src='./img.png' 
      sizes="100px"
      />
      <Text fontSize='2xl' mt='2'> Welcome, {user}</Text>
      </VStack>
    </div>
  );
};

export default Dashboard;
