import NextLink from "next/link"
import { Box, Container, Flex, Heading, Link, Stack } from "@chakra-ui/react"
import Slogan from "./slogan"
import ThemeButton from "./theme-button"

const LinkItem = ({ href, path, children }) => {
  const active = path === href
  return (
    <NextLink href={href} legacyBehavior>
      <Link p={2} bg={active ? "grassTeal" : undefined}>
        {children}
      </Link>
    </NextLink>
  );
};

const Navbar = (props) => {
  const { path } = props
  return (
    <Box position="fixed" as="nav" w="100%" zIndex={1} {...props}>
      <Container
        display="flex"
        p={2}
        maxW="container.md"
        wrap="wrap"
        align="center"
        justify="space-between"
      >
        <Flex align="left" mr={10}>
          <Heading size="lg">
            <Slogan />
          </Heading>
        </Flex>
        <Stack
          direction={{ base: "column", md: "row" }}
          display={{ base: "none", md: "flex" }}
          width={{ base: "full", md: "auto" }}
          flexGrow={1}
          mt={{ base: 4, md: 0 }}
        >
          <LinkItem href="/posts" path={path}>
            Posts
          </LinkItem>
          <LinkItem href="/works" path={path}>
            Works
          </LinkItem>
          <LinkItem href="/interests" path={path}>
            Interests
          </LinkItem>
          <LinkItem href="/about" path={path}>
            About
          </LinkItem>
        </Stack>
        <Box flex={1} align="right">
          <ThemeButton />
        </Box>
      </Container>
    </Box>
  );
};

export default Navbar;
