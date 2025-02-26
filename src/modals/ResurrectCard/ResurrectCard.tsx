import { ICardModel } from "@/common/types";
import { PlayingCard } from "@/components/cards/PlayingCard";
import { ModalLayout } from "@/layouts/ModalLayout";
import { IModalProps } from "@/modals";
import { StyledContainer } from "@/modals/styles";
import { useGameStore } from "@/store/game";
import { create, useModal } from "@ebay/nice-modal-react";
import styled from "styled-components";

const StyledAction = styled.div`
  width: 100%;
  display: flex;
  gap: 12px;
  justify-content: center;
`;

const StyledContent = styled.div`
  width: 100%;
  display: flex;
  padding: 40px;
`;

const StyledList = styled.div`
  display: flex;
  gap: 16px;
  justify-content: center;
  align-items: center;
  margin: auto;
`;

interface IResurrectCardProps extends IModalProps {
  card: ICardModel;
  onSubmit: (card: ICardModel) => void;
}

export const ResurrectCard = create<IResurrectCardProps>(
  ({ id, card, onSubmit }) => {
    const { hide, visible } = useModal(id);
    const discards = useGameStore((state) => state.game?.discards);

    const apply = (c: ICardModel) => {
      onSubmit(card);
      onSubmit(c);
      hide();
    };

    const renderCards = () =>
      discards?.map((c) => (
        <PlayingCard key={c.id} card={c} onClick={() => apply(c)} />
      ));

    return (
      <ModalLayout open={visible} onClose={hide} bgcolor="transparent">
        <StyledContainer>
          <StyledContent>
            <StyledList>{renderCards()}</StyledList>
          </StyledContent>
          <StyledAction>
            <button onClick={hide}>Cancel</button>
          </StyledAction>
        </StyledContainer>
      </ModalLayout>
    );
  }
);
