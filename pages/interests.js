import Layout from "../components/items";
import {
  Container,
  Heading,
  List,
  ListItem,
  ListIcon
} from "@chakra-ui/react";
import { BiBasketball, BiFootball } from "react-icons/bi";
import { AiOutlineStock } from "react-icons/ai";
import { FiAlignJustify } from "react-icons/fi";


const interests = () => {
  return (
    <Layout title="interests">
      <Container mt={10} mb={30}>
        <Heading fontSize="18">Let me know if we share the same hobbies!</Heading>
        <List spacing={3} mt={5}>
          <ListItem align="left" component="div">
            <ListIcon as={BiFootball} />
            Football - YNWA!
          </ListItem>
          <ListItem align="left" component="div">
            <ListIcon as={BiBasketball} />
            Basketball - fan of Stephen Curry!
          </ListItem>
          <ListItem align="left" component="div">
            <ListIcon as={AiOutlineStock} />
            Macroeconomics
          </ListItem>
          <ListItem align="left" component="div">
            <ListIcon as={FiAlignJustify} />
            Astronomy, Geography, Chinese History
          </ListItem>
        </List>
      </Container>
    </Layout>
  );
};

export default interests;
