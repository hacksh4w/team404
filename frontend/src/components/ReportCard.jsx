import { Card, Image, Text, VStack, Button, Stack, Tag } from "@chakra-ui/react";

const ReportCard = ({ report }) => {
  return (
    <Card maxW="sm" overflow="hidden" p={4} borderRadius="lg" boxShadow="md">
      {/* Report Image */}
      <Image
        src={report.imageUrl || "https://via.placeholder.com/300"}
        alt={report.title}
        borderRadius="md"
      />

      {/* Card Content */}
      <VStack align="start" spacing={3} mt={4}>
        <Text fontSize="xl" fontWeight="bold">{report.title}</Text>

        {/* Risk Tag */}
        <Tag colorScheme={report.risk === "high" ? "red" : report.risk === "medium" ? "yellow" : "green"}>
          Risk: {report.risk}
        </Tag>

        {/* Status */}
        <Tag colorScheme={report.status === "ongoing" ? "blue" : report.status === "finished" ? "green" : "gray"}>
          {report.status}
        </Tag>

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
    </Card>
  );
};

export default ReportCard;
