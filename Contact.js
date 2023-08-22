import React from 'react'
import Navbar from '../Navbar'
import { useState } from 'react';





const Contact = (props) => {
  
  const [text , settext] = useState("");

  function clickupbtn(){
    const newtext = text.toUpperCase()
    settext(newtext)
  }

  const Changebtn = (event)=>{
  
     settext(event.target.value)
    

  }
  function clicklobtn(){
    const newtext = text.toLowerCase()
    settext(newtext)
  }
  function clickcopybtn(){
    const newtext = document.getElementById("my-box");
    newtext.select();
    navigator.clipboard.writeText(newtext.value);
   
  }
  function clickspacebtn(){
    
    let newtext  = text.split(/[ ]+/);
    settext(newtext.join(" " ));

  }

  function clickclearebtn(){
    const newtext =   document.getElementById("my-box").value = "";
    settext(newtext)
   

   
  }
  

  return (
   
    <div>
       
     <Navbar/>
     <div class='container mt-5 my-5'>
      <h1 class='text-center text-warning mt-5 my-3 pt-3'>Contact</h1>
      <div class='row text-white mt-3 py-3'>
        <div class='col-md-5 my-3 mt-3'>
        <div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@Gmail.com"/>
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">Password</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Enter your Email Password"/>
</div>

<div>
<label for="exampleFormControlInput1" class="form-label">Enter the Text</label>
        
<div class="mb-3">
 
  <textarea onChange={Changebtn} value={text} class="form-control" id="my-box" rows="6" col="6">{props.text}</textarea>
</div>

<button onClick={clickupbtn} class='btn-primary my-2 mx-2'>Convert to UpperCase</button>
<button onClick={clicklobtn} class='btn-success my-2 mx-2'>Convert to LowerCase</button>
<button onClick={clickcopybtn} class='btn-danger my-2 mx-2'>Copy Text</button>
<button onClick={clickspacebtn} class='btn-primary my-2 mx-2'>Remove extra Space</button>
<button onClick={clickclearebtn} class='btn-primary my-2 mx-2'>Clear all Text</button>
</div>







        </div>
        

       
        <div className='col-md-5 mt-3 my-3'>
          
        <iframe className='map-1' width="650" height="450" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=center%20point%20Aligarh%20uttar%20pradesh%20india+(Fallbrook%20Art%20Center)&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"><a href="https://www.maps.ie/population/">Population calculator map</a></iframe>
      </div>
      

      </div>
     </div>
     
     </div>

    
  
  )
}

export default Contact
