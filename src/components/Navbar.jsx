import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Link } from "react-scroll";
import styles from "./Navbar.module.css";

import {
  Box,
  Flex,
  HStack,
  IconButton,
  Button,
  useDisclosure,
  useColorModeValue,
  Stack,
  useColorMode,
  Text,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

const menus = [
  { id: 0, name: "Home", location: "home" },
  { id: 1, name: "About", location: "about" },
  { id: 2, name: "Skills", location: "skills" },
  { id: 3, name: "Projects", location: "projects" },
  { id: 4, name: "Contact", location: "contacts" },
];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")}>
        <Flex
          className={styles.pos}
          paddingInline={{ base: "20px", sm: "10px", md: "0px" }}
          justifyContent={{
            base: "space-between",
            sm: "space-around",
            md: "space-around",
          }}
          alignItems="center"
          fontSize={{ base: "16", sm: "16", md: "24" }}
          padding="15px"
          bg={colorMode === "dark" ? "black" : "gray.400"}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{base:"flex",sm:"flex", md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Text>
            <span className="grey-color"> &lt;</span>
            <span className="logo-name">Bhavnesh Arora</span>
            <span className="grey-color">/&gt;</span>
          </Text>
          <HStack spacing={8}>
            <HStack as={"nav"} display={{ base: "none", md: "flex" }}>
              {menus.map((item) => (
                <Link
                  key={item.id}
                  to={item.location}
                  smooth={true}
                  duration={500}
                >
                  <Button variant={"ghost"} key={item.id}>
                    {item.name}
                  </Button>
                </Link>
              ))}

              <Button colorScheme="teal">
                <a href="../resume/Bhavnesh_Arora_Resume.pdf" download>
                  Resume
                </a>
              </Button>

              <Box bg={useColorModeValue("gray.700", "black")}>
                <Flex alignItems={"center"} justifyContent={"space-between"}>
                  <Stack direction={"row"} spacing={2}>
                    <Button color="gray.700" onClick={toggleColorMode}>
                      {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                    </Button>
                  </Stack>
                </Flex>
              </Box>
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {menus.map((item) => (
                <Link
                  key={item.id}
                  to={item.location}
                  activeclass="active"
                  smooth="true"
                  duration={500}
                >
                  <Button variant={"ghost"} key={item.id}>
                    {item.name}
                  </Button>
                </Link>
              ))}

              <Button colorScheme="teal">
                <a href="../resume/Bhavnesh_Arora_Resume.pdf" download>
                  Resume
                </a>
              </Button>

              <Button color="gray.700" onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
