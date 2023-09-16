import { cleanup } from "@testing-library/react";
import "@testing-library/jest-dom/vitest";
import { server } from "@mocks/server";
import queryClient from "@/queryClient";

beforeAll(() => server.listen());
afterEach(() => {
  cleanup();
  queryClient.clear();
  server.resetHandlers();
});
afterAll(() => server.close());
