import React from 'react'
import './footer.css';

const Footer = () => {
  return (
    <div>
        <div className='container-fluid mt-3 my-3'>
            <div className='footer-section mt-3'>
                <div className='row'>
                    <div className='col-md-5'>
                    <div className='left-section text-white mt-3'>
                        
                    <i className="bi bi-house-add text-white"> <p >123 Housing Society. India</p></i>
                    <i className="bi bi-telephone-plus"></i>
                    <p>1-2323-343-23</p>
                    <i className="bi bi-envelope-exclamation"></i>
                    <p>Shishodiag12@gmail.com</p>
                    
                    
                



                    </div>
                    </div>
                    <div className='col-md-5'>
                    <div className='right-section text-white mt-3'>
                        <h3>About me</h3>
                        <p> My journey  start as a frontend developer.I am freelancer as a web developer </p>
                        <p>I enjoy discussing new projects and design challenge</p>
                        <div className='logo'>
                        <i className="bi bi-facebook "></i>
                    <i className="bi bi-twitter logo2" ></i>
                    <i className="bi bi-linkedin logo3"></i>
                    <i class="bi bi-instagram logo4"></i>
                    </div>



                    </div>
                    </div>
                </div>

            </div>
        </div>
      
    </div>
  )
}

export default Footer
