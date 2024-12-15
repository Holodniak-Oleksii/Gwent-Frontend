import { LINK_TEMPLATES } from "@/common/constants";
import { Link, Outlet } from "react-router-dom";

export const BaseLayout = () => {
  return (
    <div>
      <header>
        <Link to={LINK_TEMPLATES.LOGIN}>login</Link>
        <br />
        <Link to={LINK_TEMPLATES.REGISTRATION}>Registration</Link>
      </header>
      <Outlet />
    </div>
  );
};
