import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      alert(`Subscribed with: ${email}`);
      setEmail(""); // clear input
    } else {
      alert("Please enter a valid email.");
    }
  };

  return (
    <div className="mb-3">
      <div className="section-title mb-0">
        <h4 className="m-0 text-uppercase font-weight-bold">Newsletter</h4>
      </div>
      <div className="bg-white text-center border border-top-0 p-3">
        <p>
          Aliqu justo et labore at eirmod justo sea erat diam dolor diam vero
          kasd
        </p>
        <form
          className="input-group mb-2"
          style={{ width: "100%" }}
          onSubmit={handleSubmit}
        >
          <input
            type="email"
            className="form-control form-control-lg"
            placeholder="Your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <div className="input-group-append">
            <button
              type="submit"
              className="btn btn-primary font-weight-bold px-3"
            >
              Sign Up
            </button>
          </div>
        </form>
        <small>Lorem ipsum dolor sit amet elit</small>
      </div>
    </div>
  );
};

export default Newsletter;
