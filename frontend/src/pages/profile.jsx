import { Box, Avatar, Text, VStack, HStack, Badge, Button, SimpleGrid } from "@chakra-ui/react";

const ProfilePage = () => {
  return (
    <Box maxW="lg" mx="auto" p={6} borderWidth="1px" borderRadius="lg" boxShadow="md" mt={10}>
      {/* Profile Picture & Info */}
      <VStack spacing={4} mt={4}>

        <Avatar.Root>
            <Avatar.Fallback name="Alaka A K" />
            <Avatar.Image src="https://randomuser.me/api/portraits/women/45.jpg" />
        </Avatar.Root>
        <Text fontSize="2xl" fontWeight="bold">Alaka A K</Text>
        <Badge colorScheme="blue" px={3} py={1} borderRadius="md">Project Manager</Badge>
        <Text fontSize="sm" color="gray.500">alaka3@example.com</Text>
      </VStack>

      <Box divideY="16px" my={4} />

      {/* Stats Section */}
      <SimpleGrid columns={2} spacing={4}>
        <VStack align="center" spacing={1}>
            <Text fontSize="sm" color="gray.500">Documents Processed</Text>
            <Text fontSize="2xl" fontWeight="bold">13</Text>
        </VStack>
        
        <VStack align="center" spacing={1}>
            <Text fontSize="sm" color="gray.500">Reports Uploaded</Text>
            <Text fontSize="2xl" fontWeight="bold">2</Text>
        </VStack>
      </SimpleGrid>

      <Box divideY={2} my={4} />

      {/* Bio Section */}
      <VStack align="start">
        <Text fontSize="lg" fontWeight="bold">Bio</Text>
        <Text fontSize="sm" color="gray.600">
          Experienced project manager specializing in construction site management and intelligent document processing.
        </Text>
      </VStack>

      <HStack justify="center" mt={6}>
        <Button colorScheme="blue">Edit Profile</Button>
        <Button variant="outline" colorScheme="red">Logout</Button>
      </HStack>
    </Box>
  );
};

export default ProfilePage;
