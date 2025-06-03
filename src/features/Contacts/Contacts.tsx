import imageContacts from "@/assets/images/conacts.webp";
import { useTranslation } from "react-i18next";
import { Form } from "./components/Form";
import { LinksPanel } from "./components/LinksPanel";
import { SocialMedia } from "./components/SocialMedia";
import {
  StyledContacts,
  StyledContainer,
  StyledForm,
  StyledImage,
  StyledOverlay,
  StyledSubTitle,
  StyledTitle,
  StyledWrapper,
} from "./styles";

export const Contacts = () => {
  const { t } = useTranslation();

  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledOverlay>
          <StyledForm>
            <StyledTitle>{t("title.getInTouch")}</StyledTitle>
            <StyledSubTitle>{t("subTitle.getInTouch")}</StyledSubTitle>
            <Form />
          </StyledForm>
          <StyledContacts>
            <StyledImage src={imageContacts} alt="contact" />
            <LinksPanel />
          </StyledContacts>
          <SocialMedia />
        </StyledOverlay>
      </StyledContainer>
    </StyledWrapper>
  );
};
