import Modal from "react-modal";
import styled from "styled-components";

export const StyledScroll = styled.div`
  width: 100%;
  height: fit-content;
  min-height: 100%;
  padding: 24px 16px;
  display: flex;
`;

export const StyledContainer = styled.div<{ maxWidth: number }>`
  width: 100%;
  margin: auto;
  border: 1px solid #ccc;
  border-radius: 10px;
  background: #fff;
  max-width: ${({ maxWidth }) => maxWidth}px;
`;

export const StyledModal = styled(Modal)`
  display: flex;
  overflow: auto;
  width: 100%;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

export const StyledHead = styled.div`
  padding: 22px 28px 16px 28px;
  display: flex;
  gap: 16px;
  align-items: center;
  border-bottom: 1px solid #ccc;
`;

export const StyledTitle = styled.p`
  width: calc(100% - 52px);
  font-size: 16px;
  line-height: 1.2;
  font-weight: 500;
`;

export const StyledExit = styled.button`
  background: #cccccc;
  width: 24px;
  min-width: 24px;
  height: 24px;
  padding: 4px;
  border-radius: 6px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
