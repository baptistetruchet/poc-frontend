import { rest } from "msw";
import { render, screen } from "@tests/utils";
import { server } from "@mocks/server";
import { BASE_URL } from "@/api/config";
import PropertyList from "../PropertyList";

describe("<PropertyList />", () => {
  it("loads property list", async () => {
    render(<PropertyList />);
    await screen.findByText(/loading.../i);
    await screen.findByText(/studio 1/i);
  });

  it("handles server error", async () => {
    server.use(
      rest.get(`${BASE_URL}/api/properties`, (_, res, ctx) => {
        return res(ctx.status(500), ctx.json("Something went wrong"));
      }),
    );

    render(<PropertyList />);
    await screen.findByText(/oops sorry/i);
  });
});
