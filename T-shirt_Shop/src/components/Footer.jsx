import React from "react";

const Footer = () => {
  const contectData = {
    name: "StoreName",
    email: "abc@gmail.com",
    phone: "122-554-824",
  };

  return (
    <div className="bg-[#FCD508] w-screen mt-4">
      <div className="flex max-[320px]:flex-col max-[375px]:flex-col border p-4 ">
        <section className="w-2/5 flex justify-center max-[320px]:mx-20   max-[320px]:mb-4 flex-col items-center text-lg max-sm:text-md">
          <h1 className="font-semibold ">{contectData.name}</h1>
          <p className="font-medium ">{contectData.email}</p>
          <p className="font-medium ">{contectData.phone}</p>
        </section>
        <section className="flex gap-10 items-center justify-evenly w-3/5 max-sm:text-sm">
          <ul className="flex flex-col gap-1">
            <b>Shop</b>
            <li className="text-gray-400 hover:text-black hover:underline ">
              New Drops
            </li>
            <li className="text-gray-400 hover:text-black hover:underline ">
              Men
            </li>
            <li className="text-gray-400 hover:text-black hover:underline ">
              Female
            </li>
          </ul>
          <ul className="flex flex-col gap-1">
            <b>Our Store</b>
            <li className="text-gray-400 hover:text-black hover:underline ">
              About
            </li>
            <li className="text-gray-400 hover:text-black hover:underline ">
              Subscribe
            </li>
            <li className="text-gray-400 hover:text-black hover:underline ">
              FAQ
            </li>
          </ul>
          <ul className="flex flex-col gap-1">
            <b>Terms & Conditions</b>
            <li className="text-gray-400 hover:text-black hover:underline ">
              Store Policy
            </li>
            <li className="text-gray-400 hover:text-black hover:underline ">
              Shipping & Returns
            </li>
            <li className="text-gray-400 hover:text-black hover:underline ">
              Payment Methods
            </li>
          </ul>
        </section>
      </div>
      <div className="p-2 flex justify-center items-center font-medium max-sm:text-sm">
        <p>&copy;2025 By E-commerce T-Shirt shop</p>
      </div>
    </div>
  );
};

export default Footer;
