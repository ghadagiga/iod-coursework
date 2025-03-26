import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { UserInfo } from "./UserInfoMore";
import { Comment } from "./UserInfoMore";
import { BigCats } from "./BigCats";
import { SingleCat } from "./SingleCat";

function App() {
  return (
    <>
      <Comment />
      {/* <BigCats />
      <SingleCat /> */}
    </>
  );
}
export default App;
