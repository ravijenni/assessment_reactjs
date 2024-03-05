import React, { useState } from 'react';
import Signup from './Components/Signup';
import Login from './Components/Login';
import Game from './Components/Game';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  const [signedUp, setSignedUp] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleSignup = () => {
    setSignedUp(true);
  };

  const handleLogin = (user) => {
    setLoggedIn(true);
    setUsername(user);
  };

  return (
    <div style={styles.container}>
      {!signedUp ? (
        <Signup onSignup={handleSignup} />
      ) : (
        <>
          {!loggedIn ? (
            <Login onLogin={handleLogin} />
          ) : (
            <Game username={username} />
          )}
        </>
      )}
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
  },
};

export default App;
