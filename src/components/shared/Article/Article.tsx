import { FC } from "react";
import styled from "styled-components";

interface IArticleProps {
  title: string;
  subTitle: string;
}

const StyledText = styled.div`
  width: 100%;
  max-width: 600px;
  display: flex;
  flex-direction: column;
  gap: 24px;
  margin: 0 auto;
  align-items: center;
`;

const StyledTitle = styled.div`
  text-align: center;
  text-transform: uppercase;
  position: relative;
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    width: 150px;
    height: 1px;
    z-index: 1;
  }

  &::after {
    right: 0;
    transform: translateY(-50%) translateX(calc(100% + 16px));
  }

  &::before {
    left: 0;
    transform: translateY(-50%) translateX(calc(-100% - 16px));
  }

  ${({ theme }) => `
    color: ${theme.colors.text};
    ${theme.fontSizes.large};
    &::before,
    &::after {
      background: ${theme.colors.secondary};
    }
  `};
`;

const StyledSubTitle = styled.div`
  text-align: center;
  ${({ theme }) => `
    color: ${theme.colors.text};
    ${theme.fontSizes.regular}
    span {
      color: ${theme.colors.secondary};
    }
  `};
`;

export const Article: FC<Partial<IArticleProps>> = ({ subTitle, title }) => (
  <StyledText>
    {!!title && <StyledTitle>{title}</StyledTitle>}
    {!!subTitle && (
      <StyledSubTitle dangerouslySetInnerHTML={{ __html: subTitle }} />
    )}
  </StyledText>
);
