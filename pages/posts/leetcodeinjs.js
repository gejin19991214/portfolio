import { useState, useEffect } from "react";
import Layout from "../../components/items";
import {
  Badge,
  Container,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
} from "@chakra-ui/react";
import { Title } from "../../components/post-format";
import Link from "next/link";

const Leetcodeinjs = () => {
  const [content, setContent] = useState([]);
  const [fetched, setFetched] = useState(false);
  useEffect(() => {
    fetch(
      "https://sheet.best/api/sheets/bdf0b60e-05f5-475c-a725-63813e6a3ea0",
      { method: "GET", mode: "cors" }
    )
      .then((res) => res.json())
      .then((data) => {
        if (Object.keys(data).length > 1) {
          setContent(data);
        }
      });
  }, []);
  return (
    <Layout title="leetcodeinjs">
      <Container align="left">
        <Title>
          Leetcode In JS
          <Badge>2022</Badge>
        </Title>
      </Container>
      {fetched ? (
        <TableContainer maxW="container.md" mt={15} mb={15}>
          <Table variant="simple" size="sm">
            <Thead>
              <Tr>
                <Th>Title</Th>
                <Th>Category</Th>
                <Th>Notes</Th>
              </Tr>
            </Thead>
            <Tbody>
              {content.map((ans) => (
                <Tr key={ans.Title}>
                  <Td>{ans.Title}</Td>
                  <Td>{ans.Category}</Td>
                  <Td>{ans.Notes}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      ) : (
        <p align="left">
          Sorry, It&apos;s out of Google API monthly limit. Please visit{" "}
          <Link
            href="https://docs.google.com/spreadsheets/d/1QZxo8tEOMswlSIyOTwkIxZR1KVc-auH6o89-XNDbdpg/edit#gid=0"
            legacyBehavior>
          <a className="linkout">
            Google sheets of Leetcode In JS
          </a>
          </Link>
          {" "}
          directly.
        </p>
      )}
       <style jsx>{`
       .linkout {
        color: green;
    `}</style>
    </Layout>
  );
};

export default Leetcodeinjs;
