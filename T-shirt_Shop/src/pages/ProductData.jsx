import React from "react";
import { FaMinus, FaPlus, FaRupeeSign } from "react-icons/fa";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import Footer from "../components/Footer";
import { useState, useEffect } from "react";
import NewDropDatas from "../datas/NewDropData";
import { useParams } from "react-router-dom";
// import Collection from "../components/Collection";

const ProductData = () => {
  const { id } = useParams();
  const [Value, SetValue] = useState(1);
  const [Para, SetPara] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  const [products, setProducts] = useState([]);

  //     useEffect(()=>{
  //     setProducts(NewDropDatas)
  // },[])

  useEffect(() => {
    const foundProduct = NewDropDatas.find(
      (item) => String(item.id) === String(id)
    );
    setProducts(foundProduct); // set null if not found
  }, [id]);

  // useEffect(() => {
  //   // find product from local data
  //   const foundProduct = (NewDropDatas)
  //   setProducts(foundProduct);
  // }, [id]);

  if (!products) return <h2>Product not found</h2>;

  //Increment function
  function HandleClickPlus() {
    SetValue(Value + 1);
  }
  //Decrement function
  function HandleClickMinus() {
    SetValue(Value - 1);
    if (Value == 1) {
      SetValue(Value);
    }
  }
  console.log(products);

  //Expanded Descreption
  const Descreption = `Describe your product clearly
            and concisely. Use unique keywords. Write your own description
            instead of using manufacturers' copy.`;

  //Expanded function
  function HandleClickMaxmum() {
    setIsExpanded(Descreption);

    SetPara(!Para);
    //
    if (Para !== false) {
      setIsExpanded(false);
    }
  }
  return (
    <div className="container">
      <div>
        <Navbar />
      </div>

      <section className="flex max-[320px]:flex-col">
        <div className="p-4 w-1/2 max-sm:w-screen h-full flex justify-end max-[320px]:justify-center">
          <img className="max-sm:w-32" src={products.image} alt="" />
        </div>
        <div className="w-1/2 max-[320px]:w-screen h-full flex flex-col justify-start max-[320px]:mx-20 mt-10 max-[320px]:mt-0 gap-2 max-sm:gap-1">
          <h1 className="text-2xl max-sm:text-[18px] font-semibold">
            I'm a Product
          </h1>
          <h3 className="flex items-center text-lg max-sm:text-sm">
            <FaRupeeSign />
            200
          </h3>
          <div className="text-sm w-96 max-sm:w-60 max-[320px]:w-52">
            I'm a product description. This is a great place to "sell" your
            product and grab buyers' attention.
            <p> {isExpanded}</p>
            <span
              onClick={HandleClickMaxmum}
              className="text-gray-400 underline cursor-pointer"
            >
              {Para ? "Less" : "More"}
            </span>
          </div>
          <div>
            <span className="text-lg max-sm:text-[15px] font-medium">
              Size :
            </span>
            <ul className="flex border w-72 max-sm:w-52 max-[320px]:w-44 justify-evenly mx-4 mt-2">
              <li className="items-center cursor-pointer flex gap-1 justify-center">
                <input type="radio" className=" cursor-pointer" />S
              </li>
              <li className="items-center cursor-pointer flex gap-1 justify-center">
                <input type="radio" className=" cursor-pointer" />M
              </li>
              <li className="items-center cursor-pointer flex gap-1 justify-center">
                <input type="radio" className=" cursor-pointer" />L
              </li>
              <li className="items-center cursor-pointer flex gap-1 justify-center">
                <input type="radio" className=" cursor-pointer" />
                XL
              </li>
              <li className="items-center cursor-pointer  flex gap-1 justify-center">
                <input type="radio" className=" cursor-pointer" />
                XXL
              </li>
            </ul>
          </div>
          <div>
            <span className="text-lg max-sm:text-[15px] font-medium">
              Quantiy :
            </span>
            <ul className="w-60 max-sm:w-52 max-[320px]:w-44 border flex justify-between items-center mx-4 mt-2">
              <li onClick={HandleClickMinus} className="border cursor-pointer p-1">
                <FaMinus />
              </li>
              <span>{Value}</span>
              <li onClick={HandleClickPlus} className="border cursor-pointer p-1">
                <FaPlus />
              </li>
            </ul>
          </div>
          <div className="border cursor-pointer w-80 max-sm:w-44 flex justify-center p-2 mx-4 my-4 text-black font-medium bg-[#acf00b]">
            <button>Add Cart</button>
          </div>
          <div className="border cursor-pointer w-80 max-sm:w-44 flex justify-center p-2 mx-4 bg-[#df1414] text-white font-medium hover:bg-[#2af00b] hover:text-black">
            <button>Buy Now</button>
          </div>
        </div>
      </section>

      <div>
        {/* <Products/> */}
        <Footer />
      </div>
    </div>
  );
};

export default ProductData;
