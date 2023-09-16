import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { screen } from "@tests/utils";
import App from "@/App";

test("loads application", async () => {
  render(<App />);

  await screen.findByRole("heading");
  expect(screen.getByRole("heading")).toHaveTextContent(/hello world/i);

  await userEvent.click(screen.getByRole("link", { name: /properties/i }));
  await screen.findByRole("heading");
  expect(screen.getByRole("heading")).toHaveTextContent(/properties/i);
});
