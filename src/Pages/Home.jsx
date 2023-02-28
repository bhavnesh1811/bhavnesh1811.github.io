import React from "react";
import { Box, Heading, useColorMode } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";
import styles from "../index.css";
import { CENTER, LIGHTSTEELBLUE, YELLOWGREEN } from "../constants/typography";
// import { useNavigate } from "react-router-dom";

const Home = () => {
  const { colorMode } = useColorMode();

  return (
    <Box id="home" textAlign={CENTER} pt={"30px"} >
      <Box >
        <Heading color={colorMode==="dark"?YELLOWGREEN:LIGHTSTEELBLUE}
          style={{
            textAlign: CENTER,
            margin: "80px auto 20px auto",
          }}
        >
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
      </Box>
    </Box>
  );
};

export default Home;
