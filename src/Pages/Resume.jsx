import { Box, Button } from "@chakra-ui/react";
import Bhavnesh_Arora_Resume from "../resume/Bhavnesh_Arora_Resume.pdf";

const Resume = () => {
  return (
    <Box id="resume" margin={"20px auto"}>
      <Button >
        <a href={Bhavnesh_Arora_Resume} download>Download Resume</a>
      </Button>
    </Box>
  );
};

export default Resume;
