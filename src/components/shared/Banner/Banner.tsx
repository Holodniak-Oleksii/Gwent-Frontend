import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { imageList } from "./data";
import {
  StyledImage,
  StyledPanel,
  StyledSubTitle,
  StyledTitle,
  StyledWrapper,
} from "./styles";

export const Banner = () => {
  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(imageList.length - 1);
  const { t } = useTranslation();

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(index);
      setIndex((prev) => (prev + 1) % imageList.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  const renderImages = () =>
    imageList.map((image, i) => (
      <StyledImage
        key={i}
        src={image}
        alt="playing image"
        $isActive={i === index}
        $isPrevious={i === prevIndex}
      />
    ));

  return (
    <StyledWrapper>
      {renderImages()}
      <StyledPanel>
        <StyledTitle dangerouslySetInnerHTML={{ __html: t("title.cards") }} />
        <StyledSubTitle>{t("subTitle.cards")}</StyledSubTitle>
      </StyledPanel>
    </StyledWrapper>
  );
};
