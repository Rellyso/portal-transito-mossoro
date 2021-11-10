import { Box, Flex, Image, Text, Button, Link, Heading } from '@chakra-ui/react';
import Head from 'next/head'
import { HIconList } from '../components/HIconList'

import styles from '../styles/Home.module.scss';

export default function Home() {
  return (
    <Box className={styles.container}>
      <Head>
        <title>GETRAN | Prefeitura de Mossoró</title>
      </Head>

      <Flex
        as="header"

        flexDir="column"
        justify="center"
        align="center"

        className={styles.main_header}
        w="100%"
      >
        {/* services bar */}
        <Flex
          className={styles.services_bar}
          w="100%"
          bgColor="white"
          px="8"
          align="center"
          justify="space-between"
        >
          <Image
            src="/images/mossoro-logo.png"
            h="12"
          />

          <Box>
            <Link href="#" color="blue.700" fontWeight="medium">Serviços</Link>
          </Box>
        </Flex>

        {/* header one */}
        <Flex
          align="center"
          justify="center"
          py="4"
          w="100%"
          className={styles.header_container_one}
        >
          <Image
            h="16"
            src="images/logo2.png"
            alt="Brasão prefeitura de mossoró"
            className={styles.brasao}
          />
          <Box className={`${styles.header_dividers} ${styles.dividers_top}`}>
            <span />
            <span />
            <span />
            <span />
          </Box>
        </Flex>

        {/* header two */}
        <Flex
          align="center"
          justify="center"
          py="4"
          w="100%"
          className={styles.header_container_two}
        >
          <Box className={styles.consulta_veiculo_card}>
            <Button w="6">Gerência de trânsito</Button>

            <Box className={styles.cv_card_items}>
              <Box className={styles.cv_card_item}>
                {/* <Image
                  src="images/radar.png"
                  alt="RADAR"

                  h="16"
                /> */}
                <Text
                  fontSize="lg"
                  pt="6"
                  px="4"
                >
                  Conheça os serviços que oferecemos a população mossoroense
                </Text>

                <HIconList />

                <Link href="#">SAIBA MAIS</Link>
              </Box>

              {/* <Divider /> */}

            </Box>
          </Box>
        </Flex>

        {/* header three */}

        <Box
          className={styles.header_container_three}
          display="flex"
          align="center"
          justify="center"
          w="100%"
          py="4"
          bg="white"
        >
          <Box
            display="flex"
            align="baseline"
            justifyContent="flex-start"
            className={`${styles.header_dividers} ${styles.dividers_bottom}`}
          >
            <span />
            <span />
            <span />
            <span />
          </Box>
          <Heading
            textAl="center"
            className={styles.heading_text}
          >
            <Link href="#">
              GETRAN
            </Link>
          </Heading>
        </Box>

        {/* <div
          className="header-container-three w-100 d-flex flex-row justify-content-center align-items-center py-4 bg-white">
          <div className="header-dividers dividers-bottom">
            <span></span>
            <span></span>
            <span></span>
            <span></span>
          </div>
          <h1 className="text-center heading-text text-white">
            <a href="#notificacoes">Edital de notificação</a>
          </h1>
        </div> */}
      </Flex>

      <Flex
        as="main"

      >

      </Flex>
    </Box>
  )
}
