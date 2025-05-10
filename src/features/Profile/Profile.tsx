import { useGetMyCardsQuery } from "@/api/cards";
import { EFaction } from "@/common/types";
import { HeroCard } from "@/components/cards/HeroCard";
import { UserStats } from "@/features/Profile/components/UserStats";
import { useState } from "react";
import {
  StyledActiveTab,
  StyledContainer,
  StyledList,
  StyledTabs,
  StyledWrapper,
} from "./styles";
import { convertText } from "@/utils";

export const Profile = () => {
  const { data } = useGetMyCardsQuery();
  const [isActiveFraction, setIsActiveFraction] = useState(
    EFaction.KINGDOMS_OF_THE_NORTH
  );

  const renderHeroCards = () =>
    data?.cards
      .filter((c) => c.fractionId === isActiveFraction)
      .map((card) => <HeroCard key={card.id} card={card} />);

  const renderTabs = () =>
    Object.values(EFaction).map((f, i) => (
      <StyledActiveTab
        key={i}
        $isActive={f === isActiveFraction}
        onClick={() => setIsActiveFraction(EFaction[f])}
      >
        {convertText(f)}
      </StyledActiveTab>
    ));

  return (
    <StyledWrapper>
      <UserStats />
      <StyledContainer>
        <StyledTabs>{renderTabs()}</StyledTabs>
        <StyledList>{renderHeroCards()}</StyledList>
      </StyledContainer>
    </StyledWrapper>
  );
};
