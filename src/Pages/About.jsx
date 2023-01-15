import React from "react";
import { FaTwitter, FaGithub, FaLinkedin } from "react-icons/fa";
// import image from "../image/Bhavnesh_1.jpg";
import { Flex, Image, Box, Text,Divider, Heading  } from "@chakra-ui/react";
import { Link } from "react-router-dom";

const socialMediaLinks = [
  {
    id: 0,
    link: "https://www.linkedin.com/in/bhavnesh-arora/",
    icon: <FaLinkedin />,
  },
  {
    id: 1,
    link: "https://github.com/bhavnesh1811",
    icon: <FaGithub />,
  },
  {
    id: 2,
    link: "https://twitter.com/arorashu93",
    icon: <FaTwitter />,
  },
];

const About = () => {
  return (
    <Box id="about" margin={"20px auto"} style={{border:"2px solid green"}}>
      <Heading>About</Heading>
      <Flex
        flexDirection={{ base: "column", sm:"column",md: "row" }}
        marginTop={{ base: "30px", sm:"40px",md: "60px" }}
      >
        <Flex marginLeft={{base: "23%", sm:"34%",md: "5%" }}>
          <Image src="https://avatars.githubusercontent.com/u/110032728?v=4" boxSize={{base: "70%", sm:"50%",md: "100%" }} height={{base: "70%", sm:"50%",md: "100%" }} borderRadius={"50%"} alt="my image" />
        </Flex>
        <Flex flexDirection={"column"} fontSize={{ base: '16px', sm: '20px', md: '24px' }} margin="0px 30px 0px 30px" marginTop={{ base: '30px', sm: '40px', md: '0px' }} >
          <Text as={"h6"} >
            Hello Everyone, I am Bhavnesh Arora from Palwal,Haryana.A dedicated
            Full Stack Web developer with a specialized skill set that enables
            me to build robust web applications.
          </Text>
    
          <Text>
            I am adaptable, proficient in remote collaboration and committed to
            achieving organizational goals.I am passionate about solving
              Algorithmic problems with a good hold on Data Structures.
          </Text>

          <Divider marginTop="20px" size={"100px"} fontWeight="bold" />
          <Flex flexDirection={"row"} >

          {socialMediaLinks.map((item) => (
            <Flex padding="10px" key={item.id}>
              <Link to={item.link} >
                <Box>{item.icon}</Box>
              </Link>
            </Flex>
          ))}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};

export default About;
