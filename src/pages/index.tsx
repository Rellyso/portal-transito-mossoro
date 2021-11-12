import { Box, Flex, Icon, Text, Button, Link, Divider, Heading, SimpleGrid } from '@chakra-ui/react';
import Head from 'next/head'
import NextLink from 'next/link'
import { ImBooks } from 'react-icons/im';
import { MdRecordVoiceOver } from 'react-icons/md';
import { BiTrafficCone } from 'react-icons/bi';
import { RiFilePaperFill, RiFilePaperLine } from 'react-icons/ri';
import { BoxFX } from '../components/Animated/BoxFX';
import { Hero } from '../components/Hero';
import { HIconList } from '../components/HIconList'
import { ServiceCard } from '../components/ServiceCard';
import { ServicesBar } from '../components/ServicesBar';

import styles from '../styles/Home.module.scss';
import { HiPencilAlt } from 'react-icons/hi';

export default function Home() {
  return (
    <Box className={styles.container}
      bgColor="white"

    >
      <Head>
        <title>SESDEM | Prefeitura de Mossoró</title>
      </Head>

      <ServicesBar />

      <Hero />

      <Flex
        as="main"
        id="services"
        minH="100vh"
        maxW="1140px"
        w="100%"
        py="16"
        px="4"
        mx="auto"
        direction="column"
      >
        <Heading
          size="2xl"
          fontWeight="500"
          color="gray.800"
        >
          Serviços
        </Heading>
        <Divider my="4" />

        <SimpleGrid
          mt="10"
          minChildWidth="330px"
          spacing="12"
        >
          <ServiceCard
            title="Solicitar palestra"
            sector="Educação"
            description="Clique aqui e solicite uma palestra sobre educação no trânsito."
            icon={MdRecordVoiceOver}
            href="#"
          />
          <ServiceCard
            title="Solicitar material educativo"
            sector="Educação"
            description="Veja os materiais educativos disponíveis para a comunidade."
            icon={ImBooks}
            href="#"
          />
          <ServiceCard
            title="Gerar multas atuais SESDEM"
            sector="Multas"
            description="Gere o boleto de sua multa atual com possibilidade de 20% de desconto."
            icon={RiFilePaperLine}
            href="#"
          />
          <ServiceCard
            title="Gerar multas antigas SESDEM"
            sector="Multas"
            description="Preencher o requerimento de emissão de penalidade, assinatura do titular do veículo junto a CNH ou identidade e documento do veículo."
            icon={RiFilePaperFill}
            href="#"
          />
          <ServiceCard
            title="Recorrer de multa SESDEM"
            sector="Multas"
            description={
              <>
                <Text>1. Documento do proprietário (Identidade ou Habilitação – frente e verso);</Text>
                <Text>2. Documento do veículo;</Text>
                <Text>3. Defesa digitada ou em nosso formulário e assinada (OBS.: assinatura igual ao documento que apresentar);</Text>
                <Text>4. Manda aqui ou pelo nosso e-mail: atendimentotransito@prefeiturademossoro.com.br</Text>
              </>
            }
            icon={HiPencilAlt}
            href="#"
          />
          <ServiceCard
            title="BOAT - Boletim de acidente"
            sector="Serviços"
            description={
              <>
                Clique aqui e gere a declaração de acidente de trânsito
              </>
            }
            icon={BiTrafficCone}
            href="#"
          />

        </SimpleGrid>
      </Flex>
    </Box>
  )
}
