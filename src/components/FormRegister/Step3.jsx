import React from 'react';

function Step3({ prevStep }) {
  return (
    <fieldset>
      <h2 className='fs-title'>Informations de l'entreprise</h2>
      <h3 className="fs-subtitle">Ces informations serviront à la facture</h3>
      <input type="text" name='siret' placeholder='SIRET *'/>
      <input type="text" name='tva' placeholder='TVA intracommunautaire'/>
      <input type="email" name='email-compta' placeholder='Email de comptabilité'/>
      <input type="button" name='previous' className='previous action-button' value="Previous" onClick={prevStep}/>
      <input type="submit" name='submit' className='submit action-button' value="Submit"/>
    </fieldset>
  );
}

export default Step3;
