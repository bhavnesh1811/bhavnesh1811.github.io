import React from "react";

import {
  Flex,
  Image,
  Box,
  Text,
  Divider,
  Heading,
  Button,
  useColorMode,
} from "@chakra-ui/react";
import {
  CENTER,
  COLUMN,
  FILL_50PARENT,
  FILL_65PARENT,
  FONTSIZE,
  LIGHTSTEELBLUE,
  ROW,
  SE,
  TEAL,
  YELLOWGREEN,
} from "../constants/typography";

const About = () => {
  const { colorMode } = useColorMode();
  return (
    <Box id="about" textAlign={CENTER} pt={"100px"}>
      <Heading color={colorMode === "dark" ? YELLOWGREEN : LIGHTSTEELBLUE}>
        About
      </Heading>
      <Flex
        flexDirection={{ base: COLUMN, sm: COLUMN, md: ROW }}
        marginTop={{ base: "30px", sm: "40px", md: "30px" }}
        justifyContent={SE}
      >
        <Flex
          margin={{
            base: "auto 30%",
            sm: "auto 35%",
            md: "auto 2%",
          }}
        >
          <Image
            src="https://avatars.githubusercontent.com/u/110032728?v=4"
            borderRadius={FILL_50PARENT}
            alt="my image"
          />
        </Flex>

        <Flex
          flexDirection={COLUMN}
          fontSize={FONTSIZE}
          margin="0px 30px"
          marginTop={{ base: "20px", sm: "20px", md: "0px" }}
          minWidth={{ md: FILL_65PARENT }}
          justifyContent={SE}
        >
          <Text>
            A motivated and skilled Software Development Engineer with more than 1 year of
            working experience. Gained valuable skills as an SDE-1 at Vivahit.
            Good at coding, solving problems and working well with teams to
            create quality software. Strong analytical skills and eager to keep
            learning and growing in the field.
          </Text>

          <Divider margin="20px auto" />
          <a
            href="https://drive.google.com/uc?export=download&id=1jrCXbIuKlIi1qd9D55mHVCsoFZ16QXrA"
            download="fw20_1169-Bhavnesh-Arora-Resume"
          >
            <Button
              // marginLeft={"5px"}
              colorScheme={TEAL}
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
