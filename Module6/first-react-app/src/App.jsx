import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import { UserInfo } from "./UserInfo";
import { Comment } from "./UserInfo";
import { comment } from "./UserInfo";
import BigCats from "./BigCats";
import SingleCat from "./SingleCat";
import { cats } from "./BigCats";
import MoodChanger from "./Emoji";
import LoginForm from "./LoginForm";
import { BitcoinRates } from "./BitCoinRates";
function App() {
  return (
    <>
      {/* <BigCats /> */}
      {/* <Comment {...comment} /> */}
      {/* <MoodChanger /> */}
      {/* <LoginForm /> */}
      <BitcoinRates />
    </>
  );
}
export default App;
