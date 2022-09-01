import React from 'react'
import '../css/contact.css'
import { useForm, ValidationError } from '@formspree/react';

function Contact() {
  const [state, handleSubmit] = useForm("xjvzbnpq");
  if (state.succeeded) {
    return <p>message sent successfully!</p>;
}
  return (
    <>
    <div className="contact">
    <h1 class="animate__animated animate__swing"> CONTACT US</h1>
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffff" fill-opacity="1" d="M0,96L48,80C96,64,192,32,288,37.3C384,43,480,85,576,85.3C672,85,768,43,864,32C960,21,1056,43,1152,64C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> 
    </div>
      <h3>GET IN TOUCH</h3>
    <div className="contact-container">
      {/* left box */}
      <div className="contact-box1">
          <ul>
            <li><i className='fa fa-phone'></i> <a href="tel:+254712345678"> +2547 12 345 678</a></li>
            <li><i className='fa fa-envelope'></i><a href="mailto:info@gmail.com"> info@gmail.com</a></li>
            <li><i className='fa-brands fa-telegram'></i><a href="tel:+254712345678"> +2547 12 345 678</a></li>
            <li><i className='fa-brands fa-whatsapp'></i><a href="tel:+254712345678"> +2547 12 345 678</a></li>
            
            
          </ul>
      </div>
      {/* right box */}
      <div className="contact-box2">
      <div className="form">
              <form onSubmit={handleSubmit}>
                <input id="email" type="email" name="email" placeholder='Email address...'/>
                <ValidationError prefix="Email" field="email" errors={state.errors}/>
                <textarea id="message" name="message" placeholder='Enter your message...'/>
                <ValidationError prefix="Message" field="message" errors={state.errors}/>
                <input className='submit' type="submit" value="Send" />
             </form>
              </div>
      </div>
    </div>
    </>
  )
}

export default Contact