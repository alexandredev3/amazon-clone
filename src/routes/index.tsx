import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Login from '../pages/Login';
import Home from '../pages/Home';
import Checkout from '../pages/Checkout';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/login" exact component={Login} />
      <Route path="/" exact component={Home} />
      <Route path="/checkout" component={Checkout} />
    </BrowserRouter>
  );
}

export { Routes };