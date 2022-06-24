import {
  ChakraProvider,
  ColorModeProvider
} from "@chakra-ui/react";
import theme from "../lib/theme";

const Chakra = ({ children }) => {
  return (
    <ChakraProvider theme={theme}>
      <ColorModeProvider>{children}</ColorModeProvider>
    </ChakraProvider>
  );
};

export default Chakra;
