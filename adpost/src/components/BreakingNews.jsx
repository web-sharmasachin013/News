import React, { useEffect } from "react";

const BreakingNews = () => {
  useEffect(() => {
    // Check if jQuery and owlCarousel are available

    $(".tranding-carousel").owlCarousel({
      autoplay: true,
      smartSpeed: 2000,
      items: 1,
      dots: false,
      loop: true,
      nav: true,
      navText: [
        '<i class="fa fa-angle-left"></i>',
        '<i class="fa fa-angle-right"></i>',
      ],
    });
  }, []);

  const newsItems = [
    "Lorem ipsum dolor sit amet elit. Proin interdum lacus eget ante tincidunt, sed faucibus nisl sodales",
    "Lorem ipsum dolor sit amet elit. Proin interdum lacus eget ante tincidunt, sed faucibus nisl sodales",
  ];

  return (
    <div className="container-fluid bg-dark py-3 mb-3">
      <div className="container">
        <div className="row align-items-center bg-dark">
          <div className="col-12">
            <div className="d-flex justify-content-between">
              <div
                className="bg-primary text-dark text-center font-weight-medium py-2"
                style={{ width: "170px" }}
              >
                Breaking News
              </div>
              <div
                className="owl-carousel tranding-carousel position-relative d-inline-flex align-items-center ml-3"
                style={{ width: "calc(100% - 170px)", paddingRight: "90px" }}
              >
                {newsItems.map((item, index) => (
                  <div key={index} className="text-truncate">
                    <a
                      href="#"
                      className="text-white text-uppercase font-weight-semi-bold"
                    >
                      {item}
                    </a>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BreakingNews;
