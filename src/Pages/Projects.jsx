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
import { FaHtml5, FaReact, FaJs, FaCss3 } from "react-icons/fa";
import { SiChakraui, SiExpress, SiRedux } from "react-icons/si";
import { v4 as uuidv4 } from "uuid";
import {
  AUTO,
  CENTER,
  COLUMN,
  FILL_80PARENT,
  LIGHTSTEELBLUE,
  R1,
  R2,
  SE,
  YELLOWGREEN,
} from "../constants/typography";

const project = [
  {
    id: 1,
    project_name: "Advance Spare Care",
    image:
      "https://user-images.githubusercontent.com/108116297/221490829-713675c9-ce32-428b-b11d-2cbf7b95a8af.png",
    project_desc:
      "Advance Spare Care is an scalable makeup auto parts website platform where the user can come and place their order. It is an Collaborative project of 5 members. It has a admin panel where admin can do a lot of options.",
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
    id: 2,
    project_name: "Tata CliQ",
    image:
      "https://camo.githubusercontent.com/e3daf89457e019865f84f065e1ef2c1c495aea4499113ba5bdbb0814fc45a0f5/68747470733a2f2f64726976652e676f6f676c652e636f6d2f75633f6578706f72743d766965772669643d317630426f2d3171327a4c564c4738704555484a654b4f69717450733036795f32",
    project_desc:
      "Begin your journey online with one of the fastest growing, e-commerce brands in the country and have a seamless online shopping experience. Immerse yourself in the joy of browsing through the best Indian and international brands in fashion, luxury, electronics and jewellery.",
    deploy_link: "https://tatacliq-ruby.vercel.app/",
    repo_link: "https://github.com/dev-Imsaurabh/TATA-CLiQ-clone",
    tech_stack: [
      { name: "React", icon: <FaReact /> },
      { name: "Redux", icon: <SiRedux /> },
      { name: "JavaScript", icon: <FaJs /> },
      { name: "Chakra", icon: <SiChakraui /> },
    ],
  },
  {
    id: 3,
    project_name: "StreamSpot",
    image:
      "https://user-images.githubusercontent.com/110032728/221775546-8e275423-2c68-490c-b134-821623439733.png",
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
  {
    id: 4,
    project_name: "Nykaa Clone",
    image:
      "https://user-images.githubusercontent.com/110032728/221774602-c312c8de-a642-4c62-86d4-430e3fe88dec.png",
    project_desc:
      "Nykaa.com is an ecommerce website inspired from original nykaa.com where users can shop different category of items. In this website, any user can login, signup, add products, filter products and purchase them by applying coupons.",
    deploy_link: "https://sensational-torrone-ff2b20.netlify.app/",
    repo_link: "https://github.com/bhavnesh1811/groovy-airplane-6414",
    tech_stack: [
      { name: "HTML", icon: <FaHtml5 /> },
      { name: "CSS", icon: <FaCss3 /> },
      { name: "JavaScript", icon: <FaJs /> },
    ],
  },
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
        <Heading color={colorMode==="dark"?YELLOWGREEN:LIGHTSTEELBLUE} textAlign={CENTER} margin="40px auto">
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
        // w={{base:FILL_10PARENT,sm:FILL_60PARENT,md:FILL_70PARENT,lg:FILL_80PARENT}}
        m={AUTO}
      >
        {project.map((item) => (
          <Flex
          direction={COLUMN}
            key={item.id}
            boxShadow={"rgba(0, 0, 0, 0.35) 0px 5px 15px"}
            p={{ base: "10px", sm: "10px", lg: "20px" }}
            borderRadius={"20px"}
            justifyContent={CENTER}
            w={FILL_80PARENT}
            m={AUTO}
          >
            <Image src={item.image} alt={item.project_desc} h={{base:"150px",sm:"200px",md:"250px",lg:"300px"}} />

            <Box
              m={{
                base: "10px auto",
                sm: "10px auto",
                md: "10px auto",
              }}
              justifyContent={SE}
              // border="1px solid green"
            >
              <Heading as={"h5"} size="md" color={colorMode==="dark"?YELLOWGREEN:LIGHTSTEELBLUE} textAlign={CENTER} mb={"10px"}>
                {item.project_name}
              </Heading>
              <Text>{item.project_desc}</Text>

              <Flex
                gap={4}
                justifyContent={SE}
              >
                {item.tech_stack.map((item) => (
                  <Flex direction={COLUMN} m={AUTO}>
                  <Box
                    color={colorMode==="dark"?YELLOWGREEN:LIGHTSTEELBLUE}
                    key={uuidv4()}
                    className="iconsTechStack"
                  >
                    {item.name}
                  </Box>
                  <Flex
                    color={colorMode==="dark"?YELLOWGREEN:LIGHTSTEELBLUE}
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
            </Box>
          </Flex>
        ))}
      </Grid>
    </Box>
  );
};

export default Projects;
