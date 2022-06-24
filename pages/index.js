import Layout from "../components/items";
import {
  Button,
  Box,
  Container,
  Heading,
  List,
  ListItem,
} from "@chakra-ui/react";
import Section from "../components/section";
import { EduSection, EduYear } from "../components/edu";
import Link from "next/link";
import { IoLogoGithub } from "react-icons/io5";
import { AiOutlineMail, AiFillWechat } from "react-icons/ai";

export default function Home() {
  return (
    <Layout>
      <Container mt={6}>
        <Box display={{ md: "flex" }}>
          <Box flexGrow={1}>
            <Heading as="h2" variant="page-title">
              Kertin
            </Heading>
            <p>Student / Developer</p>
          </Box>
          <Button colorScheme="cyan" size="md">
            <a download href="Gejin_resume.pdf">
              Download my resume
            </a>
          </Button>
        </Box>
        <Section delay={0.1}>
          <Heading as="h3" variant="section-title">
            Work
          </Heading>
          <p align="left">
            Hi there! I&apos;m Kertin, born in 1999. I&apos;m a student at ECNU
            majoring in Big Data and i&apos;m interested in full-stack
            developing. Tech stack includes React, Vue.js and Express.js.
          </p>
        </Section>

        <Section delay={0.2}>
          <Heading as="h3" variant="section-title">
            Education
          </Heading>
          <EduSection align="left">
            <EduYear>2017-2021</EduYear>
            East China Normal University, BCS
          </EduSection>
          <EduSection align="left">
            <EduYear>2021-2024</EduYear>
            East China Normal University, MCS
          </EduSection>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Interests
          </Heading>
          <p align="left">
            Developing(React, Vue), Sports(Football, Basketball), Macroeconomics
          </p>
        </Section>

        <Section delay={0.3}>
          <Heading as="h3" variant="section-title">
            Contacts
          </Heading>
          <List align="left">
            <ListItem>
              <Button
                variant="ghost"
                colorScheme="cyan"
                leftIcon={<AiFillWechat />}
              >
                @kkertin
              </Button>
            </ListItem>
            <ListItem>
              <Link href="https://github.com/gejin19991214" target="_blank">
                <Button
                  variant="ghost"
                  colorScheme="cyan"
                  leftIcon={<IoLogoGithub />}
                >
                  @gejin19991214
                </Button>
              </Link>
            </ListItem>
            <ListItem>
              <Button
                variant="ghost"
                colorScheme="cyan"
                leftIcon={<AiOutlineMail />}
              >
                gejin991214@gmail.com
              </Button>
            </ListItem>
          </List>
        </Section>
      </Container>
    </Layout>
  );
}
