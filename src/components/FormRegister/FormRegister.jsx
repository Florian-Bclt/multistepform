import React, { useState } from 'react';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import './FormRegister.css'

function FormRegister() {
  const [currentStep, setCurrentStep] = useState(1);

  const nextStep = () => {
    setCurrentStep(prevStep => prevStep + 1);
  };

  const prevStep = () => {
    setCurrentStep(prevStep => prevStep - 1);
  };

  const renderStep = () => {
    switch (currentStep) {
      case 1:
        return <Step1 nextStep={nextStep} />;
      case 2:
        return <Step2 nextStep={nextStep} prevStep={prevStep} />;
      case 3:
        return <Step3 prevStep={prevStep} />;
      default:
        return null;
    }
  };

  return (
    <div id="msform">
      <ul id='progressbar'>
        <li className={currentStep >= 1 ? "active" : ""}>Création de compte</li>
        <li className={currentStep >= 2 ? "active" : ""}>Informations personnelles</li>
        <li className={currentStep >= 3 ? "active" : ""}>Informations de l'entreprise</li>
      </ul>
      {renderStep()}
    </div>
  );
}

export default FormRegister;
