import React from 'react'
import './createprofile.css'
import { useForm, ValidationError } from '@formspree/react';
import {inputformats} from './Createprofiledata';
import {textareadata} from './Textareadata';
import {Selectdata} from './Selectdata';

function Createprofile() {
  const [state, handleSubmit] = useForm("xnqrvejv");
  if (state.succeeded) {
    return <p>Profile created successfully!</p>;
} 
 
  return (
    <div className='createprofile'>
      <div className="createprofilewrapper">
        <h2 className='createprofiletitle'>Create Profile</h2>
       <div>
       <form className="createprofileform" onSubmit={handleSubmit} enctype="multipart/form-data">
           {inputformats.map(inputformat =>
            <div className='inputbox'>
              <span className='label'>{inputformat.label}</span>
              <input className="cpinput" id={inputformat.id} type={inputformat.type} name={inputformat.name} placeholder={inputformat.placeholder}/>
                <ValidationError prefix={inputformat.prefix} field={inputformat.field} errors={state.errors}/>
            </div>
            )}

            {Selectdata.map(select =>
              <div className="cpoptions">
              <span>{select.label}</span>
            <select className='select' name={select.name} id={select.id}>
              <option selected>select an option</option>
              <option value={select.value1}>{select.value1}</option>
              <option value={select.value2}>{select.value2}</option>
              <option value={select.value3}>{select.value3}</option>
              <option value={select.value4}>{select.value4}</option>
              <option value={select.value5}>{select.value5}</option>
            </select>
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