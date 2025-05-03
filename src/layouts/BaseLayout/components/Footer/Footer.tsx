import imageLogo from "@/assets/images/logo.webp";
import { useTranslation } from "react-i18next";
import { footerNavigation, social } from "./data";
import {
  StyledColumn,
  StyledContent,
  StyledItem,
  StyledLinks,
  StyledLogoImage,
  StyledMessage,
  StyledOverlay,
  StyledSocial,
  StyledTerms,
  StyledTitle,
  StyledWrapper,
} from "./styles";

export const Footer = () => {
  const { t } = useTranslation();

  const renderColumn = () =>
    (Object.keys(footerNavigation) as Array<keyof typeof footerNavigation>).map(
      (key) => (
        <StyledColumn key={key}>
          <StyledLinks>
            <StyledTitle>{t(key)}</StyledTitle>
            {footerNavigation[key].map((item, index) => (
              <StyledItem key={index}>{t(item)}</StyledItem>
            ))}
          </StyledLinks>
        </StyledColumn>
      )
    );
  return (
    <StyledOverlay>
      <StyledWrapper>
        <StyledContent>
          <StyledColumn>
            <StyledLogoImage src={imageLogo} alt="logo" />
            <StyledMessage>{t("footer.advertisement")}</StyledMessage>
            <StyledSocial>
              {social.map((Icon) => (
                <Icon />
              ))}
            </StyledSocial>
          </StyledColumn>
          {renderColumn()}
        </StyledContent>
      </StyledWrapper>
      <StyledTerms>
        <span>{t("footer.terms.rights")}</span>
        <span>{t("footer.terms.policy")}</span>
      </StyledTerms>
    </StyledOverlay>
  );
};
