import Layout from "../components/items";
import Section from "../components/section";
import { GridItem } from "../components/grid-item";
import { Container, Heading, SimpleGrid } from "@chakra-ui/react";

import javascript from "../public/images/javascript.png";
import leetcode from "../public/images/leetcode.png";

const posts = () => {
  return (
    <Layout title="Post">
      <Container mt={10}>
        <Section delay={0.1} align="center">
          <SimpleGrid columns={2} gap={6} align="center">
            <GridItem
              title="Useful JS One-liner"
              thumbnail={javascript}
              id="jsoneliner"
            />
            <GridItem 
              title = "Leetcode In JS"
              thumbnail={leetcode}
              id="leetcodeinjs"
            />
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  );
};

export default posts;
