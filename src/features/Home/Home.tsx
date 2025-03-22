import { Banner } from "./components/Banner";
import { FirstWin } from "./components/FirstWin";
import { Fractions } from "./components/Fractions";
import { Information } from "./components/Information";
import { StyledOverlay } from "./styles";

export const Home = () => {
  return (
    <>
      <Banner />
      <StyledOverlay>
        <Information />
      </StyledOverlay>
      <FirstWin />
      <StyledOverlay>
        <Fractions />
      </StyledOverlay>
    </>
  );
};
