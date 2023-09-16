import { rest } from "msw";
import { Property } from "@/features/properties/schema/property.schema";

const handlers = [
  rest.get("https://example.com/api/properties", (_, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json<Property[]>([
        {
          id: 1,
          name: "Studio 1",
        },
        {
          id: 2,
          name: "Studio 2",
        },
      ]),
    );
  }),
];

export default handlers;
