import React from 'react'
import './whyus.css'

function WhyUs() {
    const data = [
        {
            pic: '../privacy.png',
            title: '100% Privacy'
        },
        {
            pic: '../matching.png',
            title: 'Smart Matching'
        },
        {
            pic: '../secure.png',
            title: 'securey'
        }
    ]
  return (
    <div className='why'>
        <h3>WHY <span>US</span></h3>
    <div className="container">
        {data.map(datas => 
         <div className="box card">
         <div className="content">
           <img src={datas.pic} alt="privacy" />
           <p>{datas.title}</p>
         </div>
        </div>
        )}
       
        
    </div>
    </div>
  )
}

export default WhyUs