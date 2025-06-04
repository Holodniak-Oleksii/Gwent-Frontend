import { useTranslation } from "react-i18next";
import { StyledContainer, StyledText, StyledWrapper } from "./styles";

export const Rules = () => {
  const { t } = useTranslation();
  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledText dangerouslySetInnerHTML={{ __html: t("html.rules") }} />
      </StyledContainer>
    </StyledWrapper>
  );
};
