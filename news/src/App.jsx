import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import MainNewsSlider from "./components/MainNewsSlider";
import BreakingNews from "./components/BreakingNews";
import Footer from "./components/Footer";
import BackToTop from "./components/BackToTop";
import FeaturedNewsSlider from "./components/FeaturedNewsSlider";
import NewsWithSidebar from "./components/NewsWithSidebar";
import React from "react";
import "./global";

function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      <MainNewsSlider />
      <BreakingNews />
      <FeaturedNewsSlider />
      <NewsWithSidebar />
      <Footer />

      <BackToTop />
    </>
  );
}

export default App;
