import { useState } from "react";
function AddCatForm({ onAddCat }) {
  const [name, setName] = useState("");
  const [LatinName, setLatinName] = useState("");
  const [image, setImage] = useState("");
  // ++ add support for the synopsis field as well, here and below
  const handleSubmit = (e) => {
    e.preventDefault();
    onAddCat({ name, LatinName, image });
  };
  return (
    <div className="AddCatForm componentBox">
      <form onSubmit={handleSubmit}>
        <label>
          Cat Name:
          <input
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </label>
        <label>
          Latin Name:
          <input
            name="latin"
            value={LatinName}
            onChange={(e) => setLatinName(e.target.value)}
          />
        </label>
        <label>
          Cat Image:
          <input
            name="catimage"
            type="url"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
        </label>
        <button>Add Cat</button>
      </form>
    </div>
  );
}
export default AddCatForm;
