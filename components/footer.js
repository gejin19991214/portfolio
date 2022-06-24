import { Box } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box align="center" opacity={0.3} fontSize="sm">
      &copy; {new Date().getFullYear()} - 
    </Box>
  );
};

export default Footer;
