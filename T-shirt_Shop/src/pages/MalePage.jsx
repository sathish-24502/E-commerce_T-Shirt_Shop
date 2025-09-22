import React from 'react'
import Products from '../components/Products'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
// import Collection from '../components/Collection'

const MalePage = () => {
  return (
    <div>
<Navbar/>
{/* <Collection/> */}
        <section className='text-3xl max-sm:text-xl border-b-2 border-blue-300 font-bold flex flex-col justify-center m-2 items-center'> 
<div className='flex justify-center'>
       <img className='w-3/5 h-1/2' src="https://cdn.pixabay.com/photo/2017/06/21/23/10/tshirt-2429016_1280.jpg" alt="Poster" />
  </div>       
        <h1 className='p-2'>Male Collection</h1>
    </section>
        <div>
            <Products/>
        </div>
<Footer/>
    </div>
  )
}

export default MalePage