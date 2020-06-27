import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';

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
    console.log(data);

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
    <div className={styles.Register}>
      <h1>Register</h1>

      {error && (
        <ul className={styles.FormError}>
          {errorEmail && <li className={styles.FormErrorItem}>{errorEmail}</li>}
          {errorPassword && <li className={styles.FormErrorItem}>{errorPassword}</li>}
          {errorPasswordConfirm && <li className={styles.FormErrorItem}>{errorPasswordConfirm}</li>}
        </ul>
      )}

      <form className={styles.RegisterForm}>
        <label htmlFor="register-email">
          <div>Email</div>
          <input type="text" id="register-email" onChange={(e) => setEmail(e.target.value)} value={email} />
        </label>

        <label htmlFor="register-password">
          <div>Password</div>
          <div className={styles.InputLabelDescription}>Minimum length of 3 characters</div>
          <input type="password" id="register-password" onChange={(e) => setPassword(e.target.value)} value={password} />
        </label>

        <label htmlFor="register-confirm-password">
          <div>Confirm Password</div>
          <input type="password" id="register-confirm-password" onChange={(e) => setPasswordConfirm(e.target.value)} value={passwordConfirm} />
        </label>

        <button type="submit" onClick={submitForm}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default register;
