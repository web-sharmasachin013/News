import React from "react";

const trendingNewsData = [
  {
    id: 1,
    category: "Business",
    date: "Jan 01, 2045",
    title: "Lorem ipsum dolor sit amet elit...",
    imgSrc: "img/news-110x110-1.jpg",
  },
  {
    id: 2,
    category: "Business",
    date: "Jan 01, 2045",
    title: "Lorem ipsum dolor sit amet elit...",
    imgSrc: "img/news-110x110-2.jpg",
  },
  {
    id: 3,
    category: "Business",
    date: "Jan 01, 2045",
    title: "Lorem ipsum dolor sit amet elit...",
    imgSrc: "img/news-110x110-3.jpg",
  },
  {
    id: 4,
    category: "Business",
    date: "Jan 01, 2045",
    title: "Lorem ipsum dolor sit amet elit...",
    imgSrc: "img/news-110x110-4.jpg",
  },
  {
    id: 5,
    category: "Business",
    date: "Jan 01, 2045",
    title: "Lorem ipsum dolor sit amet elit...",
    imgSrc: "img/news-110x110-5.jpg",
  },
];

const TrendingNews = () => {
  return (
    <div className="mb-3">
      <div className="section-title mb-0">
        <h4 className="m-0 text-uppercase font-weight-bold">Trending News</h4>
      </div>
      <div className="bg-white border border-top-0 p-3">
        {trendingNewsData.map((news) => (
          <div
            key={news.id}
            className="d-flex align-items-center bg-white mb-3"
            style={{ height: "110px" }}
          >
            <img className="img-fluid" src={news.imgSrc} alt={news.title} />
            <div className="w-100 h-100 px-3 d-flex flex-column justify-content-center border border-left-0">
              <div className="mb-2">
                <a
                  className="badge badge-primary text-uppercase font-weight-semi-bold p-1 mr-2"
                  href="#"
                >
                  {news.category}
                </a>
                <a className="text-body" href="#">
                  <small>{news.date}</small>
                </a>
              </div>
              <a
                className="h6 m-0 text-secondary text-uppercase font-weight-bold"
                href="#"
              >
                {news.title}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingNews;
