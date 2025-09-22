import React from 'react'
import Products from '../components/Products'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

const NewDrops = () => {
  return (
    <div>
        <Navbar/>
        <section className='text-3xl max-sm:text-xl border-b-2 border-blue-300 font-bold flex justify-center m-2 items-center'> 
        <h1 className='p-2'>New NewDrops</h1>
    </section>
        <section>
            <Products/>
        </section>
        <Footer/>
    </div>
  )
}

export default NewDrops