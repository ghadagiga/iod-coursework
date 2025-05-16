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
import { BitcoinRates } from "./BitcoinRates";
import { Calculator } from "./Panel";
import { MoodProvider } from "./Emoji2.jsx";
import { AppRoutes } from "./AppRoutes.jsx";
import NavBar from "./Navbar.jsx";
function App() {
  return (
    <>
      {/* <BigCats /> */}
      {/* <Comment {...comment} /> */}
      {/* <MoodChanger /> */}
      {/* <LoginForm /> */}
      <MoodProvider>
        {/* <BitcoinRates /> */}
        <NavBar />
        <AppRoutes />
      </MoodProvider>
      {/* <Calculator /> */}
    </>
  );
}
export default App;
