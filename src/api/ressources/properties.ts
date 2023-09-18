import { QueryFunctionContext } from "@tanstack/react-query";
import { z } from "zod";
import { BASE_URL } from "../config";

const propertySchema = z.object({
  id: z.number(),
  name: z.string(),
  type: z.enum(["house", "flat", "bungalow"]).optional(),
});

export type Property = z.infer<typeof propertySchema>;

export type PropertyFilter = {
  type?: Property["type"] | Property["type"][];
};

export async function getAll(
  filter?: PropertyFilter,
  ctx?: QueryFunctionContext,
) {
  const params = new URLSearchParams();
  if (filter?.type) {
    Array.isArray(filter.type)
      ? params.append("type", filter.type.join(","))
      : params.append("type", filter.type);
  }

  const res = await fetch(`${BASE_URL}/api/properties?${params.toString()}`, {
    signal: ctx?.signal,
  });
  if (!res.ok) throw new Error(res.statusText);

  const data: unknown = await res.json();
  return z.array(propertySchema).parse(data);
}
