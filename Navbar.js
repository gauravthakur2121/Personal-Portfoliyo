import React from 'react'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div>
     <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
     <div class="container-fluid">
    <a class="navbar-brand" href="/" >Gaurav's Portfolio</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/skills">Skills</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link active" to="/projects">projects</Link>
        </li>
        
      </ul>
     
    </div>
  </div>
</nav>
    </div>
  )
  
}

export default Navbar
