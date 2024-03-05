import React, { useState, useEffect } from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";


function Login({ onLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [forgotPasswordMessage, setForgotPasswordMessage] = useState('');

  useEffect(() => {
    const rememberMeCookie = document.cookie.split(';').find(cookie => cookie.trim().startsWith('rememberMe='));
    if (rememberMeCookie) {
      const [, savedUsername, savedPassword] = rememberMeCookie.split('=');
      setUsername(decodeURIComponent(savedUsername));
      setPassword(decodeURIComponent(savedPassword));
      setRememberMe(true);
    }
  }, []);

  const handleLogin = () => {
    // Validate if username and password are entered
    if (!username.trim() || !password.trim()) {
      setError('Please enter both username and password');
      return;
    }

    // Implement your login logic here
    // For demonstration, we'll assume the login is successful if both fields are filled
    onLogin(username);

    // Set "rememberMe" cookie if checked
    if (rememberMe) {
      const encodedUsername = encodeURIComponent(username);
      const encodedPassword = encodeURIComponent(password);
      document.cookie = `rememberMe=${encodedUsername}=${encodedPassword}; max-age=${60 * 60 * 24 * 7}`; // Expires in 7 days
    } else {
      // If "rememberMe" is unchecked, remove the cookie
      document.cookie = 'rememberMe=; max-age=0';
    }
  };

  const handleForgotPassword = () => {
    // Implement forgot password functionality (e.g., show reset password form)
    setForgotPasswordMessage('An email with instructions to reset your password has been sent.');
  };

  return (
    <div className="container">
      {forgotPasswordMessage && <div className="alert alert-info" role="alert">{forgotPasswordMessage}</div>}
      <h2>Login</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} className="form-control" />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="form-control mt-3" />
      <div className="form-check mt-3">
        <input type="checkbox" checked={rememberMe} onChange={() => setRememberMe(!rememberMe)} className="form-check-input" id="rememberCheck" />
        <label className="form-check-label" htmlFor="rememberCheck">Remember Me</label>
      </div>
      <button onClick={handleLogin} className="btn btn-primary btn-block mt-4">Login</button>
      <button onClick={handleForgotPassword} className="btn btn-link mt-2">Forgot Password?</button>
      {error && <p className="text-danger mt-3">{error}</p>}
    </div>
  );
}

export default Login;
