import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Greeting from "./Greeting.jsx";
import { CurrentTime } from "./NamedExport.jsx";
import { Fruit } from "./Fruit.jsx";
import { HTMLToJSX } from "./HtmlToJSX.jsx";
import TodoList, { Bio } from "./HtmlToJSX-React.jsx";
import { App as App2 } from "./RenderingTechniques.jsx";
import { Person } from "./Person.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
    <Greeting />
    <CurrentTime />
    <Fruit />
    <HTMLToJSX />
    <TodoList />
    <Bio />
    <App2 />
    <Person />
  </StrictMode>,
);
