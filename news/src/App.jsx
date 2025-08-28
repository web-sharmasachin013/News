import { Route, Routes } from "react-router-dom";
import React from "react";
import Home from "./Pages/Home";
import "./global";
import Category from "./Pages/Category";
import Single from "./Pages/Single";
import Contact from "./Pages/Contact";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/category" element={<Category />} />
        <Route path="/single" element={<Single />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
      </Routes>
    </>
  );
}

export default App;
