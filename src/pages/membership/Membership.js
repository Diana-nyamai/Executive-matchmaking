import React from 'react'
import './membership.css'
// import {Link} from 'react-router-dom'

function Membership() {
  const pricing = [
    {
      title: 'basic',
      price: '15,000',
      f1:'This is best for Junior executives',
      f2: 'You be matched with men/women in the same class',
      f3: 'Your first date is self planned however we can assist at a fee',
      f4: 'This membership is valid for 2 months',
      f5: 'Two prequalified dates',
      
    },
    {
      title: 'standard',
      price: '35,000',
      f1:'You be matched with men/women in the same class',
      f2: 'Your first date is planned ',
      f3: 'This membership is valid for 2 months',
      f4: 'Four prequalified dates',
    },
    {
      class: 'selected',
      recomend: 'recommended',
      title: 'premium',
      price: '100,000',
      f1:'This is best for top executives',
      f2: 'You will be matched with men/women in the same class',
      f3: 'You get a physical meeting with your individual match maker.',
      f4: '2 planned dates ',
      f5: 'This membership is valid for 6 months',
    }
  ]
  return (
    <>
    <div className="membership">
    <h1 class="animate__animated animate__swing">MEMBERSHIP PRICING</h1>
         <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#ffff" fill-opacity="1" d="M0,96L48,80C96,64,192,32,288,37.3C384,43,480,85,576,85.3C672,85,768,43,864,32C960,21,1056,43,1152,64C1248,85,1344,107,1392,117.3L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg> 
    </div>
    {/* membership cards */}
    <div className="pricing-container">
      {pricing.map(prices =>
         <div className="pricing-table">
      <div className="pricing-item">
        <div className={prices.class}>{prices.recomend}</div>
        <div className="pricing-title">{prices.title}</div>
        <div className="pricing-value">Ksh.{prices.price}</div>
        
        <ul className='pricing-features'>
          <li>{prices.f1}</li>
          <li>{prices.f2}</li>
          <li>{prices.f3}</li>
          <li>{prices.f4}</li>
          <li>{prices.f5}</li>
          <li>{prices.f6}</li>
        </ul>
        {/* <div className="button"><Link to="#">Get Started </Link></div> */}
      </div>
    </div>
        )}
   </div>
    </>
  )
}

export default Membership