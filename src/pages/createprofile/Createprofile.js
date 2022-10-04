import React from 'react'
import './createprofile.css'
import { useForm, ValidationError } from '@formspree/react';

function Createprofile() {
  const [state, handleSubmit] = useForm("xjvzbnpq");
  if (state.succeeded) {
    return <p>message sent successfully!</p>;
} 
 const inputformats = [
  {
    id: "email",
    type: "email",
    name: "email",
    placeholder: "Email address...",
    prefix: "Email",
    field: "email"
 },
 {
  id: "email",
  type: "email",
  name: "email",
  placeholder: "Email address...",
  prefix: "Email",
  field: "email"
},
{
  id: "email",
  type: "email",
  name: "email",
  placeholder: "Email address...",
  prefix: "Email",
  field: "email"
},
{
  id: "email",
  type: "email",
  name: "email",
  placeholder: "Email address...",
  prefix: "Email",
  field: "email"
},

]
  return (
    <div className='createprofile'>
      <div className="createprofilewrapper">
        <h2 className='createprofiletitle'>Create profile</h2>
       <div className="creteprofileform">
       <form onSubmit={handleSubmit}>
           {inputformats.map(inputformat =>
            <div>
              <input id="email" type="email" name="email" placeholder='Email address...'/>
                <ValidationError prefix="Email" field="email" errors={state.errors}/>
            </div>
            )}
                
                <textarea id="message" name="message" placeholder='Enter your message...'/>
                <ValidationError prefix="Message" field="message" errors={state.errors}/>
                <input className='submit' type="submit" value="Send" />
             </form>
       </div>
      </div>
      </div>
  )
}

export default Createprofile