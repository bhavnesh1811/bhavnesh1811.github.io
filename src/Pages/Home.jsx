import React from "react";
import { Box, Button, Heading, Text } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import styles from "../index.css";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate=useNavigate();
  return (
    <Box id="home" textAlign="center">
      <Heading style={{ color: "yellowgreen", textAlign: "center" ,margin:"80px auto 20px auto"}}>
        Hi 👋 I'm Bhavnesh Arora
      </Heading>

      <Typewriter 
        options={{
          strings: [
            "A Full Stack Web Developer",
            "A Problem Solver",
            "A Team Player",
          ],
          pauseFor: 1500,
          autoStart: true,
          loop: true,
          style: styles.typeWriterText,
        }}
      />

      <Text fontSize={{ base: "16px", sm: "20px", md: "24px" }}>
        An enthusiastic Full Stack Web Developer with a strong set of technical{" "}
        <br></br>
        as well as non-technical skills and a dedication towards creating useful
        and interactive web applications.
      </Text>

      <a href="../resume/Bhavnesh_Arora_Resume.pdf" download>
        <Button colorScheme="teal" onClick={()=>{return navigate("https://drive.google.com/file/d/1jrCXbIuKlIi1qd9D55mHVCsoFZ16QXrA/view?usp=share_link")}}>Resume</Button>
      </a>

      
    </Box>
  );
};

export default Home;
