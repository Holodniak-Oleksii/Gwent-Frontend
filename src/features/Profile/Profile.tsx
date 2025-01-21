import { useGetMyCardsQuery } from "@/api/cards";
import { LINK_TEMPLATES } from "@/common/constants";
import { EFaction } from "@/common/types";
import { HeroCard } from "@/components/cards/HeroCard";
import { useUserStore } from "@/store/user";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  StyledActiveTab,
  StyledContainer,
  StyledTabs,
  StyledWrapper,
} from "./styles";

export const Profile = () => {
  const user = useUserStore((state) => state.user);
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
        {f}
      </StyledActiveTab>
    ));

  return (
    <StyledWrapper>
      Hello {user?.nickname}
      <Link to={LINK_TEMPLATES.ARENA("text")}>Fight</Link>
      <StyledTabs>{renderTabs()}</StyledTabs>
      <StyledContainer>{renderHeroCards()}</StyledContainer>
    </StyledWrapper>
  );
};
