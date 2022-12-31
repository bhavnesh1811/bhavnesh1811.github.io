import React from "react";
import { animateScroll as scroll } from "react-scroll";
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Text,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const menus = [
  { id: 0, name: "Home", location: "/" },
  { id: 1, name: "About", location: "/about" },
  { id: 2, name: "Skills", location: "/skills" },
  { id: 3, name: "Projects", location: "/projects" },
  { id: 4, name: "Contacts", location: "/contacts" },
  { id: 5, name: "Resume", location: "/resume" },
];

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Flex
        paddingInline={{ base: "20px", sm:"10px",md: "0px"}}
        justifyContent={{sm:"space-around",md: "space-around" }}
        flexDirection={{ base: "column", sm:"row",md: "row" }}
        alignItems={{ base: "center", sm:"center" }}
        fontSize={{ base: "16", sm:"16",md: "24"}}
        padding={"15px"}
        bg={colorMode === "dark" ? "black" : "lightBlue"}
      >
        <Text onClick={() => scroll.scrollToTop()}>
          <span className="grey-color"> &lt;</span>
          <span className="logo-name">Bhavnesh Arora</span>
          <span className="grey-color">/&gt;</span>
        </Text>

        {menus.map((item) => (
          <Link key={item.id} to={item.location}>
            <Text key={item.id}>
              {item.name}
            </Text>
          </Link>
        ))}

        <Box bg={useColorModeValue("blue.300", "black")}>
          <Flex alignItems={"center"} justifyContent={"space-between"} >
            <Stack direction={"row"} spacing={2}>
              <Button color="gray.700" onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Flex>
        </Box>
      </Flex>
    </>
  );
}
