import { useAuth } from "../contexts/AuthContext";
import { Text, Image, VStack, Button, Center, Stack } from "@chakra-ui/react";
import { useDocument } from "../contexts/DocumentContext";

const Dashboard = () => {
  const { user, logout } = useAuth();
  const { documentData } = useDocument();
  return (
    <div m={4} pt={5}>
    <VStack>
      <Image src='./img.png' 
      sizes="100px"
      />
      <Text fontSize='2xl' mt='2'> Welcome, {user}</Text>
      </VStack>
      <h2>Dashboard</h2>
      {documentData ? (
          <div>
              <p><strong>File Name:</strong> {documentData.fileName}</p>
              <p><strong>Uploaded At:</strong> {documentData.uploadTime}</p>
          </div>
      ) : (
          <p>No document uploaded yet.</p>
      )}
    </div>
  );
};

export default Dashboard;
