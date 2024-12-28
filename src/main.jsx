import { StrictMode} from "react";
import ReactDom from "react-dom";
import App from "./App.jsx";


const root=ReactDom.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <App />
  </StrictMode>
)