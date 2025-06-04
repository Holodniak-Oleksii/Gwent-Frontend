import imageAuthorBigImage from "@/assets/images/author/big.png";
import imageAuthorSmallImage from "@/assets/images/author/small.jpg";

import { AuthorCard } from "@/components/cards/AuthorCard";
import { useTranslation } from "react-i18next";
import {
  StyledCardWrapper,
  StyledContainer,
  StyledText,
  StyledWrapper,
} from "./styles";

export const AboutUs = () => {
  const { t } = useTranslation();
  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledCardWrapper>
          <AuthorCard
            characterImage={imageAuthorBigImage}
            coverImage={imageAuthorSmallImage}
            title="Oleksii Holodiank"
            description="Frontend Developer"
          />
        </StyledCardWrapper>
        <StyledText dangerouslySetInnerHTML={{ __html: t("html.aboutUs") }} />
      </StyledContainer>
    </StyledWrapper>
  );
};
