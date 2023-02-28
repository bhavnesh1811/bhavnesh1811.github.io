import {
  Flex,
  Box,
  Text,
  Button,
  VStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Heading,
  useColorMode,
} from "@chakra-ui/react";
import React from "react";
import { Grid, GridItem } from "@chakra-ui/react";
import { HiMail } from "react-icons/hi";
import { BsGithub, BsPerson, BsLinkedin } from "react-icons/bs";
import { MdOutlineEmail } from "react-icons/md";
import {
  AUTO,
  BLACK,
  CENTER,
  COLUMN,
  FILL_60PARENT,
  FONTSIZE,
  LIGHTSTEELBLUE,
  R1,
  TEAL,
  WHITESMOKE,
  YELLOWGREEN,
} from "../constants/typography";

const Contact = () => {
  const { colorMode } = useColorMode();

  return (
    <Box id="contacts" textAlign={CENTER} pt={"90px"}>
      <Box>
        <Heading
          color={colorMode === "dark" ? YELLOWGREEN : LIGHTSTEELBLUE}
          textAlign={CENTER}
        >
          Contact Me
        </Heading>
      </Box>
      <Flex  direction={COLUMN}>
        <Flex
          marginTop={30}
          marginBottom={"10px"}
          fontSize={FONTSIZE}
          color={YELLOWGREEN}
          justify={CENTER}
        ></Flex>
        <form
          action="https://getform.io/f/2f8ac422-cbe2-4166-95e4-dcc033d67710"
          method="POST"
        >
          <Box
            m={AUTO}
            w={["90%", "90%", "80%", "80%"]}
            boxShadow="rgba(0, 0, 0, 0.35) 0px 5px 15px"
            p="10px"
            borderRadius="lg"
          >
            <Box
              m={5}
              color={colorMode === "dark" ? YELLOWGREEN : LIGHTSTEELBLUE}
            >
              <VStack spacing={3}>
                <FormControl id="name">
                  <FormLabel fontSize={FONTSIZE}>Your Name</FormLabel>
                  <InputGroup borderColor="blue.500">
                    <InputLeftElement
                      pointerEvents="none"
                      children={<BsPerson color="gray.800" />}
                    />
                    <Input
                      name="Name"
                      type="text"
                      size="md"
                      color={
                        colorMode === "dark" ? YELLOWGREEN : LIGHTSTEELBLUE
                      }
                    />
                  </InputGroup>
                </FormControl>
                <FormControl id="name">
                  <FormLabel fontSize={FONTSIZE}>Mail</FormLabel>
                  <InputGroup borderColor="blue.500">
                    <InputLeftElement
                      pointerEvents="none"
                      children={<MdOutlineEmail color="gray.800" />}
                    />
                    <Input
                      name="Mail"
                      type="email"
                      size="md"
                      color={
                        colorMode === "dark" ? YELLOWGREEN : LIGHTSTEELBLUE
                      }
                    />
                  </InputGroup>
                </FormControl>
                <FormControl id="name">
                  <FormLabel fontSize={FONTSIZE}>Message</FormLabel>
                  <Textarea
                    name="Message"
                    borderColor="blue.500"
                    _hover={{
                      borderRadius: "gray.300",
                    }}
                    placeholder="Write here"
                    color={"white"}
                  />
                </FormControl>
                <FormControl id="name" float="right">
                  <Button
                    type="submit"
                    className="btn-5"
                    color={colorMode === "dark" ? WHITESMOKE : BLACK}
                    bg={TEAL}
                  >
                    Send Message
                  </Button>
                </FormControl>
              </VStack>
            </Box>
          </Box>
        </form>

        {/* */}
        <Grid
          w={FILL_60PARENT}
          m={AUTO}
          templateColumns={R1}
          gap={1}
          mt="-60px"
        >
          <GridItem colSpan={1}>
            <Flex
              marginTop="80px"
              color={colorMode === "dark" ? YELLOWGREEN : LIGHTSTEELBLUE}
              justify={CENTER}
              gap={8}
            >
              <Box>
                <a
                  href="https://github.com/bhavnesh1811"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsGithub fontSize={"28px"} />
                </a>
              </Box>
              <Box>
                <a
                  href="mailto: erbhavnesharora@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                >
                  <HiMail fontSize={"28px"} />
                </a>
              </Box>
              <Box>
                <a
                  href="https://www.linkedin.com/in/bhavnesh-arora/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <BsLinkedin fontSize={"28px"} />
                </a>
              </Box>
            </Flex>
          </GridItem>
          <GridItem
            color={colorMode === "dark" ? YELLOWGREEN : LIGHTSTEELBLUE}
            // colSpan={1}
          >
            <Flex flexDirection={COLUMN} justify={CENTER}>
              <Text textAlign={CENTER} m="10px" fontSize={"24px"}>
                Call: +91 7206926954
              </Text>
            </Flex>
          </GridItem>
        </Grid>
      </Flex>
    </Box>
  );
};

export default Contact;
