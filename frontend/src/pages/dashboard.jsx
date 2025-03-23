import { useAuth } from "../contexts/AuthContext";
import { Text, Image, Button, Center } from "@chakra-ui/react";

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div m={4} pt={15}>
      <Center axis='vertical'>
      <Image src='./img.png' 
      sizes="100px"
      />
      <Text fontSize='2xl' mt='6'> Welcome, {user}</Text>
      </Center>
    </div>
  );
};

export default Dashboard;
