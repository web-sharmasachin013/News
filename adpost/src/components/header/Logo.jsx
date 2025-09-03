import React from "react";

const Logo = ({ size = "medium", color = "primary", className = "" }) => {
  const logoClasses = `logo ${size} ${color} ${className}`.trim();

  return (
    <div className={logoClasses}>
      <i className="fas fa-store"></i>
      AdMarket
    </div>
  );
};

export default Logo;
