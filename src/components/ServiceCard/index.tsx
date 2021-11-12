import Icon from '@chakra-ui/icon'
import NextLink from 'next/link'
import { Box, Flex, Heading, Text } from '@chakra-ui/layout'
import { MdRecordVoiceOver } from 'react-icons/md'
import { BoxFX } from '../Animated/BoxFX'
import { Button } from '@chakra-ui/button'
import { IconType } from 'react-icons'
import { ReactNode } from 'react'

type Props = {
  title: string;
  sector: string;
  description: ReactNode;
  icon: IconType;
  href: string;
}

export function ServiceCard({ title, sector, description, icon, href }: Props) {
  return (
    <NextLink
      href={href}
    >

      <BoxFX
        whileHover={{ y: -10, boxShadow: '0px 0px 0px 2px rgba(0, 0, 0, 0.05)', height: 'max-content' }}
        transition={{ ease: "easeOut" }}


        h="420px"
        bgColor="white"
        minW="330px"
        maxW="370px"
        rounded="60px"
        px="6"
        py="28px"
        boxShadow="0px 0px 5px 4px rgba(0, 0, 0, 0.04)"

        display="grid"
        gridTemplateRows="150px 120px 1fr"
        cursor="pointer"
      >
        <Flex
          w="100%"
          bgColor="#00ADEF"
          rounded="30px"
          h="150px"
          align="center"
          justify="center"
        >
          <Icon as={icon} fontSize="120px" color="white" />
        </Flex>

        <Box>
          <Heading
            as="h3"
            size="lg"
            fontWeight="medium"
            mt="6"
          >
            {title}
          </Heading>
          <Heading
            as="h6"
            size="sm"
            color="gray.300"
            fontWeight="medium"
          >
            {sector}
          </Heading>
        </Box>

        <Text
          mt="4"
          fontFamily="heading"
          overflow="hidden"
          textOverflow="ellipsis"

          textAlign="justify"
          hyphens="auto"

          minH="80px"

        >
          {description}
        </Text>

        {/* <NextLink
          href={href}
        >
          <Button
            href="#"

            fontFamily="heading"
            fontWeight="bold"
            fontSize="xl"
            py="6"
            textDecor="none"
            rounded="30"
            mt="auto"

            color="#00ADEF"
            bg="transparent"
            borderColor="#00ADEF"
            borderWidth="4px"

            transition="ease .2s"

            _hover={{
              brightness: 0.9
            }}
          >
            ACESSE AQUI
          </Button>
        </NextLink> */}
      </BoxFX>
    </NextLink>
  )
}