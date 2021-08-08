import {
  Heading,
  HStack,
  Button,
  useColorMode,
  useColorModeValue,
  Box,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from "react-router";

export const Navbar = ({
  openDrawer,
}: {
  openDrawer: (arg0: boolean) => void;
}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const { push } = useHistory();
  return (
    <HStack
      justifyContent="space-between"
      boxShadow="dark-lg"
      position="fixed"
      zIndex="banner"
      padding="2"
      width="100%"
      height="4rem"
      top="0%"
      bg={useColorModeValue("white", "gray.800")}
    >
      <Heading color="teal" cursor="pointer" onClick={() => push("/")}>
        Flipkart
      </Heading>
      <Box>
        <Button variant="ghost" cursor="pointer" onClick={() => push("/cart")}>
          Go to cart
        </Button>
        <Button onClick={toggleColorMode} borderRadius="full">
          {colorMode === "light" ? (
            <FontAwesomeIcon icon={faMoon} />
          ) : (
            <FontAwesomeIcon icon={faSun} />
          )}
        </Button>
      </Box>
    </HStack>
  );
};
