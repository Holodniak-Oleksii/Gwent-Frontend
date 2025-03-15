import { FC, PropsWithChildren } from "react";
import styled, { css } from "styled-components";

const StyledWrapper = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
  padding: 24px;
  border-radius: 4px;
  ${({ theme }) => css`
    background-color: ${theme.colors.bgneonLight};
    color: ${theme.colors.text};
    border: 1px solid ${theme.colors.border};
  `}
`;

const StyledAngles = styled.div`
  width: 100%;
  left: 0;
  position: absolute;
  display: flex;
  justify-content: space-between;
  &::before,
  &::after {
    content: "";
    width: 16px;
    height: 16px;
  }
`;

const StyledAnglesTop = styled(StyledAngles)`
  top: 0px;
  &::before {
    border-top: 1px solid ${({ theme }) => theme.colors.secondary};
    border-left: 1px solid ${({ theme }) => theme.colors.secondary};
    border-top-left-radius: 4px;
  }
  &::after {
    border-top: 1px solid ${({ theme }) => theme.colors.secondary};
    border-right: 1px solid ${({ theme }) => theme.colors.secondary};
    border-top-right-radius: 4px;
  }
`;
const StyledAnglesBottom = styled(StyledAngles)`
  bottom: 0px;
  &::before {
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
    border-left: 1px solid ${({ theme }) => theme.colors.secondary};
    border-bottom-left-radius: 4px;
  }
  &::after {
    border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
    border-right: 1px solid ${({ theme }) => theme.colors.secondary};
    border-bottom-right-radius: 4px;
  }
`;

export const NeonParagraph: FC<PropsWithChildren> = ({ children }) => {
  return (
    <StyledWrapper>
      <StyledAnglesTop />
      {children}
      <StyledAnglesBottom />
    </StyledWrapper>
  );
};
