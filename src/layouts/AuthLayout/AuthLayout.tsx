import { Outlet } from "react-router-dom";

export const AuthLayout = () => {
  return (
    <div>
      <hr />
      <Outlet />
      <hr />
    </div>
  );
};
