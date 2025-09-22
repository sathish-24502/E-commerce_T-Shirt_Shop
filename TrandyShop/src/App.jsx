import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import MalePage from "./pages/MalePage";
import FemalePage from "./pages/FemalePage";
import NewDrops from "./pages/NewDrops";
import ProductData from "./pages/ProductData";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

const App = () => {
  return (
    <BrowserRouter>
      {/* <SignupPage/> */}
      {/* <LoginPage/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/NewDrops" element={<NewDrops />} />
        <Route path="/MaleProduts" element={<MalePage />} />
        <Route path="/FemaleProduts" element={<FemalePage />} />
        <Route path="/product/:id" element={<ProductData />} />
        <Route path="/loginpage" element={<LoginPage />} />
        <Route path="/signuppage" element={<SignupPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
