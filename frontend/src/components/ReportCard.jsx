import { Box, Image, Badge, Text, VStack, Button, Stack, Tag } from "@chakra-ui/react";

const ReportCard = ({ report }) => {
    // Define risk and status color mappings
const riskColorMap = {
    high: "red",
    medium: "yellow",
    low: "green",
  };
  
  const statusColorMap = {
    ongoing: "blue",
    finished: "green",
    "requires-action": "gray",
  };
   console.log("Report Data:", report);
    const riskColor = riskColorMap[report.risk] || "gray";
    const statusColor = statusColorMap[report.status] || "gray";
  return (
    <Box maxW="sm" overflow="hidden" borderRadius="lg" boxShadow="md" p={4} border="1px solid #ddd">
      {/* Report Image */}
      <Image
        src={report.imageUrl || "https://via.placeholder.com/300"}
        alt={report.title}
        borderRadius="md"
      />
    
      <VStack align="start" spacing={3} mt={4}>
        <Text fontSize="xl" fontWeight="bold">{report.title}</Text>

        {/* Risk Tag */}
        <Badge colorPalette={riskColor} p={1} borderRadius="md">
            Risk: {report.risk || "low"}
            </Badge>

            <Badge colorPalette={statusColor} p={1} borderRadius="md">
            {report.status || "requires-action"}
            </Badge>

        {/* Supervisor & Date */}
        <Text fontSize="sm" color="gray.600">
          Supervisor: {report.supervisorName}
        </Text>
        <Text fontSize="sm" color="gray.600">
          Date: {report.date}
        </Text>
    </VStack>

      {/* Actions */}
      <Stack direction="row" mt={4}>
        <Button colorScheme="blue">View</Button>
        <Button variant="outline">Download</Button>
      </Stack>
    </Box>
  );
};

export default ReportCard;
