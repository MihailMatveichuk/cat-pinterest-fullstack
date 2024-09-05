import { Outlet } from 'react-router-dom';

import { NavBar } from './Navbar/component';
export function Layout() {
  const links = [
    {
      text: 'Все котики',
      path: '/',
    },
    {
      text: 'Любимые котики',
      path: '/favorite',
    },
  ];
  return (
    <div className="container">
      <header className="header">
        <NavBar links={links} />
      </header>
      <Outlet />
    </div>
  );
}
