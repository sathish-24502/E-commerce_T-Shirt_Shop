import React from 'react'
import Products from '../components/Products'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import Collection from '../components/Collection'


const FemalePage = () => {
  return (
    <div>
        <Navbar/>
        {/* <Collection/> */}
       <section className='text-3xl max-sm:text-xl border-b-2 border-blue-300 font-bold flex justify-center m-2 items-center'> 
        <h1 className='p-2'>Female Collection</h1>
    </section>
        <div>
            <Products/>
        </div>
        <Footer/>
    </div>
  )
}

export default FemalePage