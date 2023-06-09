import React from 'react'
import Benefits from '../components/Benefits/Benefits'
import Navbar from '../components/Navbar/Navbar'
import NavContent from '../components/NavContent/NavContent'
import HomeStyle from './homepage.module.css'

const HomePage = () => {
  return (
    <>
       <section >
        <div className="container">
       <NavContent/>
       <Benefits/>
        </div>
       </section>
    </>
  )
}

export default HomePage