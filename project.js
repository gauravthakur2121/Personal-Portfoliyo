import React from 'react'
import Navbar from '../Navbar'
import Heroimg2 from './Heroimg2'
import PricingCard from './PricingCard'
import Work from './Work'

const Project = () => {
  return (
    <div>
        <Navbar/>
        <Heroimg2 heading="PROJECTS." text="Some of my most recent works"/>
        <Work/>
        <PricingCard/>
    
      
    </div>
  )
}

export default Project
