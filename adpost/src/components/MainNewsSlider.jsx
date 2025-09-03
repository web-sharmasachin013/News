import { useEffect } from "react";

const MainNewsSlider = () => {
  useEffect(() => {
    $(".main-carousel").owlCarousel({
      autoplay: true,
      smartSpeed: 1500,
      items: 1,
      dots: true,
      loop: true,
      center: true,
    });
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        {/* Left Large Slider */}
        <div className="col-lg-7 px-0">
          <div className="owl-carousel main-carousel position-relative">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="position-relative overflow-hidden"
                style={{ height: "500px" }}
              >
                <img
                  className="img-fluid h-100"
                  src={`/img/news-800x500-${i}.jpg`}
                  style={{ objectFit: "cover" }}
                  alt={`News ${i}`}
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
                      Jan 01, 2045
                    </a>
                  </div>
                  <a
                    className="h2 m-0 text-white text-uppercase font-weight-bold"
                    href="#"
                  >
                    Lorem ipsum dolor sit amet elit. Proin vitae porta diam...
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right Small Grid */}
        <div className="col-lg-5 px-0">
          <div className="row mx-0">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="col-md-6 px-0">
                <div
                  className="position-relative overflow-hidden"
                  style={{ height: "250px" }}
                >
                  <img
                    className="img-fluid w-100 h-100"
                    src={`/img/news-700x435-${i}.jpg`}
                    style={{ objectFit: "cover" }}
                    alt={`Small News ${i}`}
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
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainNewsSlider;
