import React from 'react';
import EmailPasswordAuth from './EmailPasswordAuth';
import GoogleAuth from './GoogleAuth';
import Content from './Content';

const AuthContainer = ({ onSignIn }) => {
  return (
    <div className='main'>
      <EmailPasswordAuth onSignIn={onSignIn} />
      <GoogleAuth onSignIn={onSignIn} />
    </div>
  );
};

export default AuthContainer;
