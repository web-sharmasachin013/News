import React from "react";

const navBar = () => {
  return (
    <div className="user-actions">
      <a href="#" className="user-action-link">
        <i className="fas fa-plus"></i> Post Ad
      </a>
      <a href="#" className="user-action-link">
        <i className="fas fa-user"></i> Login
      </a>
    </div>
  );
};

export default navBar;
