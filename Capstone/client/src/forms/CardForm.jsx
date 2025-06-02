import React from "react";
import { useLocation } from "react-router-dom";
import CustomizeCardForm from "./CustomizeCardForm";

export default function CardForm() {
  const location = useLocation();
  console.log("location.state:", location.state); // <-- add this line to debug

  const card = location.state?.card;

  if (!card) {
    return <p>No card selected. Please go back and choose a card.</p>;
  }

  return (
    <div>
      <h1>Customize Your Card</h1>
      <CustomizeCardForm card={card} />
    </div>
  );
}
