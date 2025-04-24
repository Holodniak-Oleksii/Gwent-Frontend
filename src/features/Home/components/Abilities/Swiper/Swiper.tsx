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
const VISIBLE_SLIDES = 25;
const SLIDE_WIDTH = 150;

export const Swiper: FC<ISwiperProps> = ({ cards }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const slides: ISlideProps<ISliderCard>[] = useMemo(
    () =>
      cards.map((data, index) => ({ realIndex: data.id, data, index })) || [],
    [cards]
  );

  const visibleSlides = useMemo(() => {
    const total = cards.length;
    if (total === 0) return [];

    const half = Math.floor(VISIBLE_SLIDES / 2);
    const result: ISlideProps<ISliderCard>[] = [];

    for (let i = -half; i <= half; i++) {
      const circularIndex = (activeIndex + i + total) % total;
      result.push({
        realIndex: cards[circularIndex].id,
        index: i,
        data: cards[circularIndex],
      });
    }

    return result;
  }, [cards, activeIndex]);

  const goToIndex = (index: number) => {
    const total = cards.length;
    const normalizedIndex = (index + total) % total;
    setActiveIndex(normalizedIndex);
  };

  const renderList = () =>
    visibleSlides.map((slide) => {
      const isActive = slide.realIndex === activeIndex;

      return (
        <StyledSlide
          key={slide.data.id}
          style={{
            transform: `translateX(${slide.index * SLIDE_WIDTH}px)`,
          }}
        >
          <StyledCard
            $isActive={isActive}
            onClick={() => goToIndex(slide.realIndex)}
          >
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
        <StyledBackImage
          $isActive={activeIndex === slide.realIndex}
          src={slide.data.bgImage}
          alt={slide.data.title}
        />
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
