import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_5fysa0r', 'template_5w1j0k7', form.current, '71cEen_QRwuxhkvbZ')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label><br />
      <input type="text" name="user_name" /> <br />
      <label>Email</label><br />
      <input type="email" name="user_email" /> <br />
      <label>Message</label><br />
      <textarea name="message" /><br />
      <input type="submit" value="Send" /><br />
    </form>
  );
};

export default ContactUs