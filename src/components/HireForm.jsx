import React from 'react';
import './HireForm.css';

const HireForm = () => {
  return (
    <div className="hire-container">
      <form className="hire-form">
        <input type="text" placeholder="enter your name .." />
        <input type="text" placeholder="enter your company name ....." />
        <input type="text" placeholder="enter my role ....." />
        <button type="submit">SUBMIT</button>
      </form>
      <div className="hire-quote">"I'll enjoy working with you"</div>
    </div>
  );
};

export default HireForm;
