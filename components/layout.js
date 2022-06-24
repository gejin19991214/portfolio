import Head from "next/head"
import { Box, Container } from "@chakra-ui/react"
import MDXComponents from "../components/MDXComponents"
import { MDXProvider } from "@mdx-js/react"
import Navbar from "./navbar"
import Footer from "./footer"

const Layout = ({ children, router }) => {
  return (
    <MDXProvider components={MDXComponents}>
    <Box pb={10}>
      <Head>
        <meta name="author" content="Kertin" />
        <title>Kertin - Homepage</title>
      </Head>
      <Navbar path={router.asPath} />
      <Container display="flex" justify="center" align="center" maxW="container.md" pt={10}>
        {children}
      </Container>
      <Footer />
    </Box>
    </MDXProvider>
  );
};

export default Layout;
