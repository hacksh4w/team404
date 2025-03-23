import { useAuth } from "../contexts/AuthContext";
import { VStack, HStack, Image, Text, Center, Stack } from "@chakra-ui/react";
import { useDocument } from "../contexts/DocumentContext";
import ReportCard from "../components/ReportCard"; // Import the ReportCard component

const Dashboard = () => {
  const { user, logout } = useAuth();
  const { documentData } = useDocument();


const mockReports = [
  {
    imageUrl: "https://via.placeholder.com/150",
    title: "Cracked Foundation",
    risk: "high",
    status: "requires-action",
    supervisorName: "John Doe",
    date: "2025-03-23",
  },
  {
    imageUrl: "https://via.placeholder.com/150",
    title: "Roof Leakage",
    risk: "medium",
    status: "ongoing",
    supervisorName: "Jane Smith",
    date: "2025-03-20",
  },
];


  return (
    <div m={4} pt={5} pb={10}>
      <VStack>
        <Image src="./img.png" sizes="100px" />
        <Text fontSize="2xl" mt="2">Welcome, {user}</Text>
      </VStack>

      <h2>Dashboard</h2>
    {/* Display hardcoded reports */}
      <Center mt={6} mb={20} p={4}>
        <HStack spacing={10}>
        {mockReports.map((report, index) => (
          <ReportCard key={index} report={report} />
        ))}
        </HStack>
      </Center>
      {/* Show uploaded document as a card */}
      {documentData ? (
        <Center mt={6} m={4}>
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
        <Text></Text>
      )}
    </div>
  );
};

export default Dashboard;
