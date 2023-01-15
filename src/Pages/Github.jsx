import { Box, Flex, Heading, Image } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const Github = () => {
  return (
    <Box id="github" margin={"20px"}>
      <Flex margin={"auto"} justifyContent="space-around">
        <Box>
          <Heading>Languages</Heading>
          <Image

            src="https://github-readme-stats.vercel.app/api/top-langs?username=bhavnesh1811&show_icons=true&locale=en&layout=compact"
            alt="bhavnesh1811"
          />
        </Box>
        <Box>
          <Heading>GitHub Stats</Heading>
          <Image
     
            src="https://github-readme-stats.vercel.app/api?username=bhavnesh1811&hide=prs&count_private=true&show_icons=true&theme=radical"
            alt="bhavnesh1811"
          />
        </Box>

        {/* <Box>
          <Heading>Current Streak</Heading>

          <Image
      
            src="https://github-readme-streak-stats.herokuapp.com/?user=bhavnesh1811&"
            alt="bhavnesh1811"
          />
        </Box> */}
      </Flex>
      <Box style={{ width: "60%", margin: "auto" }}>
        <Heading>GitHub Calendar</Heading>
        <GitHubCalendar username="bhavnesh1811" fontSize={16} />
      </Box>
    </Box>
  );
};

export default Github;
