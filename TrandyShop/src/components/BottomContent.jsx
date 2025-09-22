import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'

const BottomContent = () => {
  return (
    <div>
     {/* <section>
       <div className='flex gap-4 justify-end border bg-[#653131]'>
        <img className='rounded-lg w-2/6 h-1/2 max-sm:w-96 max-sm:h-80 shadow-xl' src={`https://static.wixstatic.com/media/c837a6_9359210da13b4ad5b6c62faf5c369b6b~mv2.jpg/v1/fill/w_298,h_396,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_9359210da13b4ad5b6c62faf5c369b6b~mv2.jpg`} alt="" />
        <img className='rounded-lg w-2/6 h-1/2 max-sm:w-96 max-sm:h-80 shadow-xl' src={`https://muselot.in/cdn/shop/products/Melange-grey-plain-women_s-t-shirt-online-in-100_-cotton_-round-neck-and-half-sleeves---MUSELOT_600x600.progressive.jpg?v=1658093693`} alt="" />
        <img className='rounded-lg w-3/4 max-sm:w-96 max-sm:h-80 shadow-xl' src={`https://wallpaperaccess.com/thumb/9394628.jpg`} alt="" />
     
     </div>
     <div>
      
     </div>
     </section> */}
        <section className='flex flex-col-reverse gap-2 justify-center items-center p-4'>
            <button className='text-xl max-sm:text-sm font-semibold rounded-xl border p-2 hover:bg-[#acf00b] hover:text-black bg-black text-white'>Shop Now</button>
       <div className='flex items-center justify-center gap-10 max-[320px]:gap-4'>
        <FaArrowRight size={28} className='max-sm:size-6 max-[320px]:size-4 animate-ping scale-y-50'/>
         <p className='text-3xl max-[320px]:text-sm max-sm:text-lg font-medium hover:underline hover:scale-110'>GET 50% OFF YOUR FIRST ORDER</p>
         <FaArrowLeft size={28} className='max-sm:size-6 max-[320px]:size-4 animate-ping scale-y-50'/>
       </div>

        </section>
    </div>
  )
}

export default BottomContent