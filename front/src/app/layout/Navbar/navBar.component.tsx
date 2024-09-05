import { NavItem } from '@/shared/NavItem';

import css from './navBar.module.css';

export type LinkType = {
  text: string;
  path: string;
};

export function NavBar({ links }: { links: LinkType[] }) {
  return (
    <nav className={css.navBar}>
      {links.map((link) => (
        <NavItem key={link.path} link={link} />
      ))}
    </nav>
  );
}
