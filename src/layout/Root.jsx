import React from 'react';
import Header from '../components/Header';
import { Outlet } from 'react-router';
import Footer from './../components/Footer';
import Navbar from '../components/Navbar';

const Root = () => {
          return (
                    <>
                              <Header />
                              <Navbar />
                              <Outlet />
                              <Footer />
                    </>
          );
};

export default Root;