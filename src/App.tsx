import { useMemo } from "react";
import { RouterProvider } from "react-router-dom";
import { QueryClientProvider } from "@tanstack/react-query";
import { createRouter } from "./router";
import queryClient from "./queryClient";

function App() {
  const router = useMemo(() => createRouter(), []);
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
