import React from 'react';
import Navbar from '../Navbar';
import './Home.css';
import Footer from './footer';
import gaurav from './gaurav.jpeg';
import About from './About';
import { useTypewriter,  } from 'react-simple-typewriter';
import Skills from './Skills';
import Contact from './Contact';
import Project from './project';








const Home = () => {
  const [text] = useTypewriter({
    words: ['Frontend developer..', 'web designer..', 'Ui designer..', 'Ux designer..' , 'Software engineer..'],
    loop:true,
    typeSpeed:10,
    deleteSpeed:10,
    delaySpeed:2000,

  });
  
  return (
    <div>
      <Navbar/>
     <div className='container text-white mt-4 my-3 text-center'>
      <div className='content'>
        <div className='row'>
          <div className='col-md-10'>
            <p>HII I'M A FREELANCER</p>
            <h1>React Developer</h1>
            <button type='submit' className='btn-contact mt-4'>Contact</button>
            <button type='submit' className='btn-project'>Project</button>
          </div>
        </div>


      </div>
     </div>
     <div className='container-fluid mt-3 my-3'>
     <div className='Home-section'>
      <div className='row'>
        
          <div className='col-md-5'>
          <div className="left-section text-white">
            <h2>Hello, It's Me</h2>
            <h1>Gaurav Shishodia</h1>
            <h2> And I'am a <span className='text-warning'>{text}</span></h2>
            <p>I'm a web Designer with extensive Exeperience for Over 2 Year</p>
            <p>exepertise is to create and website design, Frontend Development </p>
            <p>Many More....</p>
            <div className='icons-home '>
            <i class="bi bi-facebook"></i>
            <i class="bi bi-whatsapp"></i>
            <i class="bi bi-instagram"></i>
            <i class="bi bi-twitter"></i>

            </div>
            <button type='submit' className='home-btn'>More About Me</button>
          </div>
          

        </div>
        
        <div className='col-md-5 img-fluid '>
        <div className='right-section'>
          <img src={gaurav} className='img-fluid rounded-circle img-my' alt="" />
         
      </div>
      
          
          
      

        </div>
        

         
      </div>
      </div>

     </div>
     <About/>
     <Skills/>
     <Project/>
    
     <Contact text="Enter the text"/>


     <Footer/>
    
    </div>
  )
}

export default Home
