import React from 'react';
import { Outlet } from 'react-router-dom';
import Menu from '../elements/Menu';
import '../scss/index.scss';

function Index() {
  return (
    <div className="index">
      <Menu />
      <main className="mt-4 container-md">
        <Outlet />
      </main>
    </div>
  );
}

export default Index;
