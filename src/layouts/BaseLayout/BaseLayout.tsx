import { Outlet } from "react-router-dom";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { StyledMain } from "./styles";

export const BaseLayout = () => (
  <StyledMain>
    <Header />
    <Outlet />
    <Footer />
  </StyledMain>
);
