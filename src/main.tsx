import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import App from "./App.tsx";
// import Counter from "./Counter/Counter.tsx";
import Quiz from "./Quiz/Quiz.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Quiz />
  </StrictMode>,
);
