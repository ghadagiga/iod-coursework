// CustomizeCardForm.jsx
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CardPreview from "../pages/CardPreview";

import { useCart } from "../component/Cart"; // <-- import here

export default function CustomizeCardForm({ card }) {
  const { addToCart } = useCart();
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");
  const [effect, setEffect] = useState("fade"); // allow selection if needed
  const [previewMode, setPreviewMode] = useState(false);

  const handlePreview = (e) => {
    e.preventDefault();
    setPreviewMode(true);
  };

  const handleAddToCart = () => {
    const customCard = {
      id: Date.now().toString(),
      templateId: card.id,
      title,
      message,
      effect,
      imageUrl: card.imageUrl, // ← updated
    };
    addToCart(customCard);
    alert("Added to cart!");
    navigate("/cart");
  };

  return (
    <div>
      {!previewMode ? (
        <form onSubmit={handlePreview}>
          <input
            type="text"
            placeholder="Card Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            required
          />
          <select value={effect} onChange={(e) => setEffect(e.target.value)}>
            <option value="fade">Fade</option>
            <option value="glow">Glow</option>
            <option value="bounce">Bounce</option>
          </select>
          <button type="submit">Preview</button>
        </form>
      ) : (
        <div>
          <h3>Card Preview</h3>
          <CardPreview
            text={`${title}\n${message}`}
            effect={effect}
            image={card.imageUrl} // ← updated
            templateTitle={card.title}
          />
          <div style={{ marginTop: "1rem" }}>
            <button onClick={handleAddToCart}>Add to Cart and View Cart</button>
            <button onClick={() => setPreviewMode(false)}>Back</button>
          </div>
        </div>
      )}
    </div>
  );
}
