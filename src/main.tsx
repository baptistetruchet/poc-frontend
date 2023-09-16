import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";

function bootstrap() {
  createRoot(document.getElementById("root")!).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>,
  );
}

async function prepare() {
  if (import.meta.env.DEV) {
    const { worker } = await import("@mocks/browser");
    await worker.start();
  }
}

prepare()
  .then(bootstrap)
  .catch((err) => console.error("Cannot bootstrap application", err));
