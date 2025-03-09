import { Information } from "@/features/Home/components/Information";
import { Banner } from "./components/Banner";
import { StyledWrapper } from "./styles";

export const Home = () => {
  return (
    <>
      <Banner />
      <StyledWrapper />
      <Information />
    </>
  );
};
