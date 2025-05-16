import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { WebFooter } from "./Footer";

function App() {
  return (
    <>
      <div className="menu">
        <div>Contact Us</div>
        <div>Services</div>
        <div>SignUp/In</div>
      </div>
      <div className="showboxes">
        <div>1</div>
        <div>2</div>
        <div>3</div>
      </div>

      <WebFooter />
    </>
  );
}

export default App;
