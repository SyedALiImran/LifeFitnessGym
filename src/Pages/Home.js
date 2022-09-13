import React from 'react'

// -- pages

// import Cards from '../Components/Cards/Cards'
import Header from '../Components/MainHeader/Header'
import AboutPage from './AboutPage'

// -- Styles 
import './Styles/HomeStyle.css'

const Home = () => {
  return (
    <>
    <Header/>
    <AboutPage/>
    {/* <Cards/> */}
    </>
  )
}

export default Home