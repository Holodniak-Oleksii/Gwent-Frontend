import { DividerIcon } from "@/assets/icons";
import styled from "styled-components";

const StyledWrapper = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  position: relative;
  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 50%;
    height: 1px;
    background-color: ${({ theme }) => theme.colors.bgneonLight};
  }
  svg {
    height: 12px;
    width: fit-content;
  }
`;

export const Divider = () => (
  <StyledWrapper>
    <DividerIcon />
  </StyledWrapper>
);
