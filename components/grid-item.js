import NextLink from "next/link";
import Image from "next/image";
import { Box, HStack, Tag, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { Global } from "@emotion/react";

export const GridItem = ({ children, id, title, thumbnail }) => (
  <Box w="100%" textAlign="center">
    <NextLink href={`/posts/${id}`} scroll={false}>
    <LinkBox cursor="pointer" w="80%">
      <Image
        src={thumbnail}
        alt={title}
        className="grid-item-thumbnail"
        placeholder="blur"
        loading="lazy"
        width="100%"
        height="100%"
        layout="fixed"
        objectFit="contain"
      />
      <LinkOverlay href={`/posts/${id}`}>
        <Text mt={2}>{title}</Text>
      </LinkOverlay>
      <Text fontSize={14}>{children}</Text>
    </LinkBox>
    </NextLink>
  </Box>
);

export const WorkGridItem = ({ children, title, thumbnail, tags }) => (
  <Box cursor="pointer" w="100%" textAlign="center">
    <Image
      src={thumbnail}
      alt={title}
      className="grid-item-thumbnail"
      placeholder="blur"
      layout="fixed"
      width="100%"
      height="100%"
      objectFit="contain"
    />
    <Text mt={2} fontSize={15}>
      {title}
    </Text>
    <Text fontSize={14}>{children}</Text>
    <HStack spacing={1}>
    {tags.map((tag) => {
      return <Tag key={tag} colorScheme='teal' borderRadius='full'>{tag}</Tag>;
    })}
    </HStack>
  </Box>
);

export const GridItemStyle = () => (
  <Global
    styles={`
      .grid-item-thumbnail {
        border-radius: 12px;
      }
    `}
  />
);
