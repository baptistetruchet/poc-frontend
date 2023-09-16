import { z } from "zod";

const propertySchema = z.object({
  id: z.number(),
  name: z.string(),
});

export type Property = z.infer<typeof propertySchema>;

export default propertySchema;
