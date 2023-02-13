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
import {
  AUTO,
  BLACK,
  CENTER,
  FILL_50PARENT,
  FONTSIZE,
  JUSTIFYCONTENT,
  LIGHTSTEELBLUE,
  ROW,
  SE,
  TEAL,
  YELLOWGREEN,
} from "../constants/typography";

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
    <Box className={styles.pos}>
      <Box bg={useColorModeValue("gray.100", "gray.700")}>
        <Flex
          paddingInline={{ base: "20px", sm: "10px", md: "0px" }}
          justifyContent={JUSTIFYCONTENT}
          alignItems={CENTER}
          fontSize={FONTSIZE}
          padding="15px"
          bg={colorMode === "dark" ? BLACK : "gray.100"}
        >
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ base: "flex", sm: "flex", md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <Text
            fontSize={FONTSIZE}
            color={colorMode === "dark" ? YELLOWGREEN : YELLOWGREEN}
          >
            <span className="grey-color"> &lt;</span>
            <span className="logo-name">Bhavnesh Arora</span>
            <span className="grey-color">/&gt;</span>
          </Text>
          <HStack>
            <HStack
              as={"nav"}
              display={{ base: "none", md: "flex" }}
              spacing={"2px"}
            >
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

              <a href="https://drive.google.com/uc?export=download&id=1jrCXbIuKlIi1qd9D55mHVCsoFZ16QXrA">
                <Button
                  marginLeft={"5px"}
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

              <Box bg={useColorModeValue(LIGHTSTEELBLUE, BLACK)}>
                <Flex alignItems={CENTER} justifyContent={SE}>
                  <Stack direction={ROW}>
                    <Button
                      color="gray.700"
                      onClick={toggleColorMode}
                      marginLeft={"5px"}
                    >
                      {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                    </Button>
                  </Stack>
                </Flex>
              </Box>
            </HStack>
          </HStack>
        </Flex>

        {isOpen ? (
          <Box display={{ md: "none" }} top={0}>
            <Stack as={"nav"} spacing={4}>
              {menus.map((item) => (
                <Link
                  key={item.id}
                  to={item.location}
                  activeclass="active"
                  smooth="true"
                  duration={500}
                  // m="auto"
                >
                  <Text
                    onClick={onClose}
                    variant={"ghost"}
                    key={item.id}
                    textAlign={CENTER}
                  >
                    {item.name}
                  </Text>
                </Link>
              ))}

              <a
                style={{ textAlign: "center" }}
                href="https://drive.google.com/uc?export=download&id=1jrCXbIuKlIi1qd9D55mHVCsoFZ16QXrA"
              >
                <Button
                  m={AUTO}
                  colorScheme={TEAL}
                  onClick={() => {
                    window.open(
                      "https://drive.google.com/file/d/1jrCXbIuKlIi1qd9D55mHVCsoFZ16QXrA/view?usp=share_link"
                    );
                    onClose();
                  }}
                >
                  Resume
                </Button>
              </a>

              <Button
                textAlign={CENTER}
                color="gray.700"
                onClick={() => {
                  toggleColorMode();
                  onClose();
                }}
                w={FILL_50PARENT}
                m={"auto 25px"}
              >
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>
            </Stack>
          </Box>
        ) : null}
      </Box>
    </Box>
  );
}
