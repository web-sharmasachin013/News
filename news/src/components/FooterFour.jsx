import React from "react";

const FooterFour = () => {
  return (
    <div className="col-lg-3 col-md-6 mb-5">
      <h5 className="mb-4 text-white text-uppercase font-weight-bold">
        Flickr Photos
      </h5>
      <div className="row">
        {[
          "news-110x110-1.jpg",
          "news-110x110-2.jpg",
          "news-110x110-3.jpg",
          "news-110x110-4.jpg",
          "news-110x110-5.jpg",
          "news-110x110-1.jpg",
        ].map((img, idx) => (
          <div className="col-4 mb-3" key={idx}>
            <a href="">
              <img className="w-100" src={`/img/${img}`} alt="" />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FooterFour;
