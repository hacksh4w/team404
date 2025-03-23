import React, { useState} from 'react'
import { Container, VStack, Center, Heading } from '@chakra-ui/react';
import { Input, Box,
    Button,
    FileUpload,
    Float,
    useFileUploadContext,
  } from "@chakra-ui/react"; 
import { LuFileImage, LuX } from "react-icons/lu"


const FileUploadList = () => {
    const fileUpload = useFileUploadContext()
    const files = fileUpload.acceptedFiles
    if (files.length === 0) return null
    return (
      <FileUpload.ItemGroup>
        {files.map((file) => (
          <FileUpload.Item
            w="auto"
            boxSize="20"
            p="2"
            file={file}
            key={file.name}
          >
            <FileUpload.ItemPreviewImage />
            <Float placement="top-end">
              <FileUpload.ItemDeleteTrigger boxSize="4" layerStyle="fill.solid">
                <LuX />
              </FileUpload.ItemDeleteTrigger>
            </Float>
          </FileUpload.Item>
        ))}
      </FileUpload.ItemGroup>
    )
  }

const Form = () => {

    const [formData, setFormData] = useState({
        date: '',
        supervisorName: '',
        subject: '',
        file: null
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
      const handleFileUpload = (acceptedFiles) => {
        if (acceptedFiles.length > 0) {
            setFormData((prevData) => ({
                ...prevData,
                file: acceptedFiles[0]
            }));
            console.log("Uploaded File:", acceptedFiles[0]); // Debugging
        }
    };
    
      const handleRemoveFile = (index) => {
        setFormData((prevData) => ({
          ...prevData,
          files: prevData.files.filter((_, i) => i !== index)
        }));
      }; 
    
      const handleSubmit = () => {
        console.log("Form Submitted:", formData);
        // Handle form submission logic
      };
    

  return (
    <Container p={4} pt={20}>
      <Heading> Upload your Report Here!! </Heading>
    <Box p={8}>
    <VStack w='85%' pl={10} >
        <Input name="date" type="date" placeholder="Date" variant="outline" value={formData.date} onChange={handleChange} />
        <Input name="supervisorName" type="text"  required='required' placeholder="Supervisor Name" variant="outline" value={formData.supervisorName} onChange={handleChange} />
        <Input name="subject" placeholder="Subject" variant="outline" value={formData.subject} onChange={handleChange} />
        </VStack>
        <FileUpload.Root accept="image/*" my={8} pl={10} onDrop={handleFileUpload}>
        <FileUpload.HiddenInput required='required' />
        <FileUpload.Trigger asChild >
            <Button variant="outline" size="md">
            <LuFileImage /> Upload Report
            </Button>
        </FileUpload.Trigger>
        <FileUploadList />
        </FileUpload.Root>
    </Box>
    <Button m={2} onClick={handleSubmit} >
    Submit </Button>
    
    </Container>
  )
}

export default Form