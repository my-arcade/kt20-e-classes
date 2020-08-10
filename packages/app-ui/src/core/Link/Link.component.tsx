// React
import React from "react";

// third-party libraries
import styled, { DefaultTheme } from "styled-components";

interface LinkProps {
  href?: string;
  disabled?: boolean;
  children?: React.ReactNode;
  theme?: DefaultTheme;
}

const Link = ({ children, href, disabled, ...rest }: LinkProps) => {
  return (
    <a href={disabled ? "" : href} {...rest}>
      {children}
    </a>
  );
};

const StyledLink = styled(Link)<LinkProps>`
  color: ${({ disabled, theme }) =>
    disabled ? theme.colors.mediumdark : theme.colors.primary};
`;
export default StyledLink;
