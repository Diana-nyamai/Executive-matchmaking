import React from 'react'
import './createprofile.css'
import { useForm, ValidationError } from '@formspree/react';
import {inputformats} from './Createprofiledata';
import {textareadata} from './Textareadata';

function Createprofile() {
  const [state, handleSubmit] = useForm("xnqrvejv");
  if (state.succeeded) {
    return <p>Profile created successfully!</p>;
} 
 
  return (
    <div className='createprofile'>
      <div className="createprofilewrapper">
        <h2 className='createprofiletitle'>Create profile</h2>
       <div>
       <form className="createprofileform" onSubmit={handleSubmit} enctype="multipart/form-data">
           {inputformats.map(inputformat =>
            <div className='inputbox'>
              <span className='label'>{inputformat.label}</span>
              <input className="cpinput" id={inputformat.id} type={inputformat.type} name={inputformat.name} placeholder={inputformat.placeholder}/>
                <ValidationError prefix={inputformat.prefix} field={inputformat.field} errors={state.errors}/>
            </div>
            )}
               <div className="textareacontainer">
                {textareadata.map(textarea =>
                  <div className='textareasubcontainer'>
                    <h2 className='thead2'>{textarea.title}</h2>
                     <textarea className='textareabox' id={textarea.id} name={textarea.name} placeholder={textarea.placeholder}/>
                    <ValidationError prefix={textarea.prefix} field={textarea.field} errors={state.errors}/>
                  </div>
                  )}
               
                </div> 
                {/* <div className="uploadphoto">
                  <span>Upload a good looking photo</span>
                  <input type="file" name="photo" accept="image/png, image/jpeg"/>
                </div> */}
                <input className='submit' type="submit" value="Create profile" />
             </form>
       </div>
      </div>
      </div>
  )
}

export default Createprofile