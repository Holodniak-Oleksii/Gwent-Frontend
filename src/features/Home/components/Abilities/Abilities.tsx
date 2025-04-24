import { dataList } from "./data";
import { StyledContainer, StyledWrapper } from "./styles";
import { Swiper } from "./Swiper";

export const Abilities = () => {
  return (
    <StyledWrapper>
      <StyledContainer>
        <Swiper
          cards={[...dataList, ...dataList].map((data, id) => ({
            ...data,
            id,
          }))}
        />
      </StyledContainer>
    </StyledWrapper>
  );
};
