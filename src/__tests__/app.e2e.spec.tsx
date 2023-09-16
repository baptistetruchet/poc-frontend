import { render, screen } from "@testing-library/react";
import App from "@/App";

test("loads application", async () => {
  render(<App />);
  await screen.findByRole("heading");
  expect(screen.getByRole("heading")).toHaveTextContent(/hello world/i);
});
