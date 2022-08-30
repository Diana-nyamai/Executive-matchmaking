import React from 'react'
import {Link} from 'react-router-dom';
import '../css/footer.css'
import { useForm, ValidationError } from '@formspree/react';

function Footer() {
  const [state, handleSubmit] = useForm("xjvzbnpq");
  if (state.succeeded) {
    return <p>message sent successfully!</p>;
}
  return (
    <>
      <footer>
      {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0f0101" fill-opacity="1" d="M0,96L48,80C96,64,192,32,288,37.3C384,43,480,85,576,85.3C672,85,768,43,864,32C960,21,1056,43,1152,64C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> */}
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0f0101" fill-opacity="1" d="M0,256L1440,32L1440,320L0,320Z"></path></svg>
        <div className="footer-top">
          <div className="fcontainer">
            <div className="col">
            <img src="../exlogo.png" alt="logo" width={50} height={50}/>
              <strong className='site-name'>EXECUTIVE MATCHMAKING</strong>
              <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quod ut pariatur, quia magni nesciunt ipsam dolore, ad ratione quasi expedita nobis eveniet excepturi incidunt optio. Sequi suscipit minima molestias accusantium.</p>
              <div>
                <Link to="#" className='tel'>+2547 12 345 678</Link>
                <Link to="#" className='mail'>info@gmail.com</Link>
              </div>
              <div className="socials">
              <Link to="#" className='bicon'><i class='fa-brands fa-telegram'></i></Link>
              <Link to="#" className='bicon'><i class='fa-brands fa-whatsapp'></i></Link>
              <Link to="#" className='bicon'><i class='fa fa-envelope'></i></Link>
              </div>

            </div>
            <div className="col">
              <div className="footer-title">
                <strong>QUICK LINKS</strong>
              </div>
              <ul>
                <li><Link className='links' to="/">Home</Link></li>
                <li><Link className='links'  to="/About">About</Link></li>
                <li><Link className='links' to="/Membership">Membership pricing</Link></li>
                <li><Link className='links'  to="/Contact">contact</Link></li>
              </ul>
            </div>
            <div className="col">
            <div className="footer-title">
                <strong>SEND US A MESSAGE</strong>
              </div>
              <div className="form">
              <form onSubmit={handleSubmit}>
                <input
                  id="email"
                  type="email" 
                  name="email"
                  placeholder='Email address...'
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                />
                <textarea
                  id="message"
                  name="message"
                  placeholder='Enter your message...'
                />
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                />
                <input className='submit' type="submit" value="Send" />
            </form>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-copy-right">
            <small>Made with <i style={{color:'red'}} class="fa fa-heart"></i>by Diana Nyamai </small>
          </div>
      </footer>
    </>
  )
}

export default Footer