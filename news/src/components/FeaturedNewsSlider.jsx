import React, { useEffect } from "react";

const FeaturedNewsSlider = () => {
  useEffect(() => {
    if (window.$) {
      window.$(".news-carousel").owlCarousel({
        autoplay: true,
        loop: true,
        margin: 10,
        nav: true,
        navText: [
          '<i class="fa fa-angle-left"></i>',
          '<i class="fa fa-angle-right"></i>',
        ],
        responsive: {
          0: { items: 1 },
          600: { items: 2 },
          1000: { items: 3 },
        },
      });
    }
  }, []);

  const slides = [
    { img: "/img/news-700x435-1.jpg" },
    { img: "/img/news-700x435-2.jpg" },
    { img: "/img/news-700x435-3.jpg" },
    { img: "/img/news-700x435-4.jpg" },
    { img: "/img/news-700x435-5.jpg" },
  ];

  return (
    <div className="container-fluid pt-5 mb-3">
      <div className="container">
        <div className="section-title">
          <h4 className="m-0 text-uppercase font-weight-bold">Featured News</h4>
        </div>
        <div className="owl-carousel news-carousel carousel-item-4 position-relative">
          {slides.map((slide, index) => (
            <div
              key={index}
              className="position-relative overflow-hidden"
              style={{ height: "300px" }}
            >
              <img
                className="img-fluid h-100"
                src={slide.img}
                style={{ objectFit: "cover" }}
                alt={`Featured ${index + 1}`}
              />
              <div className="overlay">
                <div className="mb-2">
                  <a
                    className="badge badge-primary text-uppercase font-weight-semi-bold p-2 mr-2"
                    href="#"
                  >
                    Business
                  </a>
                  <a className="text-white" href="#">
                    <small>Jan 01, 2045</small>
                  </a>
                </div>
                <a
                  className="h6 m-0 text-white text-uppercase font-weight-semi-bold"
                  href="#"
                >
                  Lorem ipsum dolor sit amet elit...
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedNewsSlider;
