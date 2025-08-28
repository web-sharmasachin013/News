import React from "react";

const FooterOne = () => {
  return (
    <div className="col-lg-3 col-md-6 mb-5">
      <h5 className="mb-4 text-white text-uppercase font-weight-bold">
        Get In Touch
      </h5>
      <p className="font-weight-medium">
        <i className="fa fa-map-marker-alt mr-2"></i>123 Street, New York, USA
      </p>
      <p className="font-weight-medium">
        <i className="fa fa-phone-alt mr-2"></i>+012 345 67890
      </p>
      <p className="font-weight-medium">
        <i className="fa fa-envelope mr-2"></i>info@example.com
      </p>
      <h6 className="mt-4 mb-3 text-white text-uppercase font-weight-bold">
        Follow Us
      </h6>
      <div className="d-flex justify-content-start">
        <a className="btn btn-lg btn-secondary btn-lg-square mr-2" href="#">
          <i className="fab fa-twitter"></i>
        </a>
        <a className="btn btn-lg btn-secondary btn-lg-square mr-2" href="#">
          <i className="fab fa-facebook-f"></i>
        </a>
        <a className="btn btn-lg btn-secondary btn-lg-square mr-2" href="#">
          <i className="fab fa-linkedin-in"></i>
        </a>
        <a className="btn btn-lg btn-secondary btn-lg-square mr-2" href="#">
          <i className="fab fa-instagram"></i>
        </a>
        <a className="btn btn-lg btn-secondary btn-lg-square" href="#">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </div>
  );
};

export default FooterOne;
