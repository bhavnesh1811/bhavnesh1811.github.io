import React from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import "../index.css"


const Home = () => {
  return (
    <Box id="home" margin={"20px auto"} textAlign="center">
      <Heading style={{ color: "yellowgreen", textAlign: "center" }}>
        Hi 👋 I'm Bhavnesh Arora
      </Heading>

      <Typewriter className="type"
        options={{
          strings: [
            "A Full Stack Web Developer",
            "A Problem Solver",
            "A Team Player",
          ],
          pauseFor: 1500,
          autoStart: true,
          loop: true,
        }}
      />

      <Text fontSize={{ base: "16px", sm: "20px", md: "24px" }}>
        An enthusiastic Full Stack Web Developer with a strong set of technical{" "}
        <br></br>
        as well as non-technical skills and a dedication towards creating useful
        and interactive web applications.
      </Text>
      <Button colorScheme="teal" >
      
        <a href="../resume/Bhavnesh_Arora_Resume.pdf" download>
          Resume
        </a>
      </Button>
    </Box>
  );
};

export default Home;
