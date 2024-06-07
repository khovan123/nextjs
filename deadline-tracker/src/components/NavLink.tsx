import Link, { LinkProps } from "next/link";
import { ReactNode } from "react";

interface NavLinkProps extends LinkProps {
  children: ReactNode;
}

const NavLink: React.FC<NavLinkProps> = ({ children, ...props }) => {
  return (
    <Link {...props} passHref>
      {children}
    </Link>
  );
};

export default NavLink;
