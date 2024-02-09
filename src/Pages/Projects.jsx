import React from "react";

import {
  Box,
  Flex,
  Heading,
  Text,
  Image,
  Button,
  Grid,
  useColorMode,
} from "@chakra-ui/react";
import { FaReact, FaJs } from "react-icons/fa";
import { SiChakraui, SiExpress, SiRedux, SiTypescript } from "react-icons/si";
import { v4 as uuidv4 } from "uuid";
import {
  AUTO,
  CENTER,
  COLUMN,
  FILL_90PARENT,
  LIGHTSTEELBLUE,
  R1,
  R2,
  SE,
  YELLOWGREEN,
} from "../constants/typography";

const project = [
  {
    id: 1,
    project_name: "Masai Alumni Website",
    image:
      "https://res.cloudinary.com/ddkuxmjmv/image/upload/f_auto,q_auto/v1/portfolio-projects/phqtsz9vwl2ck1lfv70q",
    project_desc:
      "Welcome to our alumni website! It's a place where people who graduated from our school or program can connect and help each other out. We have two main goals helping current students find jobs and supporting our alumni even after they have already landed a job.",
    deploy_link: "https://masai-alumni-temp.onrender.com/",
    repo_link: "https://github.com/bhavnesh1811/masai-alumni-temp",
    tech_stack: [
      { name: "React", icon: <FaReact /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "Typescript", icon: <SiTypescript /> },
      { name: "Chakra", icon: <SiChakraui /> },
    ],
  },
  {
    id: 2,
    project_name: "Advance Spare Care",
    image:
      "https://res.cloudinary.com/ddkuxmjmv/image/upload/f_auto,q_auto/v1/portfolio-projects/mqx8pyzzsdgsg3mqqk6o",
    project_desc:
      "Advance Spare Care is an scalable makeup auto parts website platform where the user can come and place their order. It is an Collaborative project of five members.",
    deploy_link: "https://advance-auto-parts.vercel.app/",
    repo_link: "https://github.com/SORDE12/Advance-Spare-Care",
    tech_stack: [
      { name: "React", icon: <FaReact /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "Chakra", icon: <SiChakraui /> },
    ],
  },
  {
    id: 3,
    project_name: "Tata CliQ",
    image:
      "https://res.cloudinary.com/ddkuxmjmv/image/upload/f_auto,q_auto/v1/portfolio-projects/dbiauwbf1mbbnipsobzp",
    project_desc:
      "Begin your journey online with one of the fastest growing, e-commerce brands in the country and have a seamless online shopping experience.",
    deploy_link: "https://tatacliq-two.vercel.app/",
    repo_link: "https://github.com/bhavnesh1811/TATA-CLiQ",
    tech_stack: [
      { name: "React", icon: <FaReact /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "Chakra", icon: <SiChakraui /> },
    ],
  },
  {
    id: 4,
    project_name: "StreamSpot",
    image:
      "https://res.cloudinary.com/ddkuxmjmv/image/upload/f_auto,q_auto/v1/portfolio-projects/tx5d8hg0p7rzaf1ykp64",
    project_desc:
      "StreamSpot is an online video streaming website which allows users to stream movie trailers after their successful login and also allows users to know about any movie details using its search functionality.",
    deploy_link: "https://streamspot.netlify.app/",
    repo_link: "https://github.com/bhavnesh1811/hushed-hair-9563",
    tech_stack: [
      { name: "JavaScript", icon: <FaJs /> },
      { name: "React", icon: <FaReact /> },
      { name: "Chakra", icon: <SiChakraui /> },
    ],
  },
  // {
  //   id: 5,
  //   project_name: "Nykaa Clone",
  //   image:
  //     "https://user-images.githubusercontent.com/110032728/221774602-c312c8de-a642-4c62-86d4-430e3fe88dec.png",
  //   project_desc:
  //     "Nykaa.com is an ecommerce website inspired from original nykaa.com where users can shop different category of items. In this website, any user can login, signup, add products, filter products and purchase them by applying coupons.",
  //   deploy_link: "https://sensational-torrone-ff2b20.netlify.app/",
  //   repo_link: "https://github.com/bhavnesh1811/groovy-airplane-6414",
  //   tech_stack: [
  //     { name: "HTML", icon: <FaHtml5 /> },
  //     { name: "CSS", icon: <FaCss3 /> },
  //     { name: "JavaScript", icon: <FaJs /> },
  //   ],
  // },
  // {
  //   id: 5,
  //   project_name: "Better Buy",
  //   image: "https://user-images.githubusercontent.com/110032728/221776894-3cddaacf-cc04-44a6-b0d2-736dbc1f2499.png",
  //   project_desc:
  //     "Better Buy website is an ecommerce website inspired from jiomart.com which allows user to purchase different categories of products as per their requirement and needs.",
  //   deploy_link: "https://lucent-custard-80745a.netlify.app/",
  //   repo_link: "https://github.com/bhavnesh1811/damaged-regret-6465",
  //   tech_stack_name:["HTML","CSS","JavaScript"],
  //   tech_stack: [<FaHtml5 />, <FaCss3 />, <FaJs />],
  // }
];

const Projects = () => {
  const { colorMode } = useColorMode();

  return (
    <Box id="projects" pt={"70px"}>
      <Box>
        <Heading
          color={colorMode === "dark" ? YELLOWGREEN : LIGHTSTEELBLUE}
          textAlign={CENTER}
          margin={{base:"20px auto",md:"30px auto"}}
        >
          Projects
        </Heading>
      </Box>

      <Grid
        gap={"20px"}
        gridTemplateColumns={{
          base: R1,
          sm: R1,
          md: R1,
          lg: R2,
        }}
        w={FILL_90PARENT}
        // w={{base:FILL_10PARENT,sm:FILL_60PARENT,md:FILL_70PARENT,lg:FILL_80PARENT}}
        m={AUTO}
      >
        {project.map((item) => (
          <Flex
            direction={COLUMN}
            key={item.id}
            boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
            p={{ base: "8px", md: "16px" }}
            borderRadius={"20px"}
            justifyContent={CENTER}
            //
            m={AUTO}
            // gap={"20px"}
          >
            <Image
              src={item.image}
              alt={item.project_desc}
              h={{ base: "150px", sm: "200px", md: "300px"}}
            />

            <Flex
              m={{
                base:"5px auto",
                sm: "5px auto",
                md: "10px auto",
              }}
              gap="4px"
              h={{ base: "full", sm: "250px", md: "225px"}}
              direction={COLUMN}
            >
              <Heading
                as={"h5"}
                size="md"
                color={colorMode === "dark" ? YELLOWGREEN : LIGHTSTEELBLUE}
                textAlign={CENTER}
                mb={"5px"}
              >
                {item.project_name}
              </Heading>
              <Text minH="100px" overflow={"hidden"}>{item.project_desc}</Text>

              <Flex gap={4} justifyContent={SE}>
                {item.tech_stack.map((item) => (
                  <Flex direction={COLUMN} m={AUTO}>
                    <Box
                      color={
                        colorMode === "dark" ? YELLOWGREEN : LIGHTSTEELBLUE
                      }
                      key={uuidv4()}
                      className="iconsTechStack"
                    >
                      {item.name}
                    </Box>
                    <Flex
                      color={
                        colorMode === "dark" ? YELLOWGREEN : LIGHTSTEELBLUE
                      }
                      key={uuidv4()}
                      className="iconsTechStack"
                      justifyContent={CENTER}
                    >
                      {item.icon}
                    </Flex>
                  </Flex>
                ))}
              </Flex>
              {/* <Flex color={colorMode==="dark"?YELLOWGREEN:LIGHTSTEELBLUE} justifyContent={SE}>
                TechStack:-
                {item.tech_stack_name.map((item) => (
                  <Box key={uuidv4()} className="iconsTechStackName">
                    {item}
                  </Box>
                ))}
              </Flex> */}
              <Flex
                marginTop={"20px"}
                justifyContent={SE}
                marginBottom={"20px"}
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
            </Flex>
          </Flex>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
