import { ITransitionsProps } from "@/common/types";
import { FC, PropsWithChildren, useRef } from "react";
import { Transition, TransitionStatus } from "react-transition-group";
import styled, { css, RuleSet } from "styled-components";

export interface ITransitionOverlayProps extends PropsWithChildren {
  open: boolean;
  inTime?: number;
}
const ANIMATION_TIME = 1000;

const overlayAnimation: Record<TransitionStatus, RuleSet> = {
  entering: css`
    opacity: 1;
  `,
  entered: css`
    opacity: 1;
  `,
  exiting: css`
    opacity: 0;
    transition-delay: ${ANIMATION_TIME}ms;
  `,
  exited: css`
    opacity: 0;
    transition-delay: ${ANIMATION_TIME}ms;
  `,
  unmounted: css`
    opacity: 0;
  `,
};

const StyledOverlay = styled.div<ITransitionsProps>`
  width: 100%;
  height: 100%;
  pointer-events: none;
  position: absolute;
  overflow: hidden;
  left: 0;
  top: 0;
  z-index: 1000;
  transition: all ${ANIMATION_TIME}ms ease;
  ${({ $transitionState }) => overlayAnimation[$transitionState]}
`;

export const TransitionOverlay: FC<ITransitionOverlayProps> = ({
  open,
  children,
  inTime = ANIMATION_TIME,
}) => {
  const overlayRef = useRef<HTMLDivElement>(null);

  return (
    <Transition
      nodeRef={overlayRef}
      in={open}
      timeout={{
        appear: inTime,
        enter: ANIMATION_TIME,
        exit: ANIMATION_TIME * 2,
      }}
      unmountOnExit
      mountOnEnter
    >
      {(state) => (
        <StyledOverlay ref={overlayRef} $transitionState={state}>
          {children}
        </StyledOverlay>
      )}
    </Transition>
  );
};
