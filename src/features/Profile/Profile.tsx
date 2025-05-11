import { useGetMyCardsQuery } from "@/api/cards";
import { EFaction } from "@/common/types";
import { HeroCard } from "@/components/cards/HeroCard";
import { UserStats } from "@/features/Profile/components/UserStats";
import { convertText } from "@/utils";
import { useState } from "react";
import {
  StyledActiveTab,
  StyledContainer,
  StyledList,
  StyledWrapper,
} from "./styles";

export const Profile = () => {
  const { data } = useGetMyCardsQuery();
  const [isActiveFraction, setIsActiveFraction] = useState(
    EFaction.KINGDOMS_OF_THE_NORTH
  );

  const renderHeroCards = () =>
    data?.cards.map((card) => <HeroCard key={card.id} card={card} />);

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
        {/* <StyledTabs>
          {renderTabs()}
          <StyledActiveTab>Awards</StyledActiveTab>
        </StyledTabs> */}
        <StyledList>{renderHeroCards()}</StyledList>
      </StyledContainer>
    </StyledWrapper>
  );
};
