import { Button } from "@chakra-ui/button";
import { Image } from "@chakra-ui/image";
import { Box, Flex, Heading, Link, Text } from "@chakra-ui/layout";
import { HIconList } from "../HIconList";

import styles from './styles.module.scss'

export function Header() {
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
          <Link href="#" color="white">
            GETRAN
          </Link>
        </Heading>
      </Box>

    </Flex>
  )
}