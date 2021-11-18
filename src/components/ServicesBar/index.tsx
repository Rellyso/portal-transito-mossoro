import { Image } from "@chakra-ui/image";
import { Box, Flex, Link, HStack } from "@chakra-ui/layout";
import { useEffect, useState } from "react";
import { HeaderDividers } from "../HeaderDividers";

import styles from './styles.module.scss';

export function ServicesBar() {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  const [isTop, setIsTop] = useState(true);

  // cria um event listener de scroll e de resize 
  useEffect(() => {
    updateWindowDimensions();

    window.addEventListener('resize', updateWindowDimensions);

    window.addEventListener('scroll', () => {
      setIsTop(window.scrollY <= dimensions.height * 0.15);
      // console.log({ scrollY: window.scrollY + 1, dimensions: dimensions.height })
    });


    return () => removeEventListener('resize', updateWindowDimensions)
  }, [])


  // atualiza tamanho da largura e altura da tela a partir de vh a vw da tela 
  async function updateWindowDimensions() {
    const { innerHeight, innerWidth } = window

    setDimensions({
      width: innerWidth,
      height: innerHeight
    })
  }

  return (
    <Flex
      className={`${styles.services_bar} ${!isTop ? styles.scrolled : ''}`}
      w="100%"
      h="20"
      // bgColor="blue.600"
      backdropFilter="saturate(180%) blur(15px);"
      bg="linear-gradient(269.94deg,#a5b0b65f -7.44%,#07469492 99.94%),#023f8475"
      boxShadow="0 0 10px 6px rgba(0,0,0,0.15)"
      // borderBottom="1px solid"
      borderBottomColor="gray.400"
      position="fixed"
      zIndex="500"
    >
      <HeaderDividers bottom />
      <Flex
        w="1120px"
        mx="auto"
        px="8"
        align="center"
        justify="space-between"
      >
        <Image
          src="/images/logo-prefeitura-mossoro-branco.png"
          h="12"
        />

        <HStack spacing="4" fontFamily="Poppins">
          <Link href="#" color="white" fontWeight="semibold">Início</Link>
          <Link href="#services" color="white" fontWeight="semibold">Serviços</Link>
          <Link href="#contact" color="white" fontWeight="semibold">Contato</Link>
          <Link href="#" color="white" fontWeight="semibold">Organograma</Link>
        </HStack>
      </Flex>
    </Flex>
  )
}