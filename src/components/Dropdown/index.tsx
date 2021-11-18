import Icon from "@chakra-ui/icon";
import { Menu, MenuButton, MenuItem, MenuList, MenuProps } from "@chakra-ui/menu";
import { Link } from "../Content/Link";

import { ChevronDownIcon } from '@chakra-ui/icons';

import styles from './styles.module.scss'
import { HStack } from "@chakra-ui/layout";

type Props = {
  title: string,
  items: {
    name: string;
    href: string;
  }[]
}

export function Dropdown({ title, items }: Props) {
  return (
    <Menu isLazy >
      <MenuButton color="blue.700" fontFamily="Poppins" fontWeight="600">{title}</MenuButton>
      <MenuList>
        {/* MenuItems are not rendered unless Menu is open */}
        {items.map(item => (
          <Link href={item.href} key={item.name}>
            <MenuItem>
              {item.name}
            </MenuItem>
          </Link>
        ))}
      </MenuList>
    </Menu>
  )
}