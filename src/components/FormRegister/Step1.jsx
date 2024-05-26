import React, { useState } from 'react';
import { validatePassword } from '../../utils/passwordUtils';
import { IoIosWarning } from "react-icons/io";
import { IoEye, IoEyeOff } from 'react-icons/io5';

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
  const [errorMessage, setErrorMessage] = useState('');

  // Vérifie si l'input passwsord est séléctionnée
  const [isPasswordFocused, setIsPasswordFocused] = useState(false);

  // Choix d'affichage du mot de passe
  const [passwordVisible, SetPasswordVisible] = useState(false);
  const [passwordConfirmVisible, SetPasswordConfirmVisible] = useState(false);

  const togglePasswordVisibility = () => {
    SetPasswordVisible(!passwordVisible);
  }

  const togglePasswordConfirmVisibility = () => {
    SetPasswordConfirmVisible(!passwordConfirmVisible);
  }

  // Cible les valeurs dans les champs password
  const handlePasswordChange = (e) => {
    const { value } = e.target;
    setPassword(value);
    setPasswordValidation(validatePassword(value));
  };

  const handlePasswordConfirmChange = (e) => {
    setPasswordConfirm(e.target.value);
  };

  // Vérifie que les critères de mot passe requis sont remplis et que les mots de passe sont identiques
  const handleSubmit = (e) => {
    e.preventDefault();
    if (passwordValidation.isValid && password === passwordConfirm) {
      nextStep();
    } else {
      setErrorMessage("Critères de mot de passe insuffisants et/ou mots de passes différents");
    }
  };

  return (
    <fieldset>
      <h2 className='fs-title'>Création de compte</h2>
      <h3 className='fs-subtitle' style={{ color: 'red' }}>
        <IoIosWarning style={{ position: 'absolute', marginLeft: '-1.2em' }} /> Ces identifiants serviront à la connexion
      </h3>
      <input type="text" name='email' placeholder='Email' required/>
      <div className="password-input-container">
        <input 
          type={passwordVisible ? "text" : "password"}
          name='password'
          placeholder='Mot de passe'
          value={password}
          onChange={handlePasswordChange}
          onFocus={() => setIsPasswordFocused(true)}
          onBlur={() => setIsPasswordFocused(false)}
          required
          />
        <span className="toggle-password-visibility" onClick={togglePasswordVisibility}>
          {passwordVisible ? <IoEyeOff /> : <IoEye />}
        </span>
      </div>

      <div className="password-input-container">
        <input 
          type={passwordConfirmVisible ? "text" : "password"}
          name='cpassword'
          placeholder='Confirmation du mot de passe'
          value={passwordConfirm}
          onChange={handlePasswordConfirmChange}
          required
          />
        <span className="toggle-password-visibility" onClick={togglePasswordConfirmVisibility}>
          {passwordConfirmVisible ? <IoEyeOff /> : <IoEye />}
        </span>
      </div>
      
      {/* Critères de mot de passe */}
      <ul className={`password-criteria ${isPasswordFocused ? 'show' : ''}`}>
        <li style={{ color: passwordValidation.minLength ? '#166c3a' : 'red' }}>
          {passwordValidation.minLength ? '✔' : '✖'} Au moins 8 caractères
        </li>
        <li style={{ color: passwordValidation.hasUpperCase ? '#166c3a' : 'red' }}>
          {passwordValidation.hasUpperCase ? '✔' : '✖'} Au moins une majuscule
        </li>
        <li style={{ color: passwordValidation.hasLowerCase ? '#166c3a' : 'red' }}>
          {passwordValidation.hasLowerCase ? '✔' : '✖'} Au moins une minuscule
        </li>
        <li style={{ color: passwordValidation.hasNumber ? '#166c3a' : 'red' }}>
          {passwordValidation.hasNumber ? '✔' : '✖'} Au moins un chiffre
        </li>
        <li style={{ color: passwordValidation.hasSpecialChar ? '#166c3a' : 'red' }}>
          {passwordValidation.hasSpecialChar ? '✔' : '✖'} Au moins un caractère spécial
        </li>
      </ul>
      {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
      <input type="button" name='next' className='next action-button' value="Next" onClick={handleSubmit}/>
    </fieldset>
  );
}

export default Step1;
