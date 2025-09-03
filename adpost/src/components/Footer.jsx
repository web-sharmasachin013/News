import React from "react";
import FooterOne from "./FooterOne";
import FooterTwo from "./FooterTwo";
import FooterThree from "./FooterThree";
import FooterFour from "./FooterFour";
import FooterBottom from "./FooterBottom";
const Footer = () => {
  return (
    <>
      {/* Footer Start */}
      <div className="container-fluid bg-dark pt-5 px-sm-3 px-md-5 mt-5">
        <div className="row py-4">
          {/* Get In Touch */}
          <FooterOne />

          {/* Popular News */}
          <FooterTwo />

          {/* Categories */}
          <FooterThree />

          {/* Flickr Photos */}
          <FooterFour />
        </div>
      </div>

      {/* Footer Bottom */}
      <FooterBottom />
      {/* Footer End */}
    </>
  );
};

export default Footer;
