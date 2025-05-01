import React from 'react';
import './Contact.css'; // ← this must match the file exactly (case-sensitive)

const Contact = () => {
  return (
    <div className="contact-container">
      <h2>Contact Me</h2>
      <form>
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="4" required></textarea>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};

export default Contact;
