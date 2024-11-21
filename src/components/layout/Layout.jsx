import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../ui/Header";
import Footer from "../ui/Footer";

function Layout() {
  return (
    <div className="flex flex-col min-h-screen bg-[#E1E5DC]">
      <Header />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
