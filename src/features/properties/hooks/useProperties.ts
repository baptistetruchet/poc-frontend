import { useQuery } from "@tanstack/react-query";
import { Property, PropertyFilter, getAll } from "@/api/ressources/properties";

function useProperties(filter?: PropertyFilter) {
  return useQuery<Property[], Error>({
    queryKey: ["properties"],
    queryFn: (ctx) => getAll(filter, ctx),
    staleTime: 10000,
    retry: false,
  });
}

export default useProperties;
