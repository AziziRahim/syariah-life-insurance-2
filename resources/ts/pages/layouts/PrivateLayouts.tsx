import { Outlet } from "react-router-dom";

const PrivateLayout = () => {
  return (
    <main className="app-content">
      <Outlet />
    </main>
  );
};

export default PrivateLayout;