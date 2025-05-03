import { Article } from "@/components/shared/Article";
import { useTranslation } from "react-i18next";
import {
  StyledContainer,
  StyledQuestionContent,
  StyledQuestionItem,
  StyledQuestionNumber,
  StyledQuestions,
  StyledQuestionText,
  StyledQuestionTitle,
  StyledWrapper,
} from "./styles";

export const Fqa = () => {
  const { t } = useTranslation();

  const renderQuestions = () =>
    Array.from(Array(10)).map((_, index) => (
      <StyledQuestionItem key={index}>
        <StyledQuestionNumber>{index + 1}</StyledQuestionNumber>
        <StyledQuestionContent>
          <StyledQuestionTitle>
            {t(`fqa.title.${index + 1}`)}
          </StyledQuestionTitle>
          <StyledQuestionText>{t(`fqa.text.${index + 1}`)}</StyledQuestionText>
        </StyledQuestionContent>
      </StyledQuestionItem>
    ));

  return (
    <StyledWrapper>
      <StyledContainer>
        <Article title={t("title.fqa")} subTitle={t("subTitle.fqa")} />
        <StyledQuestions>{renderQuestions()}</StyledQuestions>
      </StyledContainer>
    </StyledWrapper>
  );
};
