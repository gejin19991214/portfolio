import Layout from "../components/items";
import Section from "../components/section";
import {WorkGridItem} from "../components/grid-item";
import { Container, SimpleGrid } from "@chakra-ui/react";

import meituan from "../public/images/meituan.png";

const works = () => {
  return (
    <Layout title="works">
      <Container mt={10}>
        <Section delay={0.1}>
          <SimpleGrid columns={2} spacing={25}>
            <WorkGridItem
              title="membership card detail page"
              thumbnail={meituan}
              tags={["Vue.js"]}
            ></WorkGridItem>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  );
};

export default works;
