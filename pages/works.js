import Layout from "../components/items";
import Section from "../components/section";
import {WorkGridItem} from "../components/grid-item";
import { Container, SimpleGrid } from "@chakra-ui/react";

import shuishan from "../public/images/shuishan.png";
import newchinese from "../public/images/newchinese.png";


const works = () => {
  return (
    <Layout title="works">
      <Container mt={10}>
        <Section delay={0.1}>
          <SimpleGrid columns={2} spacing={25}>
            <WorkGridItem
              title="Shuishan-Data-Visualization-Board"
              thumbnail={shuishan}
              tags={["Vue.js", "Echarts"]}
            ></WorkGridItem>
            <WorkGridItem
              title="NewChineseSearch"
              thumbnail={newchinese}
              tags={["React", "MUI", "Redux"]}
            ></WorkGridItem>
          </SimpleGrid>
        </Section>
      </Container>
    </Layout>
  );
};

export default works;
