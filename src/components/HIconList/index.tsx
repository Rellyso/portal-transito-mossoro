import Icon from "@chakra-ui/icon";
import { Box, Flex, Link } from "@chakra-ui/layout";
import { MdRecordVoiceOver } from "react-icons/md";
import { ImBooks } from "react-icons/im";
import { HiDocumentReport } from "react-icons/hi";

export function HIconList() {
  return (
    <Flex
      position="relative"
      h="100%"
      align="center"
    >
      <Link href="#">
        <Icon as={MdRecordVoiceOver} fontSize="32" />
      </Link>

      <Box
        h="70%"
        w="0.5"
        borderRadius="md"
        bgColor="white"

        mx="4"
      />

      <Link href="#">
        <Icon as={ImBooks} fontSize="32" />
      </Link>

      <Box
        h="70%"
        w="0.5"
        borderRadius="md"
        bgColor="white"

        mx="4"
      />

      <Link href="#">
        <Icon as={HiDocumentReport} fontSize="32" />
      </Link>

    </Flex>
  )
}