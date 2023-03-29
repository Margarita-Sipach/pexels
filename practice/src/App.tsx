import React from 'react';
import { Header } from './components/modules/Header';
import { Outlet } from 'react-router-dom';

export const App = () => {
  return (
    <div className="page">
      <Header />
      <Outlet />
    </div>
  );
};
