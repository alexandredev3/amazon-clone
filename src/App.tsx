import React, { useEffect } from 'react';

import GlobalStyles from './styles/GlobalStyles';

import { Routes } from './routes';

import { auth } from './services/firebase';
import { useStateValue } from './contexts/StateProvider';

function App() {
  const { dispatch } = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged(authUser => {
      // console.log('THE USER IS >>>', authUser);

      if (authUser) {
        // Usuario fez login;
        dispatch({
          type: 'SET_USER',
          user: authUser
        });
      } else {
        // Usuario fez logged out;
        dispatch({
          type: 'SET_USER',
          user: null
        })
      }
    })
  }, [dispatch]);
  /**
   * The problem here is that it is not clear to use external methods 
   * within the useEffect event, as it will be more complicated to map what effect needs information to be executed.
   * All variables and methods must be declared in the array.
   * That's why i put the dispach inside the useEffect array.
   */

  return (
    <>
      <Routes />
      <GlobalStyles />
    </>
  );
}

export default App;