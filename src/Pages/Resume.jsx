import { Box, Button } from "@chakra-ui/react";
// import Bhavnesh_Arora_Resume from "../resume/Bhavnesh_Arora_Resume.pdf";

const Resume = () => {
  return (
    <Box id="resume" margin={"20px auto"} textAlign="center">
      <Button colorScheme='teal'>
        <a href="../resume/Bhavnesh_Arora_Resume.pdf" download>Download Resume</a>
      </Button>
    </Box>
  );
};

export default Resume;
