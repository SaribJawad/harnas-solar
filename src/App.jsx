import React from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import HomePage from "./pages/HomePage";
import AboutUsPage from "./pages/AboutUsPage";
import ContactUsPage from "./pages/ContactUsPage";
import { Scrollbars } from "react-custom-scrollbars-2";
import ModelDisplayPage from "./pages/ModelDisplayPage";
import CartPage from "./pages/CartPage";

function App() {
  return (
    <Scrollbars autoHeight autoHeightMin={0} autoHeightMax={"100vh"} universal>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path="/about_us" element={<AboutUsPage />} />
          <Route path="/contact_us" element={<ContactUsPage />} />
          <Route path="/cart" element={<CartPage />} />
        </Route>
        <Route path="/model-display" element={<ModelDisplayPage />} />
      </Routes>
    </Scrollbars>
  );
}

export default App;
