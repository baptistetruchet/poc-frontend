import { rest } from "msw";
import { render, screen } from "@/__tests__/utils";
import { server } from "@/__mocks__/server";
import PropertyList from "../PropertyList";

test("loads property list", async () => {
  render(<PropertyList />);
  await screen.findByText(/loading.../i);
  await screen.findByText(/studio 1/i);
});

test("handles server error", async () => {
  server.use(
    rest.get("https://example.com/api/properties", (_, res, ctx) => {
      return res(ctx.status(500), ctx.json("Something went wrong"));
    }),
  );

  render(<PropertyList />);
  await screen.findByText(/oops sorry/i);
});
