import { Flex, Heading, Box } from "@chakra-ui/react";
import React from "react";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { CENTER, SA, YELLOWGREEN } from "../constants/typography";

const Contacts = () => {
  return (
    <Box id="contacts" margin={"30px auto"}>
      <Heading
        margin={"30px auto"}
        style={{ color: YELLOWGREEN, textAlign: CENTER }}
      >
        Contact Me
      </Heading>
      <Flex
        justifyContent={SA}
        fontSize={{ base: "16px", sm: "20px", md: "24px" }}
      >
        <a href="https://mail.google.com/mail/u/0/?tab=mm#inbox">
          <Box>
            <AiOutlineMail />
          </Box>
        </a>

        <Box>
          <BsFillTelephoneFill />
        </Box>
        <Box>
          <AiFillLinkedin />
        </Box>
        <Box>
          <AiFillGithub />
        </Box>
      </Flex>
    </Box>
  );
};

export default Contacts;
