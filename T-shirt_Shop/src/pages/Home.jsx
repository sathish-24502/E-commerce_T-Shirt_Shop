import React from 'react'
import Navbar from '../components/Navbar'
import Header from '../components/Header'
import Collection from '../components/Collection'
import Products from '../components/Products'
import BottomContent from '../components/BottomContent'
import Footer from '../components/Footer'

const Home = () => {

  
  return (

    <div>
        <Navbar />
         <Collection />
        <Header />
        <Products/>
      <BottomContent/>
      <Footer/>
       
    </div>

  )
}

export default Home