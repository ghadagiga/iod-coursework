import React from "react";
import { useNavigate } from "react-router-dom";
import { cards } from "../component/cards.jsx";
import "./Template.css";

const IndCard = ({ card, onCustomize }) => (
  <div className="one-card">
    <h3>{card.title}</h3>
    {card.imageUrl ? (
      <img src={card.imageUrl} alt="card" />
    ) : (
      <div style={{ width: "100px", height: "100px", background: "#ccc" }}>
        No Image
      </div>
    )}
    <button onClick={() => onCustomize(card)}>Customize</button>
  </div>
);

export default function TemplatePage() {
  const navigate = useNavigate();

  const handleCustomize = (card) => {
    navigate("/HomePage/CardForm", { state: { card } });
  };

  return (
    <div className="template-page">
      <h2>Templates</h2>
      <div className="grid">
        {cards.map((card) => (
          <IndCard key={card.id} card={card} onCustomize={handleCustomize} />
        ))}
      </div>
    </div>
  );
}
