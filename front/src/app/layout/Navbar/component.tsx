import { Link, useLocation } from 'react-router-dom';

import css from './navBar.module.css';

type Link = {
  text: string;
  path: string;
}[];

export function NavBar({ links }: { links: Link }) {
  const { pathname } = useLocation();

  const isActive = (path: string) => {
    return pathname === path;
  };

  return (
    <nav>
      {links.map((link) => (
        <div key={link.path}>
          <Link
            to={link.path}
            className={isActive(link.path) ? css.active : ''}
          >
            {link.text}
          </Link>
        </div>
      ))}
    </nav>
  );
}
