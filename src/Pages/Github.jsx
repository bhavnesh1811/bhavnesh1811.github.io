import { Box, Grid, Heading, Image } from "@chakra-ui/react";
import React from "react";
import GitHubCalendar from "react-github-calendar";

const Github = () => {
  return (
    <Box id="github" >
      <Grid margin={"40px auto"} justifyContent="center" boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px" padding={"20px"} gridTemplateColumns={{base:"repeat(1,2fr)",sm:"repeat(2,1fr)"}} width={{base:"90%",sm:"80%"}} borderRadius={"20px"} gap="20px">
        <Box>
          <Heading style={{color:"yellowgreen",textAlign:"center"}}>Languages</Heading>
          <Image

            src="https://github-readme-stats.vercel.app/api/top-langs?username=bhavnesh1811&show_icons=true&locale=en&layout=compact"
            alt="bhavnesh1811"
          />
        </Box>
        <Box>
          <Heading style={{color:"yellowgreen",textAlign:"center"}}>GitHub Stats</Heading>
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
      </Grid>
      <Box margin={"20px auto"} justifyContent="center" boxShadow= "rgba(0, 0, 0, 0.35) 0px 5px 15px" padding={"20px"} width={{base:"90%",sm:"80%"}} borderRadius={"20px"} gap="20px">
        <Heading style={{color:"yellowgreen",textAlign:"center"}}>GitHub Calendar</Heading>
        <GitHubCalendar username="bhavnesh1811" fontSize={16} />
      </Box>
    </Box>
  );
};

export default Github;
