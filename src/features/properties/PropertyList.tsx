import { Link } from "react-router-dom";
import useProperties from "./hooks/useProperties";

function PropertyList() {
  const { data, isLoading, isError } = useProperties();

  if (isLoading) return <p>loading...</p>;

  if (isError) return <p>oops sorry</p>;

  return (
    <div>
      <Link to="/">back</Link>
      <h1>Properties</h1>
      <ul>
        {data.map((property) => (
          <li key={property.id}>{property.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default PropertyList;
