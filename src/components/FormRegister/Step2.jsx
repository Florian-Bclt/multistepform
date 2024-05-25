import React from 'react';

function Step2({ nextStep, prevStep }) {
  return (
    <fieldset>
      <h2 className='fs-title'>Social Profiles</h2>
      <h3 className="fs-subtitle">Your presence on the social network</h3>
      <input type="text" name='x' placeholder='X'/>
      <input type="text" name='facebook' placeholder='Facebook'/>
      <input type="text" name='gplus' placeholder='Google Plus'/>
      <input type="button" name='previous' className='previous action-button' value="Previous" onClick={prevStep}/>
      <input type="button" name='next' className='next action-button' value="Next" onClick={nextStep}/>
    </fieldset>
  );
}

export default Step2;
