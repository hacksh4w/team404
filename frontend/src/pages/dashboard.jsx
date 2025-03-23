import { useAuth } from "../contexts/AuthContext";
import { Text, Button } from "@chakra-ui/react";

const Dashboard = () => {
  const { user, logout } = useAuth();

  return (
    <div m={4} pt={15}>
      <Text fontSize='xl'> Welcome, {user}</Text>
      <Button onClick={logout} m={4}>Logout</Button>
    </div>
  );
};

export default Dashboard;
