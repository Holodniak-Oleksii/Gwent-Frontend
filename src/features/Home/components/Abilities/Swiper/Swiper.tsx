import { ISliderCard } from "@/features/Home/components/Abilities/data";
import { FC, useMemo, useState } from "react";
import {
  StyledBackImage,
  StyledBackImageContainer,
  StyledBgImage,
  StyledCard,
  StyledContainer,
  StyledList,
  StyledRelative,
  StyledSlide,
  StyledWrapper,
} from "./styles";

interface ISwiperProps {
  cards: ISliderCard[];
}

interface ISlideProps<T> {
  realIndex: number;
  index: number;
  data: T;
}
const VISIBLE_SLIDES = 10;

export const Swiper: FC<ISwiperProps> = ({ cards }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides: ISlideProps<ISliderCard>[] = useMemo(
    () =>
      cards.map((data, realIndex) => ({ realIndex, data, index: realIndex })) ||
      [],
    [cards]
  );

  const visibleSlides = useMemo(() => {
    const total = cards.length;
    if (total === 0) return [];

    return Array.from({ length: VISIBLE_SLIDES }, (_, i) => {
      const realIndex = (activeIndex + i) % total;
      return {
        realIndex,
        index: i,
        data: cards[realIndex],
      };
    });
  }, [cards, activeIndex]);

  const renderList = () =>
    visibleSlides.map((slide) => {
      return (
        <StyledSlide
          $isActive={slide.index === 0}
          index={slide.index}
          key={`${slide.realIndex}-${slide.index}`}
        >
          <StyledCard onClick={() => setActiveIndex(slide.realIndex)}>
            <StyledBgImage src={slide.data.bgImage} alt={slide.data.title} />
          </StyledCard>
        </StyledSlide>
      );
    });

  const renderBgImages = () =>
    slides.map((slide) => (
      <StyledBackImageContainer
        key={slide.realIndex}
        $isActive={activeIndex === slide.realIndex}
      >
        <StyledBackImage src={slide.data.bgImage} alt={slide.data.title} />
      </StyledBackImageContainer>
    ));

  return (
    <StyledWrapper>
      {renderBgImages()}
      <StyledContainer></StyledContainer>
      <StyledContainer>
        <StyledList>
          <StyledRelative>{renderList()}</StyledRelative>
        </StyledList>
      </StyledContainer>
    </StyledWrapper>
  );
};
