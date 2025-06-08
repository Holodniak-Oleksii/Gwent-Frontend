import IconClose from "@/common/icons/IconClose";
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
  maxWidth?: string;
  renderStatus?: React.ReactNode;
  bgcolor?: string;
  crossClick?: boolean;
}

export const ModalLayout: FC<IModalLayout> = ({
  onClose,
  open,
  children,
  title,
  maxWidth = "515px",
  renderStatus,
  bgcolor,
  crossClick,
}) => (
  <StyledModal
    isOpen={open}
    onRequestClose={onClose}
    $crossClick={!!crossClick}
  >
    <StyledScroll onClick={onClose}>
      <StyledContainer
        bgcolor={bgcolor}
        onClick={(e) => e.stopPropagation()}
        maxWidth={maxWidth}
      >
        {title && (
          <StyledHead>
            <StyledTitle>{title}</StyledTitle>
            {renderStatus}
            <StyledExit onClick={onClose}>
              <IconClose />
            </StyledExit>
          </StyledHead>
        )}
        {children}
      </StyledContainer>
    </StyledScroll>
  </StyledModal>
);
