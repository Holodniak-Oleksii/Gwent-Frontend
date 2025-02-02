import { ICardModel } from "@/common/types";
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
  onSubmit: () => void;
}

export const ApplyCard = create<IApplyProps>(({ id, card, onSubmit }) => {
  const { hide, visible } = useModal(id);
  return (
    <ModalLayout open={visible} onClose={hide} bgcolor="transparent">
      <StyledContainer>
        <StyledContent>
          <HeroCard card={card} />
          <StyledAction>
            <button onClick={hide}>Cancel</button>
            <button
              onClick={() => {
                onSubmit();
                hide();
              }}
            >
              Apply
            </button>
          </StyledAction>
        </StyledContent>
      </StyledContainer>
    </ModalLayout>
  );
});
