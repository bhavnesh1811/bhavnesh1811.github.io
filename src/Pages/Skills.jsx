import React from "react";
import bootstrap from "../assets/bootstrap.png";
import html from "../assets/html.png";
import css from "../assets/css.png";
import github from "../assets/github.png";
import react from "../assets/react.jpg";
import nodeJs from "../assets/nodeJs.jpg";
import javascript from "../assets/javascript.png";
import redux from "../assets/redux.png";

import { Box, Flex, Grid, Heading, Image } from "@chakra-ui/react";

const Skills = () => {
  const projects = [
    {
      id: 0,
      project_name: "JavaScript",
      project_desc: javascript,
    },
    {
      id: 1,
      project_name: "React JS",
      project_desc: react,
    },
    {
      id: 2,
      project_name: "Redux",
      project_desc: redux,
    },
    {
      id: 3,
      project_name: "HTML",
      project_desc: html,
    },
    {
      id: 4,
      project_name: "CSS",
      project_desc: css,
    },
    {
      id: 5,
      project_name: "Node JS",
      project_desc: nodeJs,
    },
    {
      id: 6,
      project_name: "GitHub",
      project_desc: github,
    },
    {
      id: 7,
      project_name: "BootStrap",
      project_desc: bootstrap,
    },
  ];

  return (
    <Grid id="skills">
      <Heading
        style={{ color: "yellowgreen", textAlign: "center", margin: "20px" }}
      >
        Skills
      </Heading>

      <Grid
        gridTemplateColumns={{
          base: "repeat(1,1fr)",
          sm: "repeat(2,1fr)",
          md: "repeat(3,1fr)",
          lg: "repeat(4,1fr)",
        }}
        gap="20px"
        
      >
        {projects.map((item) => (
          <Grid
            key={item.id}
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            padding={"20px"}
            width={{ base: "100%", md:"100%",sm: "100%" }}
            borderRadius={"20px"}
            margin="auto"
            alignItems={"center"}
          >
            <Flex justifyContent={"space-around"} >
              <Image
                height={{
                  base: "150px",
                  sm: "150px",
                  md: "150px",
                  lg: "150px",
                }}
                src={item.project_desc}
              />
              <Box color="yellowgreen">{item.project_name}</Box>
            </Flex>
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
};

export default Skills;
