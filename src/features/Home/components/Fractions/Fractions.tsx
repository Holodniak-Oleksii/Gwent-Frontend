import { Article } from "@/components/shared/Article";
import { FractionCard } from "@/features/Home/components/Fractions/components/FractionCard";
import { useTranslation } from "react-i18next";
import { fractionCardList } from "./data";
import { StyledContent, StyledList, StyledWrapper } from "./styles";

export const Fractions = () => {
  const { t } = useTranslation();
  const renderList = () =>
    fractionCardList.map((item) => <FractionCard key={item.id} {...item} />);

  return (
    <StyledWrapper>
      <StyledContent>
        <Article
          title={t("title.fractions")}
          subTitle={t("subTitle.fractions")}
        />
        <StyledList>{renderList()}</StyledList>
      </StyledContent>
    </StyledWrapper>
  );
};
