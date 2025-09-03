import React from "react";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <header>
      <div className="container">
        <div className="header-content">
          <Logo />
          <SearchBar />
          <NavBar />
        </div>
      </div>
    </header>
  );
};

export default Header;
