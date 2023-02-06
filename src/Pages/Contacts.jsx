import { Flex, Heading, Box } from "@chakra-ui/react";
import React from "react";
import { AiOutlineMail, AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";

const Contacts = () => {
  return (
    <Box id="contacts" margin={"30px auto"}>
      <Heading
        margin={"30px auto"}
        style={{ color: "yellowgreen", textAlign: "center" }}
      >
        Contact Me
      </Heading>
      <Flex
        justifyContent={"space-around"}
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
