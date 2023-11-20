import React, { useState } from 'react';
import './App.css';
import EmailPasswordAuth from './EmailPasswordAuth';
import GoogleAuth from './GoogleAuth';
import Content from './Content';

function App() {
  const [userLoggedIn, setUserLoggedIn] = useState(false);

  return (
    <div className='App'>
      {userLoggedIn ? (
        <Content /> 
      ) : (
        <div className='main'>
          <EmailPasswordAuth onSignIn={() => setUserLoggedIn(true)} />
          <GoogleAuth onSignIn={() => setUserLoggedIn(true)} />
        </div>
      )}
    </div>
  );
}

export default App;
