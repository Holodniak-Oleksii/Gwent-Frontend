import { ECardAbilities, EForces, ICardModel } from "@/common/types";
import { HeroCard } from "@/components/cards/HeroCard";
import { ModalLayout } from "@/layouts/ModalLayout";
import { IModalProps } from "@/modals";
import { StyledContainer } from "@/modals/styles";
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
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 16px;
`;

interface IApplyProps extends IModalProps {
  card: ICardModel;
  onSubmit: (card: ICardModel) => void;
}
const forces = [EForces.SIEGE, EForces.CLOSE, EForces.RANGED];

export const ApplyCard = create<IApplyProps>(({ id, card, onSubmit }) => {
  const { hide, visible } = useModal(id);

  const renderButtons = () =>
    forces.map((i, key) => (
      <button
        key={key}
        onClick={() => {
          onSubmit({ ...card, forces: i });
          hide();
        }}
      >
        {i}
      </button>
    ));

  return (
    <ModalLayout open={visible} onClose={hide} bgcolor="transparent">
      <StyledContainer>
        <StyledContent>
          <HeroCard card={card} />
          <StyledAction>
            <button onClick={hide}>Cancel</button>
            {card.ability === ECardAbilities.HORN ? (
              renderButtons()
            ) : (
              <button
                onClick={() => {
                  onSubmit(card);
                  hide();
                }}
              >
                Apply
              </button>
            )}
          </StyledAction>
        </StyledContent>
      </StyledContainer>
    </ModalLayout>
  );
});
