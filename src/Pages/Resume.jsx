import { Button } from "@chakra-ui/react";
import Bhavnesh_Arora_Resume from "../resume/Bhavnesh_Arora_Resume.pdf";

const Resume = () => {
  return (
    <div id="resume">
      <Button>
        <a href={Bhavnesh_Arora_Resume} download>Download Resume</a>
      </Button>
    </div>
  );
};

export default Resume;
