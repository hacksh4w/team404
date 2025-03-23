import React, { useState } from "react";
import { Container, Stack, Heading, Text} from "@chakra-ui/react";
import {
  Input,
  Box,
  Field,
  Button,
} from "@chakra-ui/react";
import { useDocument } from "../contexts/DocumentContext";

const Form = () => {
  const [formData, setFormData] = useState({
    date: "",
    supervisorName: "",
    subject: "",
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
        console.error('No file selected');
        return;
      }

      // Create FormData object
      const submitData = new FormData();
      
      // Append form fields
      submitData.append('date', formData.date);
      submitData.append('supervisorName', formData.supervisorName);
      submitData.append('subject', formData.subject);
      submitData.append('file', selectedFile);

      console.log('Submitting form with file:', selectedFile.name);

      // Make API call
      const response = await fetch('http://localhost:5000/api/upload', {
        method: 'POST',
        body: submitData,
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log('Upload result:', result);

      // Clear form after successful submission
      setFormData({
        date: "",
        supervisorName: "",
        subject: "",
      });
      setSelectedFile(null);

    } catch (error) {
      console.error('Error submitting form:', error);
    }
  };

  return (
    <Container>
      <Box mb={4}><Heading m={8}> PDF FORM </Heading></Box>
      <Box>
        <Stack spacing={4} w="80%" alignContent='center'>
        <Field.Root required>
          <Field.Label>
            Date <Field.RequiredIndicator />
          </Field.Label>
        
          <Input
            name="date"
            type="date"
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
          <Input
            mt={10}
            w="20%"
            type="file"
            accept="image/*,application/pdf"
            onChange={handleFileChange}
          />
        </Stack>
      </Box>
      <Button 
        m={2} 
        onClick={handleSubmit}
        isDisabled={!selectedFile || !formData.date || !formData.supervisorName || !formData.subject}
      >
        Submit
      </Button>

      {/* Display selected file name */}
      {selectedFile && (
        <Box mt={2}>
          Selected file: {selectedFile.name}
        </Box>
      )}
    </Container>
  );
};

export default Form;