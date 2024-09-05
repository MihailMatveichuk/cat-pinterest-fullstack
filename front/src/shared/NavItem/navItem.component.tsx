import { Link, useLocation } from 'react-router-dom';

import { LinkType } from '@/app/layout/Navbar/navBar.component';

import css from './navItem.module.css';

export function NavItem({ link }: { link: LinkType }) {
  const { pathname } = useLocation();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <div
      key={link.path}
      className={
        isActive(link.path) ? `${css.activeNav} ${css.navItem}` : css.navItem
      }
    >
      <Link to={link.path} className={isActive(link.path) ? css.active : ''}>
        {link.text}
      </Link>
    </div>
  );
}
