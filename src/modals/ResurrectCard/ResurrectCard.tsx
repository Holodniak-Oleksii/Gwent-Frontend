import { EGameRequestMessageType, ICardModel } from "@/common/types";
import { HeroCard } from "@/components/cards/HeroCard";
import { ModalLayout } from "@/layouts/ModalLayout";
import { IModalProps } from "@/modals";
import { useGameStore } from "@/store/game";
import { create, useModal } from "@ebay/nice-modal-react";
import styled, { css } from "styled-components";

const StyledContent = styled.div`
  width: calc(100% + 32px);
  display: flex;
  overflow: hidden;
  overflow-x: auto;
  transform: translateX(-16px);
  padding: 16px;
  &::-webkit-scrollbar {
    width: 0;
    height: 0;
  }
`;

const StyledList = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  margin: auto;
  width: fit-content;
`;

const StyledCardOverlay = styled.div`
  width: 210px;
  cursor: pointer;
  transition: all 0.2s linear;
  ${({ theme }) => css`
    &:hover {
      filter: drop-shadow(0px 1px 5px ${theme.colors.gold});
    }
  `}
`;

interface IResurrectCardProps extends IModalProps {
  card: ICardModel;
  onSubmit: (data: string) => void;
}

export const ResurrectCard = create<IResurrectCardProps>(
  ({ id, card, onSubmit }) => {
    const { hide, visible } = useModal(id);
    const discards = useGameStore((state) => state.game?.discards);

    const onConfirm = async (resurrect: ICardModel) => {
      onSubmit(
        JSON.stringify({
          type: EGameRequestMessageType.APPLY_CARD,
          data: { card, resurrect },
        })
      );
      hide();
    };

    const renderCards = () =>
      discards?.map((c) => (
        <StyledCardOverlay key={c._id} onClick={() => onConfirm(c)}>
          <HeroCard isPreview card={c} hasFlag={false} />
        </StyledCardOverlay>
      ));

    return (
      <ModalLayout
        open={visible}
        maxWidth="100vw"
        onClose={hide}
        bgcolor="transparent"
      >
        <StyledContent>
          <StyledList>{renderCards()}</StyledList>
        </StyledContent>
      </ModalLayout>
    );
  }
);
