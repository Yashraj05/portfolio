import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroImg2 from '../Components/HeroImg2'
import Work from '../Components/Work'

const Project = () => {
  return (
    <div>
      <Navbar></Navbar>
      <HeroImg2 heading="PROJECTS" text='Some of my recent works '></HeroImg2>
      <Work></Work>
      <Footer></Footer>
    </div>
  )
}
export default Project;
