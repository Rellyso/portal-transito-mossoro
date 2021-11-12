import { Box } from "@chakra-ui/layout";
import styles from './styles.module.scss'

type Props = {
  bottom?: boolean;
}

export function HeaderDividers({ bottom = false }: Props) {
  return (
    <Box className={`${styles.header_dividers} ${bottom ? styles.dividers_bottom : styles.dividers_top}`}>
      <span />
      <span />
      <span />
      <span />
    </Box>

  )
}