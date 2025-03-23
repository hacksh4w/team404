import React from 'react'
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
  return (
    <Container>
    PDF FORM
    <Box>
    <Stack>
    <Input placeholder="Outline" variant="outline" />
    <Input placeholder="Outline" variant="outline" />
    <Input placeholder="Outline" variant="outline" />
    </Stack>
        <FileUpload.Root accept="image/*" m={8}>
        <FileUpload.HiddenInput />
        <FileUpload.Trigger asChild>
            <Button variant="outline" size="md" >
            <LuFileImage /> Upload Report
            </Button>
        </FileUpload.Trigger>
        <FileUploadList />
        </FileUpload.Root>
    </Box>
    <Button m={2}>Submit </Button>
    
    </Container>
  )
}

export default Form