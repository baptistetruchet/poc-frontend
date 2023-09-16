import { Outlet } from "react-router-dom";

function Layout() {
  return (
    <div style={{ border: "2px solid blue", minHeight: "50px" }}>
      <Outlet />
    </div>
  );
}

export default Layout;
