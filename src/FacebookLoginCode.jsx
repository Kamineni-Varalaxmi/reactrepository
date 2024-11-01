// FacebookLoginComponent.jsx

import React, { useState } from 'react';
import FacebookLogin from 'react-facebook-login';

function FacebookLoginComponent() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState('');

  const handleSuccess = (response) => {
    console.log('Login Success:', response);
    setUserName(response.name); 
    setIsLoggedIn(true);
  };

  return (
    <>
      {!isLoggedIn ? (
        <>
          <FacebookLogin
            appId="1265957454726532" // Replace with your Facebook App ID
            autoLoad={true}
            fields="name,email,picture"
            callback={handleSuccess}
            onFailure={(error) => console.log('Login Failed:', error)}
          />
        </>
      ) : (
        <h2>Welcome {userName}</h2>
      )}
    </>
  );
}

export default FacebookLoginComponent;
