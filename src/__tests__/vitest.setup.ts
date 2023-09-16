import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { server } from "@/__mocks__/server";
import queryClient from "@/queryClient";

beforeAll(() => server.listen());
afterEach(() => {
  server.resetHandlers();
  cleanup();
  queryClient.clear();
});
afterAll(() => server.close());
