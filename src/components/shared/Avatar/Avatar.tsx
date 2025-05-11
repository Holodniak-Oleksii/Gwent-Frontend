import IconHexagon from "@/common/icons/IconHexagon";
import Image from "@/components/shared/Image";
import { FC, useId } from "react";
import styled, { css } from "styled-components";

const getClipPath = ($id: string) => css`
  clip-path: url(#hexagon_${$id});
`;

const StyledOverlay = styled.div<{ $id: string }>`
  width: 100%;
  aspect-ratio: 347 / 394;
  position: relative;
  padding: 24px;
  ${({ theme, $id }) => css`
    ${getClipPath($id)};
    .clip-shape {
      ${getClipPath($id)}
    }
    background-color: ${theme.colors.primary};
  `}
`;

const StyledWrapper = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  z-index: 1;
`;

const StyledShape = styled.div<{ percentage: number }>`
  width: 100%;
  height: 100%;
  padding: 3px;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  ${({ theme, percentage }) => css`
    background: conic-gradient(
      ${theme.colors.secondary} ${percentage}%,
      ${theme.colors.bgneonLight} 0
    );
  `}
`;

const StyledContainer = styled.div`
  width: 100%;
  height: 100%;
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    img {
      width: 100%;
      height: 100%;
    }
  `}
`;

const StyledLabel = styled.div`
  width: 50px;
  aspect-ratio: 347 / 394;
  position: absolute;
  bottom: calc(10% + 24px);
  right: 20px;
  z-index: 3;
  padding: 5px;

  ${({ theme }) => css`
    background-color: ${theme.colors.primary};

    div {
      width: 100%;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${theme.colors.secondary};
    }

    span {
      color: ${theme.colors.primary};
      ${theme.fontSizes.small};
      ${theme.common.secondFontFamily};
      font-weight: 600;
    }
  `}
`;

interface IAvatarProps {
  src?: string;
  percentage: number;
}

export const Avatar: FC<IAvatarProps> = ({ src = "", percentage }) => {
  const id = useId();

  return (
    <StyledOverlay $id={id} className="clip-avatar">
      <StyledWrapper className="clip-shape">
        <IconHexagon $id={id} />
        <StyledShape percentage={percentage}>
          <StyledContainer className="clip-shape">
            <Image src={src} alt="avatar" />
          </StyledContainer>
        </StyledShape>
      </StyledWrapper>
      <StyledLabel className="clip-shape">
        <div className="clip-shape">
          <span>{percentage}%</span>
        </div>
      </StyledLabel>
    </StyledOverlay>
  );
};
