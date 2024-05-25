import React from 'react';

function Step3({ prevStep }) {
  return (
    <fieldset>
      <h2 className='fs-title'>Personal Details</h2>
      <h3 className="fs-subtitle">We will never sell it</h3>
      <input type="text" name='fname' placeholder='First Name'/>
      <input type="text" name='lname' placeholder='Last Name'/>
      <input type="text" name='phone' placeholder='Phone'/>
      <textarea name="address" placeholder='Address'></textarea>
      <input type="button" name='previous' className='previous action-button' value="Previous" onClick={prevStep}/>
      <input type="submit" name='submit' className='submit action-button' value="Submit"/>
    </fieldset>
  );
}

export default Step3;
