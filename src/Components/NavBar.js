import {
  FaBars,
  FaTimes,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
  FaInstagram,
} from "react-icons/fa";
import { useState } from "react";
import { Link } from 'react-scroll';

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [activeLink, setActiveLink] = useState(null);

  function handleLink(link){
    setActiveLink(link);
  }

  return (
    <>
      {/* responsive nav */}
      <nav className="res-nav-main">
        <div className="res-nav-top">
          <h2>Fiza Hussain</h2>
          {show ? (
            <button onClick={() => setShow(false)} className="bars-icon">
              <FaTimes size={32} color="white" />
            </button>
          ) : (
            <button onClick={() => setShow(true)} className="bars-icon">
              <FaBars size={32} color="white" />
            </button>
          )}
        </div>
        {/* nav-links */}
        {show ? (
          <div>
            <ul className="res-nav-links">
              <Link activeClass="active" to="section1" smooth={true} duration={500}><li>Home</li></Link>
              <Link to="section2" smooth={true} duration={500}><li>About</li></Link>
              <Link to="section3" smooth={true} duration={500}><li>Portfolio</li></Link>
              <Link to="section4" smooth={true} duration={500}><li>Skills</li></Link>
              <Link to="section5" smooth={true} duration={500}><li>Certificates</li></Link>
              <Link to="section6" smooth={true} duration={500}><li>Projects</li></Link>
              <Link to="section7" smooth={true} duration={500}><li>Contact</li></Link>
            </ul>
          </div>
        ) : null}
      </nav>
      {/* navbar */}
      <nav className="nav-main">
        {/* profile */}
        <div>
          <img
            src="./images/profile1.jpg"
            className="profile-img"
            alt="profile-img"
          />
          <h2 style={{ color: "white" }}>Fiza Hussain</h2>
        </div>
        {/* nav-links */}
        <div>
          <ul className="nav-links">
          <Link to="section1" smooth={true} duration={500}><li className={activeLink === 'home' ? 'navActive' : ''} 
          onClick={() => handleLink('home')}>Home</li></Link>
              <Link  to="section2" smooth={true} duration={500}><li className={activeLink === 'about' ? 'navActive' : ''} 
          onClick={() => handleLink('about')}>About</li></Link>
              <Link to="section3" smooth={true} duration={500}><li className={activeLink === 'portfolio' ? 'navActive' : ''} 
          onClick={() => handleLink('portfolio')}>Portfolio</li></Link>
              <Link to="section4" smooth={true} duration={500}><li className={activeLink === 'skills' ? 'navActive' : ''} 
          onClick={() => handleLink('skills')}>Skills</li></Link>
              <Link to="section5" smooth={true} duration={500}><li className={activeLink === 'cert' ? 'navActive' : ''} 
          onClick={() => handleLink('cert')}>Certificates</li></Link>
              <Link to="section6" smooth={true} duration={500}><li className={activeLink === 'project' ? 'navActive' : ''} 
          onClick={() => handleLink('project')}>Projects</li></Link>
              <Link to="section7" smooth={true} duration={500}><li className={activeLink === 'contact' ? 'navActive' : ''} 
          onClick={() => handleLink('contact')}>Contact</li></Link>
          </ul>
        </div>
        {/* social icons */}
        <div style={{ marginBottom: "5%", marginTop:'-10%' }}>
          <ul className="social-icons">
            <li>
              <a href="https://www.instagram.com"><FaInstagram size={25} color="white" /></a>
            </li>
            <li>
              <a href="https://github.com/fiza2001"><FaGithub size={25} color="white" /></a>
            </li>
            <li>
              <a href="https://www.linkedin.com/in/fiza-hussain-327262232/"><FaLinkedin size={25} color="white" /></a>
            </li>
            <li>
              <a href="https://mail.google.com"><FaEnvelope size={25} color="white" /></a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
