import React from 'react'

// -- pages

import Cards from '../Components/Cards/Cards'
import Header from '../Components/MainHeader/Header'
import AboutPage from './AboutPage'
import Contact from './Contact'

// -- Styles 
import './Styles/HomeStyle.css'

const Home = () => {
  return (
    <>
    <Header/>
    <AboutPage/>
    <Cards/>
    <Contact/>
  
    
    </>
  )
}

export default Home