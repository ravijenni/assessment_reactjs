import React, { useState, useRef, useEffect } from 'react';

function Signup({ onSignup }) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('');
  const [country, setCountry] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [error, setError] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const usernameRef = useRef(null);

  useEffect(() => {
    // Focus to username input field on component mount (auto focus)
    usernameRef.current.focus();
  }, []);

  const handleSignup = () => {
    // Form validation
    if (!username.trim() || !email.trim() || !password.trim() || !confirmPassword.trim() || !age.trim() || !gender.trim() || !country.trim()) {
      setError('Please fill out all fields');
      return;
    }
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    if (!termsAccepted) {
      setError('Please accept the terms and conditions');
      return;
    }
    if (password.length < 8) {
      setError('Password must be at least 8 characters long');
      return;
    }
    if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password) || !/[^A-Za-z0-9]/.test(password)) {
      setError('Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character');
      return;
    }

    // Perform signup 
    // We'll assume signup is successful
    onSignup(username);
    setSuccessMessage('Signup successful!');
  };

  const redirectToLogin = () => {
    // Redirect to the login page or the first intiall page
    window.location.href = '/login'; // Simulate navigation if not using React Router
    // Or if you're using React Router, you can navigate like this:
    // history.push('/login');
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card mt-5">
            <div className="card-body">
              <h2 className="text-center mb-4">Sign Up</h2>
              {successMessage ? (
                <div className="alert alert-success" role="alert">
                  {successMessage}
                </div>
              ) : (
                <>
                  <input type="text" ref={usernameRef} className="form-control" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
                  <input type="email" className="form-control mt-3" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
                  <input type="password" className="form-control mt-3" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                  <input type="password" className="form-control mt-3" placeholder="Confirm Password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} />
                  <input type="number" className="form-control mt-3" placeholder="Age" value={age} onChange={(e) => setAge(e.target.value)} />
                  <select className="form-control mt-3" value={gender} onChange={(e) => setGender(e.target.value)}>
                    <option value="">Select Gender</option>
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                    <option value="other">Other</option>
                  </select>
                  <input type="text" className="form-control mt-3" placeholder="Country" value={country} onChange={(e) => setCountry(e.target.value)} />
                  <div className="form-check mt-3">
                    <input type="checkbox" className="form-check-input" id="termsCheck" checked={termsAccepted} onChange={() => setTermsAccepted(!termsAccepted)} />
                    <label className="form-check-label" htmlFor="termsCheck">I accept the terms and conditions</label>
                  </div>
                  <button onClick={handleSignup} className="btn btn-primary btn-block mt-4">Sign Up</button>
                  <p className="mt-3 text-center">Already have an account? <span className="text-primary" onClick={redirectToLogin} style={{ cursor: 'pointer' }}>Login here</span></p>
                  {error && <p className="text-danger mt-3">{error}</p>}
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;
