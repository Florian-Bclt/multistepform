import React from 'react';

function Step2({ nextStep, prevStep }) {
  return (
    <fieldset>
      <h2 className='fs-title'>Information Personnelles</h2>
      <h3 className="fs-subtitle">Les champs marqués d'une astérisques (*) sont obligatoires</h3>
      <input type="text" name='lastname' placeholder='Nom *' required/>
      <input type="text" name='firstname' placeholder='Prénom *' required/>
      <input type="tel" name='phone' placeholder='Téléphone *' required/>
      <input type="text" name='entreprise' placeholder='Entreprise *' required/>
      <input type="adress" name='adress' placeholder='rue *' required/>
      <input type="number" name='zip' placeholder='Code postal *' required/>
      <input type="text" name='city' placeholder='Ville *' required/>

      <input type="button" name='previous' className='previous action-button' value="Previous" onClick={prevStep}/>
      <input type="button" name='next' className='next action-button' value="Next" onClick={nextStep}/>
    </fieldset>
  );
}

export default Step2;
