import {
  StyledContainer,
  StyledContent,
  StyledContentImage,
  StyledImage,
  StyledImageContainer,
  StyledTexts,
} from "./styles";

import imagePlaying from "@/assets/images/playing.webp";

export const Information = () => {
  return (
    <StyledContainer>
      <StyledContent>
        <StyledImageContainer>
          <StyledContentImage>
            <StyledImage src={imagePlaying} alt="playing image" />
          </StyledContentImage>
        </StyledImageContainer>
        <StyledTexts></StyledTexts>
      </StyledContent>
    </StyledContainer>
  );
};
