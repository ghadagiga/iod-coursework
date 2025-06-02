import React, { useState } from "react";
import { useNavigate, Outlet } from "react-router-dom";
import { cards } from "../component/cards.jsx"; // Make sure it's a named export
import "../App.css";

function HomePage() {
  const navigate = useNavigate();
  const [startIndex, setStartIndex] = useState(0);
  const cardsPerPage = 3;

  const handleNext = () => {
    setStartIndex((prevIndex) =>
      prevIndex + cardsPerPage >= cards.length ? 0 : prevIndex + cardsPerPage
    );
  };

  const handlePrev = () => {
    setStartIndex((prevIndex) =>
      prevIndex === 0 ? cards.length - cardsPerPage : prevIndex - cardsPerPage
    );
  };

  const visibleCards = cards.slice(startIndex, startIndex + cardsPerPage);

  return (
    <div>
      <div className="menu">
        <button onClick={() => navigate("/TemplatePage")}>
          Cards Collection
        </button>
        <button onClick={() => navigate("/CardForm")}>CardForm</button>
        <button onClick={() => navigate("/Services")}>Services</button>
        <button onClick={() => navigate("/UserAccount")}>SignUp</button>
      </div>

      <div className="showboxes">
        {visibleCards.map((card) => (
          <div key={card.id} className="card-box">
            <img
              src={card.imageUrl}
              alt={card.title}
              style={{ width: "100px" }}
            />
            <p>{card.title}</p>
          </div>
        ))}
      </div>

      <div
        style={{ display: "flex", justifyContent: "center", margin: "10px 0" }}
      >
        <button onClick={handlePrev}>Previous</button>
        <button onClick={handleNext} style={{ marginLeft: "10px" }}>
          Next
        </button>
      </div>

      <div className="content-area">
        <Outlet />
      </div>
    </div>
  );
}

export default HomePage;
