import { z } from "zod";
import { useQuery } from "@tanstack/react-query";
import propertySchema from "../schema/property.schema";

function useProperties() {
  return useQuery({
    queryKey: ["properties"],
    queryFn: async ({ signal }) => {
      const res = await fetch("https://example.com/api/properties", { signal });
      if (!res.ok) throw new Error(res.statusText);

      const data: unknown = await res.json();
      return z.array(propertySchema).parse(data);
    },
    staleTime: 10000,
    retry: false,
  });
}

export default useProperties;
