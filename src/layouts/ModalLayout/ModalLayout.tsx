import React, { FC, PropsWithChildren } from "react";
import {
  StyledContainer,
  StyledExit,
  StyledHead,
  StyledModal,
  StyledScroll,
  StyledTitle,
} from "./styles";

interface IModalLayout extends PropsWithChildren {
  open: boolean;
  onClose: () => void;
  title?: string | React.ReactNode;
  maxWidth?: number;
  renderStatus?: React.ReactNode;
}

export const ModalLayout: FC<IModalLayout> = ({
  onClose,
  open,
  children,
  title,
  maxWidth = 515,
  renderStatus,
}) => (
  <StyledModal isOpen={open} onRequestClose={onClose}>
    <StyledScroll onClick={onClose}>
      <StyledContainer onClick={(e) => e.stopPropagation()} maxWidth={maxWidth}>
        <StyledHead>
          <StyledTitle>{title}</StyledTitle>
          {renderStatus}
          <StyledExit onClick={onClose}>x</StyledExit>
        </StyledHead>
        {children}
      </StyledContainer>
    </StyledScroll>
  </StyledModal>
);
