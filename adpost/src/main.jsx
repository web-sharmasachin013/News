import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "typeface-montserrat";
import "@fortawesome/fontawesome-free/css/all.min.css";
import "owl.carousel/dist/assets/owl.carousel.css"; // Owl CSS
import "owl.carousel";
import "../public/css/style.css";
import "@fortawesome/fontawesome-free/css/all.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
