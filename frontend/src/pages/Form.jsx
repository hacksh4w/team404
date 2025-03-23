import React, { useState } from "react";
import {
  Container,
  VStack,
  Heading,
  Text,
  HStack,
  Center,
  RadioCard,
} from "@chakra-ui/react";
import { Input, Box, Field, Button } from "@chakra-ui/react";
import { useDocument } from "../contexts/DocumentContext";
import { ToastContainer, toast } from "react-toastify";

const Form = () => {
  const items = [
    { value: "legal", title: "Legal Documents"},
    { value: "update", title: "Site Construction Progress"},
  ];

  const { setDocumentData } = useDocument();
  const [formData, setFormData] = useState({
    date: "",
    supervisorName: "",
    subject: "",
    doctype: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleSubmit = async () => {
    try {
      if (!selectedFile) {
        console.error("No file selected");
        toast.error("Please select a file to upload!", {
          position: "bottom-center",
        });
        return;
      }

      // Create FormData object
      const submitData = new FormData();

      // Append form fields
      submitData.append("date", formData.date);
      submitData.append("supervisorName", formData.supervisorName);
      submitData.append("subject", formData.subject);
      submitData.append("file", selectedFile);

      console.log("Submitting form with file:", selectedFile.name);

      // Make API call
      const response = await fetch("http://localhost:5000/api/upload", {
        method: "POST",
        body: submitData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      setDocumentData(result);
      console.log("Upload result:", result);
      toast.success("File uploaded successfully!", {
        position: "bottom-center",
      });
      // Clear form after successful submission
      setFormData({
        date: "",
        supervisorName: "",
        subject: "",
      });
      setSelectedFile(null);
    } catch (error) {
      console.error("Error submitting form:", error);
      toast.error("Failed to submit form. Please try again.", {
        position: "bottom-center",
      });
    }
  };

  return (
    <Container>
      <ToastContainer />
      <Box mb={4}>
        <Heading my={8}> PDF FORM </Heading>
      </Box>
      <Box>
        <HStack>
          <VStack justify="right" w="45%">
            <Box mt={4} justify="center">
              <Input
                id="file-upload"
                type="file"
                accept="image/*,application/pdf"
                onChange={handleFileChange}
                display="none" // Hides the default input
              />

              <label htmlFor="file-upload">
                <Button
                  as="span"
                  size="md"
                  colorScheme="blue"
                  bgGradient="linear(to-r, blue.400, blue.600)"
                  _hover={{ bgGradient: "linear(to-r, blue.500, blue.700)" }}
                  px={6}
                  py={3}
                  borderRadius="md"
                  cursor="pointer"
                >
                  📂 Choose File
                </Button>
              </label>

              {selectedFile && (
                <Text mt={2} fontSize="sm" color="gray.600">
                  Selected File: {selectedFile.name}
                </Text>
              )}
            </Box>
          </VStack>
          <VStack spacing={8} w="45%" alignContent="center" justify="right">
            <Field.Root required>
              <Field.Label>
                Date <Field.RequiredIndicator />
              </Field.Label>

              <Input
                name="date"
                type="date"
                focusBorderColor="grey.700"
                bgColor="red.200"
                placeholder="Date"
                variant="outline"
                value={formData.date}
                onChange={handleChange}
              />
            </Field.Root>
            <Field.Root required>
              <Field.Label>
                Name of Supervisor <Field.RequiredIndicator />
              </Field.Label>
              <Input
                name="supervisorName"
                placeholder="Supervisor Name"
                variant="outline"
                isRequired={true}
                value={formData.supervisorName}
                onChange={handleChange}
              />
            </Field.Root>
            <Field.Root required>
              <Field.Label>
                Subject of Report <Field.RequiredIndicator />
              </Field.Label>
              <Input
                name="subject"
                placeholder="Subject"
                variant="outline"
                value={formData.subject}
                onChange={handleChange}
              />
            </Field.Root>

            <RadioCard.Root defaultValue="next">
              <RadioCard.Label>Type of Document</RadioCard.Label>
              <HStack align="stretch">
                {items.map((item) => (
                  <RadioCard.Item key={item.value} value={item.value} onChange={handleChange} isSelected={formData.doctype === item.value}>
                    <RadioCard.ItemHiddenInput />
                    <RadioCard.ItemControl>
                      <RadioCard.ItemContent>
                        <RadioCard.ItemText>{item.title}</RadioCard.ItemText>
                      </RadioCard.ItemContent>
                      <RadioCard.ItemIndicator />
                    </RadioCard.ItemControl>
                  </RadioCard.Item>
                ))}
              </HStack>
            </RadioCard.Root>
          </VStack>
        </HStack>
      </Box>
      <Button
        m={8}
        onClick={handleSubmit}
        isDisabled={
          !selectedFile ||
          !formData.date ||
          !formData.supervisorName ||
          !formData.subject
        }
      >
        Submit
      </Button>
    </Container>
  );
};

export default Form;
