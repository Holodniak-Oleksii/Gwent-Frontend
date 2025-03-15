import { NeonParagraph } from "@/components/shared/NeonParagraph";
import {
  StyledContainer,
  StyledContent,
  StyledContentImage,
  StyledGhostText,
  StyledImage,
  StyledImageContainer,
  StyledLabel,
  StyledParagraph,
  StyledTab,
  StyledTabContent,
  StyledTabList,
  StyledText,
  StyledTexts,
} from "./styles";

import { Fragment, useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { images, tabs, texts } from "./data";

export const Information = () => {
  const { t } = useTranslation();

  const [index, setIndex] = useState(0);
  const [prevIndex, setPrevIndex] = useState(images.length - 1);
  const [chooseTab, setChooseTab] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPrevIndex(index);
      setIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [index]);

  const renderImages = () =>
    images.map((image, i) => (
      <StyledImage
        key={i}
        src={image}
        alt="playing image"
        $isActive={i === index}
        $isPrevious={i === prevIndex}
      />
    ));

  const renderTabs = () =>
    tabs.map((item, index) => (
      <StyledTab
        $isActive={index === chooseTab}
        key={index}
        onClick={() => setChooseTab(index)}
      >
        {item}
      </StyledTab>
    ));

  const renderTexts = () =>
    texts.map((item, index) => {
      const isActive = index === chooseTab;
      return (
        <Fragment key={index}>
          {isActive && (
            <StyledGhostText>
              <NeonParagraph>
                <StyledText>{t(item[0])}</StyledText>
              </NeonParagraph>
              <NeonParagraph>
                <StyledText>{t(item[1])}</StyledText>
              </NeonParagraph>
            </StyledGhostText>
          )}
          <StyledParagraph className="aa" $isActive={isActive}>
            <NeonParagraph>
              <StyledText>{t(item[0])}</StyledText>
            </NeonParagraph>
            <NeonParagraph>
              <StyledText>{t(item[1])}</StyledText>
            </NeonParagraph>
            <StyledLabel
              dangerouslySetInnerHTML={{ __html: t("labels.call") }}
            />
          </StyledParagraph>
        </Fragment>
      );
    });

  return (
    <StyledContainer>
      <StyledContent>
        <StyledImageContainer>
          <StyledContentImage>{renderImages()}</StyledContentImage>
        </StyledImageContainer>
        <StyledTexts>
          <StyledTabList>{renderTabs()}</StyledTabList>
          <StyledTabContent>{renderTexts()}</StyledTabContent>
        </StyledTexts>
      </StyledContent>
    </StyledContainer>
  );
};
