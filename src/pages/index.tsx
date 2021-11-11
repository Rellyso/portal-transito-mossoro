import { Box, Flex, Icon, Text, Button, Link, Divider, Heading, SimpleGrid } from '@chakra-ui/react';
import Head from 'next/head'
import NextLink from 'next/link'
import { MdRecordVoiceOver } from 'react-icons/md';
import { BoxFX } from '../components/Animated/BoxFX';
import { Header } from '../components/Header';
import { HIconList } from '../components/HIconList'
import { ServicesBar } from '../components/ServicesBar';

import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <Box className={styles.container}
      bgColor="white"

    >
      <Head>
        <title>GETRAN | Prefeitura de Mossoró</title>
      </Head>

      <ServicesBar />

      <Header />

      <Flex
        as="main"
        minH="100vh"
        maxW="1140px"
        w="100%"
        pt="16"
        px="4"
        mx="auto"
        direction="column"
      >
        <Heading size="2xl" fontWeight="bold">Serviços</Heading>
        <Divider my="4" />

        <SimpleGrid minChildWidth="330px">
          <BoxFX
            whileHover={{ scale: 1.01, boxShadow: '0px 0px 0px 2px rgba(0, 0, 0, 0.05)' }}
            transition={{ ease: "easeOut" }}

            mt="10"

            h="500px"
            bgColor="white"
            minW="330px"
            maxW="370px"
            rounded="60px"
            px="6"
            py="28px"
            boxShadow="0px 0px 5px 4px rgba(0, 0, 0, 0.05)"

            display="flex"
            flexDir="column"
            justifyContent="space-between"
          >
            <Flex
              w="100%"
              bgColor="#00ADEF"
              rounded="30px"
              h="180px"
              align="center"
              justify="center"
            >
              <Icon as={MdRecordVoiceOver} fontSize="160px" color="white" />
            </Flex>

            <Heading
              as="h3"
              size="lg"
              fontWeight="medium"
              mt="8"
            >
              Solicitar palestra
            </Heading>
            <Heading
              as="h6"
              size="sm"
              color="gray.300"
              fontWeight="medium"
            >
              Educação
            </Heading>

            <Text
              mt="8"
              fontFamily="heading"
            >
              Clique aqui e solicite uma palestra sobre educação no trânsito.
            </Text>

            <NextLink
              href="#"
            >

              <Button
                href="#"

                fontSize="2xl"
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
            </NextLink>
          </BoxFX>
        </SimpleGrid>
      </Flex>
    </Box>
  )
}
