import React from 'react'
import './createprofile.css'
import { useForm, ValidationError } from '@formspree/react';
import {inputformats} from './Createprofiledata';

function Createprofile() {
  const [state, handleSubmit] = useForm("xjvzbnpq");
  if (state.succeeded) {
    return <p>Profile created successfully!</p>;
} 
 
  return (
    <div className='createprofile'>
      <div className="createprofilewrapper">
        <h2 className='createprofiletitle'>Create profile</h2>
       <div className='createpformwrapper'>
       <form className="createprofileform" onSubmit={handleSubmit}>
           {inputformats.map(inputformat =>
            <div className='inputbox'>
              <span className='label'>{inputformat.field}</span>
              <input  id={inputformat.id} type={inputformat.type} name={inputformat.name} placeholder={inputformat.placeholder}/>
                <ValidationError prefix={inputformat.prefix} field={inputformat.field} errors={state.errors}/>
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