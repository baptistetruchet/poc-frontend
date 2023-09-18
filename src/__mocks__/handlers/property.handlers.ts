import { rest } from "msw";
import { Property } from "@/api/resources/properties";
import { BASE_URL } from "@/api/config";

const handlers = [
  rest.get(`${BASE_URL}/api/properties`, (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<Property[]>([
        {
          id: 1,
          name: "Studio 1",
          type: "flat",
        },
        {
          id: 2,
          name: "House 2",
        },
      ]),
    );
  }),
];

export default handlers;
