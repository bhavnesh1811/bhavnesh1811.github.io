import React from "react";

import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Button,
  Grid,
} from "@chakra-ui/react";
import { FaHtml5, FaReact, FaJs, FaCss3 } from "react-icons/fa";
import { v4 as uuidv4 } from "uuid";
import betterBuy from "../assets/Better_Buy.png";
import nykaa from "../assets/Nykaa.png";
import streamSpot from "../assets/StreamSpot.png";
import asos from "../assets/AsosClone.png";
import { CENTER, R1, R2, SE, YELLOWGREEN } from "../constants/typography";

const projects = [
  {
    id: 1,
    project_name: "StreamSpot",
    image: streamSpot,
    project_desc:
      "StreamSpot is an online video streaming website which allows users to stream movie trailers after their successful login and also allows users to know about any movie details using its search functionality.",
    deploy_link: "https://streamspot.netlify.app/",
    repo_link: "https://github.com/bhavnesh1811/hushed-hair-9563",
    tech_stack: [<FaHtml5 />, <FaCss3 />, <FaJs />, <FaReact />],
  },
  {
    id: 2,
    project_name: "Better Buy",
    image: betterBuy,
    project_desc:
      "Better Buy website is a clone of ecommerce website  which allows user to purchase different kind of products as per their requirement and needs.",
    deploy_link: "https://lucent-custard-80745a.netlify.app/",
    repo_link: "https://github.com/bhavnesh1811/damaged-regret-6465",
    tech_stack: [<FaHtml5 />, <FaCss3 />, <FaJs />],
  },
  {
    id: 3,
    project_name: "Nykaa Clone",
    image: nykaa,
    project_desc:
      "This is a clone of nykaa.com which is an ecommerce website where users can buy different categories of products.",
    deploy_link: "https://sensational-torrone-ff2b20.netlify.app/",
    repo_link: "https://github.com/mak-1997/groovy-airplane-6414",
    tech_stack: [<FaHtml5 />, <FaCss3 />, <FaJs />],
  },
  {
    id: 4,
    project_name: "ASOS Clone",
    image: asos,
    project_desc:
      "This is a clone of asos.com which is an ecommerce which consits of basic signin,signup and two more static pages.",
    deploy_link: "https://superlative-centaur-9f9647.netlify.app/",
    repo_link: "https://github.com/bhavnesh1811/macabre-carriage-2497",
    tech_stack: [<FaHtml5 />, <FaCss3 />, <FaJs />],
  },
];

const Projects = () => {
  return (
    <Box id="projects" pt={"70px"}>
      <Box>
        <Heading style={{color:YELLOWGREEN,textAlign:CENTER,margin:"40px auto"}}>Projects</Heading>
      </Box>

      <Grid
        gap={6}
        gridTemplateColumns={{
          base: R1,
          sm: R2,
          md: R2,
        }}
        // width={{base: "80%", sm: "50%", md: "100%"}}
        
        
      >
        {projects.map((item) => (
          <Box alignContent={CENTER} key={item.id}>
            <Image
              src={item.image}
              alt="icon"
            />

            <Box
              marginTop={{ base: "10px", sm: "10px", md: "10px" }}
              justifyContent={SE}
              marginBottom={{ base: "10px", sm: "10px", md: "10px" }}
              // border="1px solid green"
              
            >
              <Heading as={"h5"} size="md" textAlign={CENTER}>
                {item.project_name}
              </Heading>
              <Text>{item.project_desc}</Text>

              <Flex
                gap={4}
                marginTop={{ base: "10px", sm: "10px", md: "10px" }}
                justifyContent="space-evenly"
                marginBottom={{ base: "10px", sm: "10px", md: "10px" }}
              >
                {item.tech_stack.map((item) => (
                  <Box key={uuidv4()} className="iconsTechStack">
                    {item}
                  </Box>
                ))}
              </Flex>
              <Flex
                marginTop={{ base: "10px", sm: "10px", md: "10px" }}
                justifyContent="space-evenly"
                marginBottom={{ base: "10px", sm: "10px", md: "10px" }}
              >
                <Button>
                  <a href={item.repo_link} target="_blank" rel="noreferrer">
                    Github
                  </a>
                </Button>

                <Button>
                  <a href={item.deploy_link} target="_blank" rel="noreferrer">
                    View
                  </a>
                </Button>
              </Flex>
            </Box>
          </Box>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
