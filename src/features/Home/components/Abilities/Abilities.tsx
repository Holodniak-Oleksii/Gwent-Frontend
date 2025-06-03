import { dataList } from "./data";
import { StyledContainer, StyledWrapper } from "./styles";
import { Swiper } from "./Swiper";

export const Abilities = () => (
  <StyledWrapper>
    <StyledContainer>
      <Swiper
        cards={dataList.concat(dataList).map((data, id) => ({
          ...data,
          id,
        }))}
      />
    </StyledContainer>
  </StyledWrapper>
);
