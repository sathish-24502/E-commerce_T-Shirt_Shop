import React from 'react'
import { useState , useEffect } from 'react'
import NewDropDatas from "../datas/NewDropData"
import { FaRupeeSign } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Products = () => {
     const [products, setProducts] = useState([]);
useEffect(()=>{
    setProducts(NewDropDatas)
},[])
//     useEffect(() => {
//     fetch("https://dummyjson.com/products")
//       .then((res) => res.json())
//       .then((data) => setProducts(data.products)) // store products in state
//       .catch((err) => console.error("Error fetching products:", err));
//   }, []);
  console.log(products);
  return (
//      <div className='flex flex-col justify-center items-center'>
//         <h1 className='text-xl font-bold flex justify-center'>Products</h1>
//          <div className='grid grid-cols-4 max-md:grid-cols-2 max-sm:grid-cols-1 gap-4'>
           
//   {products.map((item) => (
//           <div key={item.id} className="border rounded-lg p-4 shadow w-80 flex flex-col justify-center items-center">
//             <img
//               src="https://static.wixstatic.com/media/c837a6_f8d49ec34c8a4f95890362cc7a53f89b~mv2.jpg/v1/fill/w_345,h_460,al_c,q_80,usm_0.66_1.00_0.01,enc_avif,quality_auto/c837a6_f8d49ec34c8a4f95890362cc7a53f89b~mv2.jpg"
//               alt="Image"
//               className="w-full h-40 object-contain mb-3"
//             />
//             <h2 className="font-semibold">{item.title}</h2>
//             <p className="text-gray-600">${item.price}</p>
//           </div>
//         ))}
//     </div>
//      </div>
<div>
    
<div className='grid gap-4 m-4 grid-cols-4 max-sm:grid-cols-1 max-md:grid-cols-2 max-lg:grid-cols-3 max-xl:grid-cols-4'>
    
{products.map((collection , index)=>(
   <div  key={collection.id ?? index}>
    <Link to={`/product/${collection.id ?? index}`} className='flex flex-col items-center border-2 rounded-md p-2 gap-2 shadow-md '>
    <img width={200} src={collection.image} alt="" className='hover:scale-105 rounded-xl max-[320px]:w-32' />
     <b>{collection.name}</b>
     <div className='flex items-center'>
        <FaRupeeSign/>
        <p>{collection.price}</p>
     </div>
   </Link>
   </div>

))}
</div>
</div>
    
  )
}

export default Products