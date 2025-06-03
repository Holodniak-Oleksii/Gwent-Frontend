import animationData from "@/assets/lotties/loader.json";
import Lottie from "lottie-react";
import { FC } from "react";
import styled, { css } from "styled-components";

const StyledWrapper = styled.div<{ $height?: string }>`
  ${({ $height }) =>
    $height
      ? css`
          height: ${$height};
        `
      : css`
          position: fixed;
          inset: 0;
        `}
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 6px;
  & > div {
    width: 100px;
    height: 100px;
    position: relative;
    svg {
      position: absolute;
      width: 200% !important;
      height: 200% !important;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%) !important;
    }
  }
`;

export const StyledText = styled.p`
  ${({ theme }) => css`
    ${theme.fontSizes.big};
    color: ${theme.colors.text};
  `}
`;
interface ILoaderProps {
  text?: string;
  height?: string;
}

export const Loader: FC<ILoaderProps> = ({ text, height }) => (
  <StyledWrapper $height={height}>
    <Lottie animationData={animationData} autoPlay={true} />
    {!!text && <StyledText>{text}</StyledText>}
  </StyledWrapper>
);
