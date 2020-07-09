import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { motion } from 'framer-motion';

import styles from './register.style.css';

const register = ({ setLoggedInUser }) => {
  const history = useHistory();

  // -----------
  // Form fields
  // -----------

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');

  // --------------
  // Error messages
  // --------------

  let containsErrors = false;
  const [error, setError] = useState(false);
  const [errorEmail, setErrorEmail] = useState('');
  const [errorPassword, setErrorPassword] = useState('');
  const [errorPasswordConfirm, setErrorPasswordConfirm] = useState('');

  // ------------------------
  // Clear out error messages
  // ------------------------

  const clearErrorMessages = () => {
    containsErrors = false;
    setError(false);
    setErrorEmail('');
    setErrorPassword('');
    setErrorPasswordConfirm('');
  };

  // ---------------------
  // Validate email format
  // ---------------------

  const validateEmailFormat = () => {
    // Regex for email validation from: https://stackoverflow.com/a/46181/2040509
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!regex.test(String(email).toLowerCase())) {
      setErrorEmail('Please enter a valid email');
      containsErrors = true;
      setError(true);
      return;
    }

    setErrorEmail('');
  };

  // ------------------------
  // Validate password format
  // ------------------------

  const validatePasswordFormat = () => {
    if (String(password).length < 3) {
      setErrorPassword('Please enter a valid password');
      containsErrors = true;
      setError(true);
      return;
    }

    setErrorPassword('');
  };

  // -----------------------
  // Validate password match
  // -----------------------

  const validatePasswordMatch = () => {
    if (password !== passwordConfirm) {
      setErrorPasswordConfirm("Password fields don't match");
      containsErrors = true;
      setError(true);
      return;
    }

    setErrorPasswordConfirm('');
  };

  // --------------
  // Send user data
  // --------------
  // TODO: clear any tokens that might be lingering in the users cookies

  const sendUserData = async () => {
    const userInfo = { email, password };

    const response = await fetch('/api/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userInfo),
    });

    const data = await response.json();

    // Email already exists
    if (data.emailAlreadyExists) {
      setErrorEmail('An account with that email already exists');
      containsErrors = true;
      setError(true);
    }

    // TODO: handle any server errors that might have occured

    if (data.registrationSuccessful) {
      // TODO: show successful registration message
      setLoggedInUser(data.userId);
      history.push('/');
    }
  };

  // -----------
  // Form submit
  // -----------

  const submitForm = (e) => {
    e.preventDefault();

    // Clear our all errors before validating
    clearErrorMessages();

    // Validate all inputs
    validateEmailFormat();
    validatePasswordFormat();
    validatePasswordMatch();

    // If any of the inputs don't pass validation stop submission
    if (containsErrors) return;

    // Send the data to the backend and do backend validation
    sendUserData();
  };

  // ------
  // Render
  // ------

  return (
    <div className={styles.Register} >
      <div className={styles.RegisterHeader}>
        <h1>Sign Up</h1>
        {error && (
          <motion.ul className={styles.FormError}
          animate={{ scale: [.9,1,.9,1,.9,1] }}
          transition={{ duration: .5 }}
          >
            {errorEmail && <li className={styles.FormErrorItem}>{errorEmail}</li>}
            {errorPassword && <li className={styles.FormErrorItem}>{errorPassword}</li>}
            {errorPasswordConfirm && <li className={styles.FormErrorItem}>{errorPasswordConfirm}</li>}
          </motion.ul>
        )}
      </div>

      <form className={styles.RegisterForm}>
        <input type="text" id="register-email" placeholder="Email" onChange={(e) => setEmail(e.target.value)} value={email} />
        <input type="password" id="register-password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} value={password} />
        <input
          type="password"
          id="register-confirm-password"
          placeholder="Confirm password"
          onChange={(e) => setPasswordConfirm(e.target.value)}
          value={passwordConfirm}
        />
        <button type="submit" onClick={submitForm}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default register;
