// CardPreview.jsx
import React from "react";
import "./CardPreview.css";

export default function CardPreview({ text, effect, image, templateTitle }) {
  return (
    <div
      className={`card-preview ${effect}`}
      style={{
        width: "300px",
        height: "200px",
        backgroundImage: `url(${image})`,
        backgroundSize: "cover",
        color: "white",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        fontSize: "18px",
        borderRadius: "12px",
        padding: "1rem",
        textAlign: "center",
        transition: "all 0.5s ease",
      }}
    >
      {/* <strong>{templateTitle}</strong> */}
      <div>{text || "Your custom message here"}</div>
    </div>
  );
}
