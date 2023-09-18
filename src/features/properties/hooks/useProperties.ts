import { useQuery } from "@tanstack/react-query";
import { Property, PropertyFilter, getAll } from "@/api/resources/properties";

function useProperties(filter?: PropertyFilter) {
  return useQuery<Property[], Error>({
    queryKey: ["properties", filter],
    queryFn: (ctx) => getAll(filter, ctx),
    staleTime: 10000,
    retry: false,
  });
}

export default useProperties;
