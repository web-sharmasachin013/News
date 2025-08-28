import React from "react";
import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import MainNewsSlider from "../components/MainNewsSlider";
import BreakingNews from "../components/BreakingNews";
import FeaturedNewsSlider from "../components/FeaturedNewsSlider";
import NewsWithSidebar from "../components/NewsWithSidebar";
import Footer from "../components/Footer";
import BackToTop from "../components/BackToTop";

const Home = () => {
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
};

export default Home;
