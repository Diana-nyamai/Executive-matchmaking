import React from 'react'
import './form.css'
import { useForm, ValidationError } from '@formspree/react';

function FormPage() {
  const [state, handleSubmit] = useForm("xjvzbnpq");
  if (state.succeeded) {
    return <p>message sent successfully!</p>;
}
  return (
    <div className='formcontainer'>
        <div className="formwrapper">
            <h1 className='titleprofile'>CREATE PROFILE</h1>
            <div className="forminnerwrapper">
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
  )
}
export default FormPage