import {
  Heading,
  HStack,
  Button,
  useColorMode,
  useColorModeValue,
  useMediaQuery,
  Box,
} from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSun, faMoon, faBars } from "@fortawesome/free-solid-svg-icons";

export const Navbar = ({
  openDrawer,
}: {
  openDrawer: (arg0: boolean) => void;
}) => {
  const { colorMode, toggleColorMode } = useColorMode();
  const [isLargerThan700] = useMediaQuery("(min-width: 700px)");
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
      {!isLargerThan700 && (
        <Button borderRadius="full" onClick={() => openDrawer(true)}>
          <FontAwesomeIcon icon={faBars} />
        </Button>
      )}
      <Heading color="teal">Flipkart</Heading>
      <Box>
        <Button variant="ghost">Go to cart</Button>
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
