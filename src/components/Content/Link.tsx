import NextLink, { LinkProps } from 'next/link';
import { ReactNode } from "react";

type Props = LinkProps & {
  children: ReactNode,
  className?: string | undefined,
};

export const Link = ({ children, className, ...linkProps }: Props) => {
  return (
    <NextLink {...linkProps} >
      <a className={className}>
        {children}
      </a>
    </NextLink>
  )
}