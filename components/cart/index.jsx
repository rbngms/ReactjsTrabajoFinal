import React from 'react';
import Footer from '../../layout/footers/footer';
import Header from '../../layout/headers/header';
import Breadcrumb from '../common/breadcrumb';
import CartArea from './cart-area';

const index = () => {
  return (
    <>
      <Header/>
      <main>
        <Breadcrumb title={'Tu carrito'} subtitle={'Carrito'} />
        <CartArea/>
      </main>
      <Footer/>
    </>
  );
};

export default index;