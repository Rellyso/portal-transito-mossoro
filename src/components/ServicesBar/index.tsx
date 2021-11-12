import { Image } from "@chakra-ui/image";
import { Box, Flex, Link } from "@chakra-ui/layout";

import styles from './styles.module.scss';

export function ServicesBar() {
  return (
    <Flex
      className={styles.services_bar}
      w="100%"
      bgColor="white"
      px="8"
      align="center"
      justify="space-between"
      boxShadow="0 0 10px 6px rgba(0,0,0,0.15)"
    >
      <Image
        src="/images/mossoro-logo.png"
        h="12"
      />

      <Box>
        <Link href="#" color="blue.700" fontWeight="medium">Serviços</Link>
      </Box>
    </Flex>
  )
}