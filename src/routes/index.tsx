import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Header from '../components/Header';

import Home from '../pages/Home';
import Checkout from '../pages/Checkout';

function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Route path="/" exact component={Home} />
      <Route path="/checkout" component={Checkout} />
    </BrowserRouter>
  );
}

export { Routes };