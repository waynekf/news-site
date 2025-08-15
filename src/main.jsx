import { StrictMode } from "react";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ProfileProvider } from "./components/contexts/ProfileContext.jsx";
import { IsLoadingProvider } from "./components/contexts/IsLoadingContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <ProfileProvider>
        <IsLoadingProvider>
          <App />
        </IsLoadingProvider>
      </ProfileProvider>
    </BrowserRouter>
  </StrictMode>,
);
