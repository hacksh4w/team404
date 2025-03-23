import { useAuth } from "../contexts/AuthContext";
import { VStack, Image, Text, Center, Stack } from "@chakra-ui/react";
import { useDocument } from "../contexts/DocumentContext";
import ReportCard from "../components/ReportCard"; // Import the ReportCard component

const Dashboard = () => {
  const { user, logout } = useAuth();
  const { documentData } = useDocument();

  return (
    <div m={4} pt={5}>
      <VStack>
        <Image src="./img.png" sizes="100px" />
        <Text fontSize="2xl" mt="2">Welcome, {user}</Text>
      </VStack>

      <h2>Dashboard</h2>

      {/* Show uploaded document as a card */}
      {documentData ? (
        <Center mt={6}>
          <ReportCard
            report={{
              imageUrl: documentData.imageUrl || "", // Provide image URL if available
              title: documentData.subject || "Untitled Report",
              risk: documentData.risk || "low", // Assuming risk is provided
              status: documentData.status || "requires-action",
              supervisorName: documentData.supervisorName,
              date: documentData.date,
            }}
          />
        </Center>
      ) : (
        <Text>No document uploaded yet.</Text>
      )}
    </div>
  );
};

export default Dashboard;
