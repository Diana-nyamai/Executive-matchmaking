import React from 'react'
import { Link } from 'react-router-dom'
import './hero.css'

function Hero() {
  return (
    <>
    <div className='hero'>
        <div> <h2 className="heroh2" data-text="Executive&nbsp;Matchmaking">Executive&nbsp;Matchmaking</h2></div>
        <button className="btn"><Link className='btnlink' to="/Membership" exact>View Membership Pricing</Link></button>
        <div className="wave wave1"></div>
        <div className="wave wave2"></div>
        <div className="wave wave3"></div>
        <div className="wave wave4"></div>
    </div>
    </>
  )
}

export default Hero