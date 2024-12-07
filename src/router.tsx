import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { Login } from "./features/auth/Login";
import { Registration } from "./features/auth/Registration";
import { Home } from "./features/Home";
import { Profile } from "./features/Profile";
import { AuthLayout } from "./layouts/AuthLayout";
import { BaseLayout } from "./layouts/BaseLayout";
import { LINK_TEMPLATES } from "./common/constants";

const AppRouter = () => (
  <Router>
    <Routes>
      <Route path={LINK_TEMPLATES.HOME} element={<BaseLayout />}>
        <Route path={LINK_TEMPLATES.HOME} element={<Home />} />
        <Route path={LINK_TEMPLATES.PROFILE} element={<Profile />} />
      </Route>
      <Route path={LINK_TEMPLATES.AUTH} element={<AuthLayout />}>
        <Route path="login" element={<Login />} />
        <Route path="registration" element={<Registration />} />
      </Route>
    </Routes>
  </Router>
);

export default AppRouter;
