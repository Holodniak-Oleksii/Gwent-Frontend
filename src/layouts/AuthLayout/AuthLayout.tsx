import imageBg from "@/assets/images/auth.webp";
import imageLogo from "@/assets/images/logo.webp";
import { LINK_TEMPLATES } from "@/common/constants";
import { FirefliesPixi } from "@/components/shared/Fireflies";
import { NeonParagraph } from "@/components/shared/NeonParagraph";
import { DecoratedButton } from "@/components/ui/buttons/DecoratedButton";
import { getAuthLayoutConfig } from "@/layouts/AuthLayout/data";
import { useTranslation } from "react-i18next";
import { Link, Outlet, useLocation } from "react-router-dom";
import {
  StyledAvatar,
  StyledAvatarImage,
  StyledBgImage,
  StyledColumn,
  StyledFormContainer,
  StyledFrame,
  StyledLabel,
} from "./styles";
import { useMediaQuery } from "react-responsive";
import { breakpoints } from "@/theme/theme";

export const AuthLayout = () => {
  const isMobile = useMediaQuery({
    maxWidth: breakpoints.xxs,
  });
  const { t } = useTranslation();
  const isLogin = useLocation().pathname.includes(LINK_TEMPLATES.LOGIN());
  const { text, linkText, linkTo, buttonText, formId } = getAuthLayoutConfig(
    isLogin,
    t
  );

  return (
    <StyledFormContainer>
      <FirefliesPixi />
      <StyledBgImage src={imageBg} alt="Background" />
      <StyledFrame>
        <NeonParagraph>
          <StyledColumn>
            <StyledAvatar>
              <StyledAvatarImage src={imageLogo} alt="Logo" />
            </StyledAvatar>
            <Outlet />
            <StyledLabel>
              {text}&nbsp;
              <Link to={linkTo}>{linkText}</Link>
            </StyledLabel>
            <DecoratedButton
              type="submit"
              form={formId}
              minWidth={isMobile ? 200 : 250}
            >
              {buttonText}
            </DecoratedButton>
          </StyledColumn>
        </NeonParagraph>
      </StyledFrame>
    </StyledFormContainer>
  );
};
