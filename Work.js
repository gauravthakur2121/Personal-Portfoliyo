import React from 'react'
import "./Card.css";
import Card from './Card';
import WorkCardData from "./WorkCardData";

const Work = () => {
  return (
    <div>
        <div className='work-container text-white'>
            <h1 className='project-heading'>Projects</h1>
            <div className='project-container'>
                {WorkCardData.map((val , ind)=>{
                    return(
                        <Card
                        key={ind}
                        imgsrc={val.imgsrc}
                            title={val.title}
                            Text={val.Text}
                            view={val.view}
                            />
                    )
                })}
               
            </div>
        </div>
      
    </div>
  )
}

export default Work