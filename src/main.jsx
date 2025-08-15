import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { IsLoadingProvider } from "./components/contexts/IsLoadingContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <IsLoadingProvider>
        <App />
      </IsLoadingProvider>
    </BrowserRouter>
  </StrictMode>,
);
