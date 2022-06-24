import Link from "next/link"
import { Text } from "@chakra-ui/react"
import styled from '@emotion/styled'

const SloganBox = styled.span`
  font-weight: bold;
  display: inline-flex;
  align-items: center;
`;

const Slogan = () => {
  return (
    <Link href="/">
      <a>
        <SloganBox>
        <Text fontSize="xl" ml={3}>
          K
        </Text>
        </SloganBox>
      </a>
    </Link> 
  )
}

export default Slogan
