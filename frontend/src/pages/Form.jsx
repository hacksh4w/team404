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
import { RadioGroup, Stack } from "@chakra-ui/react";

const Form = () => {
  const items = [
    { value: "legal", title: "Legal Documents"},
    { value: "update", title: "Site Construction Progress"},
  ];

  const { setDocumentData } = useDocument();

  const [status, setStatus] = useState("need-action")

  const statusOption = [
    { label: "Action Required", value: "need-action" },
    { label: "Ongoing", value: "ongoing" },
    { label: "Closed", value: "closed" },
  ]

  const [formData, setFormData] = useState({
    date: "",
    supervisorName: "",
    subject: "",
    status: "requires-action", // Default status selection
    doctype: "",
  });

  const [selectedFile, setSelectedFile] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleStatusChange = (value) => {
    setFormData({ ...formData, status: value });
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

      const submitData = new FormData();
      submitData.append("date", formData.date);
      submitData.append("supervisorName", formData.supervisorName);
      submitData.append("subject", formData.subject);
      submitData.append("status", formData.status);
      submitData.append("file", selectedFile);

      console.log("Submitting form with file:", selectedFile.name);

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
        status: "requires-action",
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
        <Heading my={8}>PDF FORM</Heading>
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
                display="none"
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
              //  focusBorderColor="grey.700"
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
             //   isRequired={true}
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

            {/* Status Dropdown */}
           {/* Status Radio Buttons */}
           <Field.Root required mt={4}>
           <Field.Label>
                Status <Field.RequiredIndicator />
              </Field.Label>
        <RadioGroup.Root status={status} onValueChange={(e) => setStatus(e.status)}>
          <HStack gap="6">
            {statusOption.map((item) => (
              <RadioGroup.Item key={item.value} value={item.value}>
                <RadioGroup.ItemHiddenInput />
                <RadioGroup.ItemIndicator />
                <RadioGroup.ItemText>{item.label}</RadioGroup.ItemText>
              </RadioGroup.Item>
              ))}
            </HStack>
        </RadioGroup.Root>
              </Field.Root>
          {/* <Field.Root required>
           <Field.Label>Report Status <Field.RequiredIndicator /></Field.Label>
           <RadioGroup onChange={(newValue) => setFormData({ ...formData, status: newValue })} value={formData.status}>
             <Stack direction="row" spacing={5}>
               <Radio value="requires-action">Requires Action</Radio>
               <Radio value="ongoing">Ongoing</Radio>
               <Radio value="finished">Finished</Radio>
             </Stack>
           </RadioGroup>
         </Field.Root> */}
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

