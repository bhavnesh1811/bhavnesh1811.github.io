import { Box, Flex, Heading, Image, useColorMode } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";
import {
  CENTER,
  COLUMN,
  FILL_80PARENT,
  FILL_90PARENT,
  LIGHTSTEELBLUE,
  ROW,
  YELLOWGREEN,
} from "../constants/typography";

const Github = () => {
  const { colorMode } = useColorMode();

  return (
    <Box id="github">
      <Flex
        margin={"40px auto"}
        justifyContent={CENTER}
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        padding={"20px"}
        direction={{ base: COLUMN, sm: COLUMN, md: ROW, lg: ROW }}
        width={{ base: FILL_90PARENT, sm: FILL_80PARENT }}
        borderRadius={"20px"}
        gap="20px"
      >
        <Box>
          <Heading
            color={colorMode === "dark" ? YELLOWGREEN : LIGHTSTEELBLUE}
            textAlign={CENTER}
            mb={"20px"}
          >
            Streak
          </Heading>
          <Image
            src="https://github-readme-streak-stats.herokuapp.com/?user=bhavnesh1811&theme=radical"
            alt="bhavnesh1811"
            height={"200px"}
          />
        </Box>
        <Box>
          <Heading
            color={colorMode === "dark" ? YELLOWGREEN : LIGHTSTEELBLUE}
            mb={"20px"}
            textAlign={CENTER}
          >
            GitHub Stats
          </Heading>
          <Image
            src="https://github-readme-stats.vercel.app/api?username=bhavnesh1811&hide=prs&count_private=true&show_icons=true&theme=radical"
            alt="bhavnesh1811"
            height={"200px"}
          />
        </Box>
      </Flex>
      <Box
        margin={"20px auto"}
        justifyContent={CENTER}
        boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
        padding={"20px"}
        width={{ base: FILL_90PARENT, sm: FILL_80PARENT }}
        borderRadius={"20px"}
        gap="20px"
      >
        <Heading
          color={colorMode === "dark" ? YELLOWGREEN : LIGHTSTEELBLUE}
          textAlign={CENTER}
        >
          GitHub Calendar
        </Heading>
        <GitHubCalendar username="bhavnesh1811" fontSize={16} />
      </Box>
    </Box>
  );
};

export default Github;
