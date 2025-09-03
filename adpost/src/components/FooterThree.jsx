import React from "react";
import { useSyncExternalStore } from "react";

const FooterThree = () => {
  return (
    <div className="col-lg-3 col-md-6 mb-5">
      <h5 className="mb-4 text-white text-uppercase font-weight-bold">
        Categories
      </h5>
      <div className="m-n1">
        {[
          "Politics",
          "Business",
          "Corporate",
          "Business",
          "Health",
          "Education",
          "Science",
          "Business",
          "Foods",
          "Entertainment",
          "Travel",
          "Lifestyle",
          "Politics",
          "Business",
          "Corporate",
          "Business",
          "Health",
          "Education",
          "Science",
          "Business",
          "Foods",
        ].map((cat, idx) => (
          <a key={idx} href="" className="btn btn-sm btn-secondary m-1">
            {cat}
          </a>
        ))}
      </div>
    </div>
  );
};

export default FooterThree;
