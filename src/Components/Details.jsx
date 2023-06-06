import React from 'react'
import './DetailsStyles.css'
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa'

export default function Details() {
  return (
   
        <div className="contact_options">
            <div className='contact_option'>
                <FaEnvelope className='contact_option-icon'></FaEnvelope>
                <h4>Email</h4>
                <h5>yashrajsinghmandloi@gmail.com</h5>
                <a href='mailto:yashrajsinghmandloi@gmail.com' rel="noreferrer" target='_blank'>Send a message</a>
            </div>
            <div className='contact_option'>
    
                <FaWhatsapp className='contact_option-icon'></FaWhatsapp>
                <h4>Whatsapp</h4>
                <h5>7970090953</h5>
                <a href='https://api.whatsapp.com/send?phone=7970090953' rel="noreferrer" target='_blank'>Send a message</a>
            </div>
            
        </div>
  ) 
}
