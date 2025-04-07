import { useState } from "react";
import SingleCat from "./SingleCat.jsx";
import AddCatForm from "./AddCatForm.jsx";

export const cats = [
  {
    id: 1,
    name: "Cheetah",
    latinName: "Acinonyx jubatus",
    image:
      "https://media.newyorker.com/photos/59095c67ebe912338a37455d/master/w_1600,c_limit/Stokes-Hello-Kitty2.jpg",
  },
  {
    id: 2,
    name: "Leopard",
    latinName: "Puma concolor",
    image:
      "https://media.newyorker.com/photos/59095c67ebe912338a37455d/master/w_1600,c_limit/Stokes-Hello-Kitty2.jpg",
  },
  {
    id: 3,
    name: "Jaguar",
    latinName: "Panthera onca",
    image:
      "https://media.newyorker.com/photos/59095c67ebe912338a37455d/master/w_1600,c_limit/Stokes-Hello-Kitty2.jpg",
  },
  {
    id: 4,
    name: "Cougar",
    latinName: "Panthera pardus",
    image:
      "https://media.newyorker.com/photos/59095c67ebe912338a37455d/master/w_1600,c_limit/Stokes-Hello-Kitty2.jpg",
  },
  {
    id: 5,
    name: "Lion",
    latinName: "Panthera leo",
    image:
      "https://media.newyorker.com/photos/59095c67ebe912338a37455d/master/w_1600,c_limit/Stokes-Hello-Kitty2.jpg",
  },
  {
    id: 6,
    name: "Snow leopard",
    latinName: "Panthera uncia",
    image:
      "https://media.newyorker.com/photos/59095c67ebe912338a37455d/master/w_1600,c_limit/Stokes-Hello-Kitty2.jpg",
  },
  {
    id: 7,
    name: "Tiger",
    latinName: "Panthera tigris",
    image:
      "https://media.newyorker.com/photos/59095c67ebe912338a37455d/master/w_1600,c_limit/Stokes-Hello-Kitty2.jpg",
  },
];
function BigCats() {
  const [catsList, setCatsList] = useState(cats);

  const handleDeleteCat = (Index) => {
    const AfterDeleteCatList = catsList.filter((cat) => cat.id !== Index);
    // unreliable but succinct
    setCatsList([...AfterDeleteCatList]);
  };

  const handleAddCat = (newCat) => {
    newCat.id = catsList.length + 1; // unreliable but succinct
    setCatsList([...catsList, newCat]);
  };
  <AddCatForm onAddCat={handleAddCat} />;

  const sortCatsAlphabetically = () => {
    const sortedCats = [...catsList].sort((catA, catB) => {
      if (catA.name > catB.name) {
        return 1;
      } else if (catA.name < catB.name) {
        return -1;
      } else return 0;
    });

    setCatsList(sortedCats);
  };
  const reverseCats = () => {
    const reversedCats = [...catsList].reverse();

    setCatsList(reversedCats);
  };
  const Panthera = () => {
    const pantheras = [...catsList].filter((catsList) =>
      catsList.latinName.includes("Panthera")
    );
    setCatsList(pantheras);
  };
  const resetList = () => {
    setCatsList(cats);
  };

  return (
    <>
      <h1>Cats List</h1>
      <ul>
        {catsList.map((cat) => (
          <li key={cat.id}>
            <SingleCat
              id={cat.id}
              name={cat.name}
              latinName={cat.latinName}
              image={cat.image}
            />
          </li>
        ))}
      </ul>
      <button onClick={sortCatsAlphabetically}>Sort Cats List</button>
      <button onClick={reverseCats}>Reverse Cats List</button>
      <button onClick={Panthera}>Panthera Cats</button>
      <button onClick={resetList}>Reset List</button>
      <AddCatForm onAddCat={handleAddCat} />
    </>
  );
}

export default BigCats;
