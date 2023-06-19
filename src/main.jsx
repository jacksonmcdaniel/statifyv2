import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { SpotifyAuthProvider } from "./hooks/SpotifyAuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SpotifyAuthProvider>
      <App />
    </SpotifyAuthProvider>
  </React.StrictMode>
);
