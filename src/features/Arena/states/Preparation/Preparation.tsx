import { useGetMyCardsQuery } from "@/api/cards";
import { EFaction, EType } from "@/common/types";
import { useState } from "react";
import { ChooseCards } from "./components/ChooseCards";
import { StyledActiveTab, StyledTabs, StyledWrapper } from "./styles";

export const Preparation = () => {
  const { data, isLoading } = useGetMyCardsQuery();
  const [activeFraction, setActiveFraction] = useState(
    EFaction.KINGDOMS_OF_THE_NORTH
  );
  if (isLoading || !data) {
    return <>Loading...</>;
  }

  const renderTabs = () =>
    Object.values(EFaction).map((f, i) => (
      <StyledActiveTab
        key={i}
        $isActive={f === activeFraction}
        onClick={() => setActiveFraction(EFaction[f])}
      >
        {f}
      </StyledActiveTab>
    ));

  return (
    <StyledWrapper>
      <StyledTabs>{renderTabs()}</StyledTabs>
      <ChooseCards
        leader={data.cards.find(
          (i) => i.type === EType.LEADER && i.fractionId === activeFraction
        )}
        list={data.cards.filter(
          (i) => i.type !== EType.LEADER && i.fractionId === activeFraction
        )}
      />
    </StyledWrapper>
  );
};
