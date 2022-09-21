import React from "react";
import Layout from "../../components/items";
import { Badge, Container } from "@chakra-ui/react";
import { Title } from "../../components/post-format";
import Image from "next/image";
import tr from "./tr.png";

const thingsAboutReact = () => {
  return (
    <Layout title="thingsAboutReact">
      <Container align="left">
        <Title>
          Things about React that need to be marked
          <Badge>2022</Badge>
        </Title>
      </Container>
      <>
        <Image src={tr} alt="React" width={1600} height={700} />
      </>
    </Layout>
  );
};

export default thingsAboutReact;
