import React from 'react'
import gaurav from './gaurav.jpeg';
import Navbar from '../Navbar';
import { useTypewriter,  } from 'react-simple-typewriter';
import Heroimg2 from './Heroimg2';





const About = () => {
  const [text] = useTypewriter({
    words: ['Frontend developer', 'web designer', 'Ui designer', 'Ux designer' , 'Fullstack developer'],
    loop:true,
    typeSpeed:10,
    deleteSpeed:10,
    delaySpeed:1000,

  });
  
  
  return (
  
    
    <div>
        
      <Navbar/>
      <Heroimg2 heading="About Me." text="Iam a Frontend  web-Developer"/>
      
      <div className='container-fluid mt-5 my-3 text-white'>
        <div className='row'>
          <div className='col-md-5'>
            <div className='left-section mt-3 my-2'>
            <img src={gaurav} className='img-fluid rounded-circle img-my' alt="" />
         


            </div>

          
    </div>

    <div className='col-md-5'>
      <div className='right-section2 mt-3 my-2'>
        <h1>About Me</h1>
        <h3 className='mt-2 ' ><span className='text-primary'> a {text}</span></h3>

        <p>I am a skilled web Designer  with Over 1 year Exeperience in the Indestry. My Passion  <br/> Creating responsive Website design and implementing
         Frontend Development <br/> take pride in staying up-to-date with current design treand and lovering my creativity <br/> produce
         visually appering and user-friendly website. throughout my Carrier I have.<br/> deep understanding of user Exeperience(Ux) and user
         interface(Ui) prienciple <br/> By putting myself in the shoes of the end users. I strive to create Initiative seamies <br/>browsing exepences
         I believe that a web design website should not look visually <br/>appeling but also provide a smooth and enjoyable the target audience's and client 
         <br/>requriments. This enables me to talor my designs to meet their expectations and deliever  <br/>unique online presence that aligns with their brand identity...</p>
         <button type='submit' className='home-btn'>More About Me</button>
      </div>
      
          
          

    </div>
    </div>
    </div>
   
    </div>
  )
}


export default About
