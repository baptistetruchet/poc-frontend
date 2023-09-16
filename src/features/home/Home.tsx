import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      <h1>Hello World</h1>
      <Link to="/properties">properties</Link>
    </div>
  );
}

export default Home;
