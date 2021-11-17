import { Box, Divider, Flex, FlexProps, Heading } from "@chakra-ui/layout";
import { HeaderDividers } from "../HeaderDividers";

type Props = {
  name: string;
  dark?: boolean;
  headerDividers?: boolean;
} & FlexProps;

export function Section({ children, dark = false, name, headerDividers = false, ...rest }: Props) {

  return (
    <Flex
      as="section"
      minH="100vh"
      w="100%"
      py="24"
      direction="column"
      position="relative"
      {...rest}
    >
      {headerDividers && <HeaderDividers />}


      <Box
        w="100%"
        mx="auto"
        px="4"
        maxW="1140px"
        position="relative"
      >

        <Heading
          size="2xl"
          fontWeight="semibold"
          color={dark ? "gray.200" : "gray.700"}
        >
          {name}
        </Heading>

        <Divider my="4" color={dark ? "gray.200" : "gray.700"} />

        {children}
      </Box>
    </Flex>
  )
}