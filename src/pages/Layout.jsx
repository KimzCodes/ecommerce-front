import React from 'react';
import { Container } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const Layout = () => {
  return (
    <Container>
      <Header />

      <Outlet />
    </Container>
  );
};

export default Layout;
