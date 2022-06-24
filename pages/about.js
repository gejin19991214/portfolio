import Layout from "../components/items";
import {
  Box,
  Container,
  Heading,
  List,
  ListItem,
  ListIcon,
} from "@chakra-ui/react";
import Section from "../components/section";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { ImRadioUnchecked } from "react-icons/im";

const about = () => {
  return (
    <Layout>
      <Container>
        <Box mt={5}>
          <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
              About this site
            </Heading>
            <p align="left">
              This is an experimental personal website, thanks for visiting!
            </p>
            <p align="left">
              My last personal website is kkertin.com, which will be abandoned
              after April 2023.
            </p>
          </Section>
        </Box>
        <Box mt={5}>
          <Section delay={0.1}>
            <Heading as="h3" variant="section-title">
              Features to add &amp; bugs to fix
            </Heading>
            <List spacing={3} align="left">
              <ListItem>
                <ListIcon as={ImRadioUnchecked}></ListIcon>
                Game page
              </ListItem>
              <ListItem>
                <ListIcon as={ImRadioUnchecked}></ListIcon>
                Three.js model
              </ListItem>
            </List>
          </Section>
        </Box>
      </Container>
    </Layout>
  );
};

export default about;
