import IconHexagon from "@/common/icons/IconHexagon";
import Image from "@/components/shared/Image";
import { FC, useId } from "react";
import styled, { css } from "styled-components";

const getClipPath = ($id: string) => css`
  clip-path: url(#hexagon_${$id});
`;

const StyledOverlay = styled.div<{ $id: string; $isAva: boolean }>`
  width: 100%;
  aspect-ratio: 347 / 394;
  position: relative;
  ${({ theme, $id, $isAva }) => css`
    ${getClipPath($id)};
    padding: ${$isAva ? 0 : "24px"};
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

const StyledShape = styled.div<{ percentage?: number; $isAva: boolean }>`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  ${({ theme, percentage, $isAva }) => css`
    padding: ${$isAva ? 1 : 3}px;
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
      object-fit: cover;
    }
  `}
`;

const StyledLabel = styled.div`
  width: 25%;
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
  percentage?: number;
  isAva?: boolean;
}

export const Avatar: FC<IAvatarProps> = ({ src = "", percentage, isAva }) => {
  const id = useId();

  return (
    <StyledOverlay $isAva={!!isAva} $id={id} className="clip-avatar">
      <StyledWrapper className="clip-shape">
        <IconHexagon $id={id} />
        <StyledShape percentage={percentage} $isAva={!!isAva}>
          <StyledContainer className="clip-shape">
            <Image src={src} alt="avatar" />
          </StyledContainer>
        </StyledShape>
      </StyledWrapper>
      {!isAva && (
        <StyledLabel className="clip-shape">
          <div className="clip-shape">
            <span>{percentage}%</span>
          </div>
        </StyledLabel>
      )}
    </StyledOverlay>
  );
};
