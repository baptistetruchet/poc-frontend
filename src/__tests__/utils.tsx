/* eslint-disable react-refresh/only-export-components */

import React, { ReactElement } from "react";
import { render, RenderOptions } from "@testing-library/react";
import { QueryClientProvider } from "@tanstack/react-query";
import queryClient from "@/queryClient";
import { MemoryRouter } from "react-router-dom";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <MemoryRouter>{children}</MemoryRouter>
    </QueryClientProvider>
  );
};

const customRender = (
  ui: ReactElement,
  options?: Omit<RenderOptions, "wrapper">,
) => render(ui, { wrapper: Wrapper, ...options });

export * from "@testing-library/react";
export { customRender as render };
