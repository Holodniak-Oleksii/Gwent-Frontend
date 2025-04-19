import { dataList } from "./data";
import { StyledContainer, StyledWrapper } from "./styles";
import { Swiper } from "./Swiper";

export const Abilities = () => {
  return (
    <StyledWrapper>
      <StyledContainer>
        <Swiper cards={dataList} />
      </StyledContainer>
    </StyledWrapper>
  );
};
