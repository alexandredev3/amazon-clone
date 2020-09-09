import React from 'react';

import GlobalStyles from './styles/GlobalStyles';

import { StateProvider } from './contexts/StateProvider';
import { initialState, reducer } from './reducer';

import { Routes } from './routes';

function App() {
  return (
    <StateProvider initialState={initialState} reducer={reducer}>
      <Routes />
      <GlobalStyles />
    </StateProvider>
  );
}

export default App;