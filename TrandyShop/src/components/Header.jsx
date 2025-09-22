import React from "react";

const Header = () => {
  return (
    <div className="border-t-2 p-1">
      <section className="mx-4">
        <p className="text-gray-400 text-sm">
          We’re running an exclusive T-shirt Sale with trendy styles at
          unbeatable prices. Enjoy up to 50% OFF on selected collections with
          fresh new designs. Premium cotton tees for comfort + durability at
          budget-friendly rates. Special offers like Buy 2 Get 1 Free to
          maximize savings. Hurry! Limited stock available – shop your favorite
          look today.
        </p>

        <ul className="grid gap-2 max-[320px]:gap-0 max-[320px]:grid-cols-2 grid-cols-5 max-sm:grid-cols-4 list-disc items-center mx-4">
          <li className="text-sm text-blue-300 hover:text-blue-500 hover:underline p-1">
            ThreadHive
          </li>
          <li className="text-sm text-blue-300 hover:text-blue-500 hover:underline p-1">
            CottonCloud
          </li>
          <li className="text-sm text-blue-300 hover:text-blue-500 hover:underline p-1">
            UrbanWear
          </li>
          <li className="text-sm text-blue-300 hover:text-blue-500 hover:underline p-1">
            TeeVibe
          </li>
          <li className="text-sm text-blue-300 hover:text-blue-500 hover:underline p-1">
            FreshThreads
          </li>
          <li className="text-sm text-blue-300 hover:text-blue-500 hover:underline p-1">
            ChicCotton
          </li>
          <li className="text-sm text-blue-300 hover:text-blue-500 hover:underline p-1">
            PrintPulse
          </li>
          <li className="text-sm text-blue-300 hover:text-blue-500 hover:underline p-1">
            ClassicTeeCo
          </li>
          <li className="text-sm text-blue-300 hover:text-blue-500 hover:underline p-1">
            TrendTops
          </li>
          <li className="text-sm text-blue-300 hover:text-blue-500 hover:underline p-1">
            BoldStitch
          </li>
        </ul>
      </section>
      <section>
        <img
          src="https://static.vecteezy.com/system/resources/previews/011/871/820/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg"
          alt=""
        />
      </section>
    </div>
  );
};

export default Header;
