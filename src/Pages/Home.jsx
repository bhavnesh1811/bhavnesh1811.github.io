import React from "react";
import { Box, Heading, Text } from "@chakra-ui/react";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <Box id="home" margin={"20px auto"}>
      <Heading>Hi 👋 I'm Bhavnesh Arora</Heading>

      <Typewriter
        options={{
          strings: [
            "A Software Engineer",
            "A Problem Solver",
            "A Full Stack Developer",
          ],
          pauseFor: 1500,
          autoStart: true,
          loop: true,
        }}
      />

      <Text>
        An enthusiastic Full Stack Web Developer with a strong set of technical
        as well as non-technical skills and a dedication towards creating useful
        and interactive web applications.
      </Text>
    </Box>
  );
};

export default Home;
