import './FormStyles.css';

import React from 'react'
import emailjs from 'emailjs-com'
import { useRef } from 'react';


export default function Form() 
{
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_2b4okat', 'template_onzxz6b', form.current, '3W6cLr5Te2V_ZaQlC')
      .then((result) => {
        if(result.text==="OK")
        { alert("Thank you for reaching out to me.\n\nI appreciate your request/requirement and understand its importance. I assure you that I will prioritize this and investigate it promptly. I will look into it as early as possible and provide you with an update or resolution");}
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className='form'>
        <form ref={form} onSubmit={sendEmail}>
            <label>Your Name</label>
            <input type='text' name='name'></input>
            <label>Email</label>
            <input type='email' name='email'></input>
            <label>Subject</label>
            <input type='text' name='subject'></input>
            <label>Message</label>
            <textarea name='message' rows="6" placeholder='Type Your message here'></textarea>
            <button className='btn'>Submit</button>
        </form>
    </div>
  )
}
