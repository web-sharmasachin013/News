import Topbar from "../components/Topbar";
import Navbar from "../components/Navbar";
import FollowUs from "../components/FollowUs";
import Newsletter from "../components/Newsletter";
import React, { useState } from "react";
import Footer from "../components/Footer";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // You can add API call here
  };
  return (
    <>
      <Topbar />
      <Navbar />
      <div className="container-fluid mt-5 pt-3">
        <div className="container">
          <div className="row">
            <div className="col-lg-8">
              <div className="section-title mb-0">
                <h4 className="m-0 text-uppercase font-weight-bold">
                  Contact Us For Any Queries
                </h4>
              </div>
              <div className="bg-white border border-top-0 p-4 mb-3">
                <div className="mb-4">
                  <h6 className="text-uppercase font-weight-bold">
                    Contact Info
                  </h6>
                  <p className="mb-4">
                    The contact form is currently inactive. Get a functional and
                    working contact form with Ajax &amp; PHP in a few minutes.
                    Just copy and paste the files, add a little code and you're
                    done.{" "}
                    <a href="https://htmlcodex.com/contact-form">
                      Download Now
                    </a>
                    .
                  </p>
                  <div className="mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <i className="fa fa-map-marker-alt text-primary mr-2"></i>
                      <h6 className="font-weight-bold mb-0">Our Office</h6>
                    </div>
                    <p className="m-0">123 Street, New York, USA</p>
                  </div>
                  <div className="mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <i className="fa fa-envelope-open text-primary mr-2"></i>
                      <h6 className="font-weight-bold mb-0">Email Us</h6>
                    </div>
                    <p className="m-0">info@example.com</p>
                  </div>
                  <div className="mb-3">
                    <div className="d-flex align-items-center mb-2">
                      <i className="fa fa-phone-alt text-primary mr-2"></i>
                      <h6 className="font-weight-bold mb-0">Call Us</h6>
                    </div>
                    <p className="m-0">+012 345 6789</p>
                  </div>
                </div>
                <h6 className="text-uppercase font-weight-bold mb-3">
                  Contact Us
                </h6>
                <form onSubmit={handleSubmit}>
                  <div className="form-row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          name="name"
                          className="form-control p-4"
                          placeholder="Your Name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          name="email"
                          className="form-control p-4"
                          placeholder="Your Email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                        />
                      </div>
                    </div>
                  </div>

                  <div className="form-group">
                    <input
                      type="text"
                      name="subject"
                      className="form-control p-4"
                      placeholder="Subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="form-group">
                    <textarea
                      name="message"
                      className="form-control"
                      rows="4"
                      placeholder="Message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                    />
                  </div>

                  <div>
                    <button
                      className="btn btn-primary font-weight-semi-bold px-4"
                      style={{ height: "50px" }}
                      type="submit"
                    >
                      Send Message
                    </button>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-lg-4">
              <FollowUs />
              <Newsletter />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
};

export default Contact;
