import React from 'react'
import "./Navbar.css"
const Navbar = () => {
  return (
    <div className='main-container'>
      <div className="logo">
        <h1>Infinkey Solution</h1>
      </div>
     
        <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact Us</li>
           
        </ul>
       
     
      <div className="search">
                <input type='search'/>
            </div>
    </div>
  )
}

export default Navbar
