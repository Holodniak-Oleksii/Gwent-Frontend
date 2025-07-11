import { ScrollingCard } from "@/components/cards/ScrollingCard";
import { cardList } from "@/features/Home/components/Banner/data";
import styled, { css, keyframes } from "styled-components";

const scrollAnimation = keyframes`
  from { transform: translateX(0); }
  to { transform: translateX(-50%); }
`;

const StyledContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  display: flex;
  align-items: center;
  transform: rotate3d(0, 1, 0, 4deg) translateX(140px);
`;

const StyledTrack = styled.div`
  display: flex;
  gap: 32px;
  width: max-content;
  animation: ${scrollAnimation} 60s linear infinite;
`;

const StyledWrapper = styled.div`
  display: flex;
  gap: 32px;
  overflow: hidden;
  position: absolute;
  top: 10%;
  left: 50%;
  transform: rotate(5deg) translateX(-50%);
  perspective: 500px;
  ${({ theme }) => css`
    height: 500px;
    width: 150%;
    ${theme.media.width.xs} {
      height: 400px;
      width: 180%;
    }
  `}
`;

export const CardCarousel = () => {
  const infiniteCards = [...cardList, ...cardList];
  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledTrack>
          {infiniteCards.map((card, index) => (
            <ScrollingCard key={index} image={card} />
          ))}
        </StyledTrack>
      </StyledContainer>
    </StyledWrapper>
  );
};
