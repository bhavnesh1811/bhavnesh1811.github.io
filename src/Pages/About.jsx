import React from "react";
// import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
// import image from "../image/Bhavnesh_1.jpg";
import {
  Flex,
  Image,
  Box,
  Text,
  Divider,
  Heading,
  Button,
} from "@chakra-ui/react";
// import { Link } from "react-router-dom";

// const socialMediaLinks = [
//   {
//     id: 0,
//     link: "https://www.linkedin.com/in/bhavnesh-arora/",
//     icon: <FaLinkedin />,
//   },
//   {
//     id: 1,
//     link: "https://github.com/bhavnesh1811",
//     icon: <FaGithub />,
//   },
//   {
//     id: 2,
//     link: "https://twitter.com/arorashu93",
//     icon: <FaTwitter />,
//   },
// ];

const About = () => {
  return (
    <Box id="about" margin={"40px auto"} style={{ textAlign: "center" }}>
      <Heading style={{ color: "yellowgreen" }}>About</Heading>
      <Flex
        flexDirection={{ base: "column", sm: "column", md: "row" }}
        marginTop={{ base: "30px", sm: "40px", md: "30px" }}
        justifyContent="space-between"
      >
        <Flex margin={{ base: "auto 2%", sm: "auto 15%", md: "auto 5%" }}>
          <Image
            src="https://avatars.githubusercontent.com/u/110032728?v=4"
            // boxSize={{ base: "70%", sm: "50%", md: "200%" }}
            height={{ base: "70%", sm: "50%", md: "200%" }}
            borderRadius={"50%"}
            alt="my image"
          />
        </Flex>

        <Flex
          flexDirection={"column"}
          fontSize={{ base: "16px", sm: "20px", md: "24px" }}
          margin="0px 30px 0px 30px"
          marginTop={{ base: "30px", sm: "40px", md: "0px" }}
        >
          <Text fontSize={{ base: "16px", sm: "20px", md: "24px" }}>
            An enthusiastic Full Stack Web Developer with a strong set of
            technical <br></br>
            as well as non-technical skills and a dedication towards creating
            useful and interactive web applications.
          </Text>

          <Divider marginTop="20px" size={"100px"} fontWeight="bold" />
          <a href="../resume/Bhavnesh_Arora_Resume.pdf" download>
            <Button
              colorScheme="teal"
              onClick={() =>
                window.open(
                  "https://drive.google.com/file/d/1jrCXbIuKlIi1qd9D55mHVCsoFZ16QXrA/view?usp=share_link"
                )
              }
            >
              Resume
            </Button>
          </a>
        </Flex>
      </Flex>
    </Box>
  );
};

export default About;
