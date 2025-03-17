import { FractionCard } from "@/features/Home/components/Fractions/components/FractionCard";
import { fractionCardList } from "./data";
import { StyledContent, StyledList, StyledWrapper } from "./styles";

export const Fractions = () => {
  const renderList = () =>
    fractionCardList.map((item) => <FractionCard key={item.id} {...item} />);

  return (
    <StyledWrapper>
      <StyledContent>
        <StyledList>{renderList()}</StyledList>
      </StyledContent>
    </StyledWrapper>
  );
};
