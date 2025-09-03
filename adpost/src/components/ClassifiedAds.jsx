import React, { useState } from "react";

const ClassifiedAds = () => {
  const [priceRange, setPriceRange] = useState(5000);
  const [activeCategory, setActiveCategory] = useState("Electronics");
  const [sortOption, setSortOption] = useState("Newest First");

  const categories = [
    { name: "Electronics", icon: "fas fa-mobile-alt" },
    { name: "Furniture", icon: "fas fa-couch" },
    { name: "Fashion", icon: "fas fa-tshirt" },
    { name: "Vehicles", icon: "fas fa-car" },
    { name: "Real Estate", icon: "fas fa-home" },
    { name: "Jobs", icon: "fas fa-laptop" },
    { name: "Pets", icon: "fas fa-paw" },
    { name: "Services", icon: "fas fa-tools" },
  ];

  const conditions = [
    { name: "New", icon: "fas fa-box-open" },
    { name: "Used", icon: "fas fa-exchange-alt" },
    { name: "Refurbished", icon: "fas fa-tools" },
  ];

  const ads = [
    {
      id: 1,
      title: 'MacBook Pro 16" M1 Max',
      price: 2499,
      description:
        "Brand new MacBook Pro with M1 Max chip, 32GB RAM, 1TB SSD. Still in original packaging.",
      location: "New York",
      posted: "2 days ago",
      image:
        "https://images.unsplash.com/photo-1609081219090-a6d81d3085bf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1026&q=80",
      category: "Electronics",
    },
    {
      id: 2,
      title: "iPhone 13 Pro Max 256GB",
      price: 1099,
      description:
        "Like new iPhone 13 Pro Max. No scratches, always used with case and screen protector.",
      location: "Los Angeles",
      posted: "1 day ago",
      image:
        "https://images.unsplash.com/photo-1616348436168-de43ad0db179?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1081&q=80",
      category: "Electronics",
    },
    {
      id: 3,
      title: "Apple Watch Series 7",
      price: 329,
      description:
        "Apple Watch Series 7 GPS + Cellular, 45mm. Excellent condition with original box.",
      location: "Chicago",
      posted: "3 days ago",
      image:
        "https://images.unsplash.com/photo-1546868871-7041f2a55e12?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
      category: "Electronics",
    },
    {
      id: 4,
      title: "Sony WH-1000XM4 Headphones",
      price: 249,
      description:
        "Industry-leading noise canceling with premium sound. Includes carrying case.",
      location: "Miami",
      posted: "5 days ago",
      image:
        "https://images.unsplash.com/photo-1583394838336-acd977736f90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "Electronics",
    },
    {
      id: 5,
      title: "Canon EOS R5 Mirrorless Camera",
      price: 3299,
      description:
        "Professional mirrorless camera with 45MP full-frame sensor. Low shutter count.",
      location: "Seattle",
      posted: "1 week ago",
      image:
        "https://images.unsplash.com/photo-1530893609608-32a9af3aa95c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1064&q=80",
      category: "Electronics",
    },
    {
      id: 6,
      title: "PlayStation 5 Digital Edition",
      price: 449,
      description:
        "PS5 Digital Edition with two controllers and charging station. Like new condition.",
      location: "Austin",
      posted: "4 days ago",
      image:
        "https://images.unsplash.com/photo-1558442074-3c19857bc1dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      category: "Electronics",
    },
  ];

  const handlePriceChange = (e) => {
    setPriceRange(e.target.value);
  };

  const handleCategoryClick = (category) => {
    setActiveCategory(category);
  };

  const handleSortChange = (e) => {
    setSortOption(e.target.value);
  };

  const handleApplyFilters = () => {
    // In a real app, this would apply the filters to the ads
    console.log("Filters applied:", { priceRange, activeCategory, sortOption });
  };

  const handleResetFilters = () => {
    setPriceRange(5000);
    setActiveCategory("Electronics");
    setSortOption("Newest First");
  };

  return (
    <div className="container">
      <div className="main-content">
        {/* Filter Sidebar */}
        <aside className="filter-sidebar">
          <h2>Filters</h2>

          <div className="filter-group">
            <h3>Categories</h3>
            <ul className="category-list">
              {categories.map((category) => (
                <li key={category.name}>
                  <a
                    href="#"
                    className={activeCategory === category.name ? "active" : ""}
                    onClick={(e) => {
                      e.preventDefault();
                      handleCategoryClick(category.name);
                    }}
                  >
                    <i className={category.icon}></i> {category.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="filter-group">
            <h3>Price Range</h3>
            <div className="price-filter">
              <input
                type="range"
                min="0"
                max="10000"
                value={priceRange}
                className="slider"
                onChange={handlePriceChange}
              />
              <div className="price-values">
                <span>$0</span>
                <span>${priceRange}</span>
                <span>$10,000+</span>
              </div>
            </div>
          </div>

          <div className="filter-group">
            <h3>Condition</h3>
            <ul className="category-list">
              {conditions.map((condition) => (
                <li key={condition.name}>
                  <a href="#">
                    <i className={condition.icon}></i> {condition.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="filter-buttons">
            <button className="apply-btn" onClick={handleApplyFilters}>
              Apply Filters
            </button>
            <button className="reset-btn" onClick={handleResetFilters}>
              Reset
            </button>
          </div>
        </aside>

        {/* Ads Container */}
        <div className="ads-container">
          <div className="ads-header">
            <h2>{activeCategory} Ads</h2>
            <div className="sort-options">
              <select value={sortOption} onChange={handleSortChange}>
                <option>Newest First</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Most Popular</option>
              </select>
            </div>
          </div>

          <div className="ads-grid">
            {ads.map((ad) => (
              <div className="ad-card" key={ad.id}>
                <div className="ad-image">
                  <img src={ad.image} alt={ad.title} />
                  <div className="ad-category">{ad.category}</div>
                </div>
                <div className="ad-details">
                  <h3 className="ad-title">{ad.title}</h3>
                  <div className="ad-price">${ad.price.toLocaleString()}</div>
                  <p className="ad-description">{ad.description}</p>
                  <div className="ad-meta">
                    <span>
                      <i className="fas fa-map-marker-alt"></i> {ad.location}
                    </span>
                    <span>
                      <i className="far fa-clock"></i> {ad.posted}
                    </span>
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

export default ClassifiedAds;
