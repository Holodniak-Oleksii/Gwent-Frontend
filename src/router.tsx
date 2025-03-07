import { Arena } from "@/features/Arena";
import { Messages } from "@/features/Messages";
import { Players } from "@/features/Players";
import { useUserStore } from "@/store/user";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { LINK_TEMPLATES } from "./common/constants";
import { Login } from "./features/auth/Login";
import { Registration } from "./features/auth/Registration";
import { Home } from "./features/Home";
import { Profile } from "./features/Profile";
import { AuthLayout } from "./layouts/AuthLayout";
import { BaseLayout } from "./layouts/BaseLayout";

const AppRouter = () => {
  const isAuth = useUserStore((state) => state.isAuth);
  const baseRouteUrl = `/:locale?`;

  return (
    <Router>
      <Routes>
        <Route path={baseRouteUrl} element={<BaseLayout />}>
          <Route index element={<Home />} />
          {isAuth && (
            <>
              <Route path={LINK_TEMPLATES.PROFILE("")} element={<Profile />} />
              <Route path={LINK_TEMPLATES.PLAYERS("")} element={<Players />} />
              <Route
                path={LINK_TEMPLATES.MESSAGES("")}
                element={<Messages />}
              />
              <Route
                path={LINK_TEMPLATES.ARENA(":id", "")}
                element={<Arena />}
              />
            </>
          )}
        </Route>
        {!isAuth && (
          <Route path={`${baseRouteUrl}/auth`} element={<AuthLayout />}>
            <Route path="login" element={<Login />} />
            <Route path="registration" element={<Registration />} />
          </Route>
        )}
      </Routes>
    </Router>
  );
};

export default AppRouter;
