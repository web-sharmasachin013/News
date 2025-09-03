import React from "react";

const tags = [
  "Politics",
  "Business",
  "Corporate",
  "Business",
  "Health",
  "Education",
  "Science",
  "Business",
  "Foods",
  "Travel",
];

const Tags = () => {
  return (
    <div className="mb-3">
      <div className="section-title mb-0">
        <h4 className="m-0 text-uppercase font-weight-bold">Tags</h4>
      </div>
      <div className="bg-white border border-top-0 p-3">
        <div className="d-flex flex-wrap m-n1">
          {tags.map((tag, index) => (
            <a
              key={index}
              href="#"
              className="btn btn-sm btn-outline-secondary m-1"
            >
              {tag}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tags;
