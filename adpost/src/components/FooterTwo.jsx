import React from "react";

const FooterTwo = () => {
  return (
    <div className="col-lg-3 col-md-6 mb-5">
      <h5 className="mb-4 text-white text-uppercase font-weight-bold">
        Popular News
      </h5>
      {["Business", "Business", "Business"].map((category, idx) => (
        <div className="mb-3" key={idx}>
          <div className="mb-2">
            <a
              className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2"
              href=""
            >
              {category}
            </a>
            <a className="text-body" href="">
              <small>Jan 01, 2045</small>
            </a>
          </div>
          <a
            className="small text-body text-uppercase font-weight-medium"
            href=""
          >
            Lorem ipsum dolor sit amet elit. Proin vitae porta diam...
          </a>
        </div>
      ))}
    </div>
  );
};

export default FooterTwo;
