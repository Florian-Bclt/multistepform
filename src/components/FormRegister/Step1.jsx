import React, { useState } from 'react';
import { validatePassword } from '../../utils/passwordUtils';

function Step1({ nextStep }) {
  const [password, setPassword] = useState('');
  const [passwordConfirm, setPasswordConfirm] = useState('');
  const [passwordValidation, setPasswordValidation] = useState({
    minLength: false,
    hasUpperCase: false,
    hasLowerCase: false,
    hasNumber: false,
    hasSpecialChar: false,
    isValid: false
  });

  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);
    setPasswordValidation(validatePassword(value));
  };

  const handlePasswordConfirmChange = (e) => {
    setPasswordConfirm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordValidation.isValid && password === passwordConfirm) {
      nextStep();
    } else {
      alert('Please ensure the password meets all requirements and both passwords match.');
    }
  };

  return (
    <fieldset>
      <h2 className='fs-title'>Create your account</h2>
      <h3 className='fs-subtitle'>This is step 1</h3>
      <input type="text" name='email' placeholder='Email'/>
      <input type="password" name='pass' placeholder='Password' value={password} onChange={handlePasswordChange}/>
      <ul style={{ display: 'flex', flexDirection: 'column', justifyContent: 'left', alignItems: 'center', listStyle: 'none', textAlign:'left'}}>
        <li style={{ color: passwordValidation.minLength ? 'green' : 'red' }}>
          {passwordValidation.minLength ? '✔' : '✖'} At least 8 characters
        </li>
        <li style={{ color: passwordValidation.hasUpperCase ? 'green' : 'red' }}>
          {passwordValidation.hasUpperCase ? '✔' : '✖'} At least one uppercase letter
        </li>
        <li style={{ color: passwordValidation.hasLowerCase ? 'green' : 'red' }}>
          {passwordValidation.hasLowerCase ? '✔' : '✖'} At least one lowercase letter
        </li>
        <li style={{ color: passwordValidation.hasNumber ? 'green' : 'red' }}>
          {passwordValidation.hasNumber ? '✔' : '✖'} At least one number
        </li>
        <li style={{ color: passwordValidation.hasSpecialChar ? 'green' : 'red' }}>
          {passwordValidation.hasSpecialChar ? '✔' : '✖'} At least one special character
        </li>
      </ul>
      <input type="password" name='cpass' placeholder='Confirm Password' value={passwordConfirm} onChange={handlePasswordConfirmChange}/>
      <input type="button" name='next' className='next action-button' value="Next" onClick={handleSubmit}/>
    </fieldset>
  );
}

export default Step1;
