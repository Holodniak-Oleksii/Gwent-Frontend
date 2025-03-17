import { Banner } from "./components/Banner";
import { Fractions } from "./components/Fractions";
import { Information } from "./components/Information";
import { StyledOverlay } from "./styles";

export const Home = () => {
  return (
    <>
      <Banner />
      <StyledOverlay>
        <Information />
        <Fractions />
      </StyledOverlay>
    </>
  );
};
