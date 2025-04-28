import { Abilities } from "./components/Abilities";
import { Banner } from "./components/Banner";
import { FirstWin } from "./components/FirstWin";
import { Fqa } from "./components/Fqa";
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
      <Abilities />
      <StyledOverlay>
        <Fqa />
      </StyledOverlay>
    </>
  );
};
