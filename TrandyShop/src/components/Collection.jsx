import React from 'react'
import { Link } from 'react-router-dom'

const Collection = () => {
  return (
    <div>
        <section className='flex justify-center max-[320px]:text-sm'>
            <ul className='flex justify-evenly items-center gap-4 p-2 w-1/2 max-sm:w-3/4 border rounded-full font-medium'>
                <Link to={"MaleProduts"} className='cursor-pointer'>Male</Link>
                <Link to={"FemaleProduts"} className='cursor-pointer'>Female</Link>
                <Link to={"NewDrops"} className='cursor-pointer'>New Drops</Link>
            </ul>
        </section>
    </div>
  )
}

export default Collection