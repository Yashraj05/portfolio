import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import HeroImg2 from '../Components/HeroImg2'
import Form from '../Components/Form'
import Details from '../Components/Details'

export default function Contact() {
  return (
    <div>
      <Navbar></Navbar>
      <HeroImg2 heading="CONTACT" text="Lets have a chat"></HeroImg2>
      <Details></Details>
      <Form></Form>
      <Footer></Footer>
    </div>
  )
}
