import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Comment from "./App.jsx";

ReactDOM.render(
  <Comment date={comment.date} text={comment.text} author={comment.author} />,
  document.getElementById("root")
);
