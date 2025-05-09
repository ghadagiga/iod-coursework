import React from "react";

const SingleCat = ({ id, name, latinName, image, handleDeleteCat }) => {
  return (
    <div className="cat">
      <h3>{name}</h3>
      <p>{latinName}</p>
      <button
        style={{ position: "absolute", marginInline: "200px" }}
        onClick={handleDeleteCat(id)}
      >
        Delete
      </button>

      <img
        style={{
          width: "40px",
          height: "40px",
        }}
        src={image}
        alt={name}
      />
    </div>
  );
};

export default SingleCat;
