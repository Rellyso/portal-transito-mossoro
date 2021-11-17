import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, HStack, Link, Text } from "@chakra-ui/layout";
import { MenuItem } from "@chakra-ui/menu";
import { Dropdown } from "../Dropdown";
import { HIconList } from "../HIconList";

import styles from './styles.module.scss'

export function Hero() {
  return (
    <Flex
      as="header"

      flexDir="column"
      justify="center"
      align="center"

      className={styles.main_header}
      w="100%"

    >
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

        <Box
          w="100%"
          position="absolute"
          px="8"

          display="flex"
          align="center"
          justifyContent="flex-end"
        >
          <HStack spacing="4">
            <Dropdown
              title="Serviços"
              items={[
                { name: 'Solicitar palestra', href: '#services' },
                { name: 'Solicitar palestra', href: '#services' },
              ]}
            />

            <Link
              href="#services"
              color="blue.700"
              fontFamily="Poppins"
              fontWeight="600"
              _hover={{
                textDecoration: 'none',
              }}
            >
              Contato
            </Link>
          </HStack>
        </Box>

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
                fontSize="xl"
                pt="6"
                pb="2"
                px="4"
              >
                Conheça abaixo os serviços que oferecemos a população mossoroense
              </Text>

              <HIconList />

              <Link href="#services">SAIBA MAIS</Link>
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
          <Link href="#" color="white" letterSpacing="2px">
            SESDEM
          </Link>
        </Heading>
      </Box>

    </Flex>
  )
}