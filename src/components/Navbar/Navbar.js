import React, { useState } from "react";
// import { Link } from 'react-router-dom'

import './Navbar.css'

export default function Navbar() {
   const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Navbar fixed-top">

      <a href="#" onClick={() => setIsOpen(isOpen)} className="nav-logo">Home</a>
      {/* <Link to='/' className="nav-logo">Home</Link> */}

      <div className={`nav-items ${isOpen && "open"}`}>

        <a href='#row-about' onClick={() => setIsOpen(!isOpen)}><p>01.</p>About</a>
        <a href='#row-work' onClick={() => setIsOpen(!isOpen)}><p>02.</p>Work</a>
        <a href='#row-skills' onClick={() => setIsOpen(!isOpen)}><p>03.</p>Skills</a>
        <a href='#row-services' onClick={() => setIsOpen(!isOpen)}><p>04.</p>Services</a>
        <a href='#row-contact' onClick={() => setIsOpen(!isOpen)}><p>05.</p>Contact</a>

        {/* <Link to="/" onClick={() => setIsOpen(!isOpen)}><p>01.</p>About</Link>
        <Link to='/Work' onClick={() => setIsOpen(!isOpen)}><p>02.</p>Work</Link>
        <Link to='/Skills' onClick={() => setIsOpen(!isOpen)}><p>03.</p>Skills</Link>
        <Link to='/Services' onClick={() => setIsOpen(!isOpen)}><p>04.</p>Services</Link>
        <Link to='/Contact' onClick={() => setIsOpen(!isOpen)}><p>05.</p>Contact</Link> */}
      </div>

      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>

    </div>
  );
};