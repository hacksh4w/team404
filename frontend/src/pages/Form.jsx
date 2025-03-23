import React, { useState} from 'react'
import { Container, Stack } from '@chakra-ui/react';
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
        file: []
      });
    
      const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
      };
    
    /*  const handleFileChange = (event) => {
        const selectedFiles = Array.from(event.target.files);
        setFormData((prevData) => ({
          ...prevData,
          files: [...prevData.files, ...selectedFiles]
        }));
      };
    
      const handleRemoveFile = (index) => {
        setFormData((prevData) => ({
          ...prevData,
          files: prevData.files.filter((_, i) => i !== index)
        }));
      }; */
    
      const handleSubmit = () => {
        console.log("Form Submitted:", formData);
        // Handle form submission logic
      };
    

  return (
    <Container>
    PDF FORM
    <Box>
    <Stack>
        <Input name="date" placeholder="Date" variant="outline" value={formData.date} onChange={handleChange} />
        <Input name="supervisorName" placeholder="Supervisor Name" variant="outline" value={formData.supervisorName} onChange={handleChange} />
        <Input name="subject" placeholder="Subject" variant="outline" value={formData.subject} onChange={handleChange} />
    </Stack>
        <FileUpload.Root accept="image/*" my={8}>
        <FileUpload.HiddenInput required='required' />
        <FileUpload.Trigger asChild>
            <Button variant="outline" size="md">
            <LuFileImage /> Upload Report
            </Button>
        </FileUpload.Trigger>
        <FileUploadList />
        </FileUpload.Root>
    </Box>
    <Button m={2} onClick={handleSubmit}>
    Submit </Button>
    
    </Container>
  )
}

export default Form