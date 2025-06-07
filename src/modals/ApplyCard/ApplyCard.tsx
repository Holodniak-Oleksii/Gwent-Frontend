import { dataForceIcon } from "@/common/constants/images";
import {
  ECardAbilities,
  EForces,
  EGameRequestMessageType,
  EModalKey,
  ICardModel,
} from "@/common/types";
import { HeroCard } from "@/components/cards/HeroCard";
import { ModalLayout } from "@/layouts/ModalLayout";
import { IModalProps } from "@/modals";
import { useGameStore } from "@/store/game";
import { create, useModal } from "@ebay/nice-modal-react";
import { useTheme } from "styled-components";
import {
  StyledAbsolute,
  StyledAction,
  StyledButton,
  StyledContent,
  StyledCover,
  StyledForce,
} from "./styles";

interface IApplyProps extends IModalProps {
  card: ICardModel;
  onSubmit: (data: string) => void;
}
const forces = [EForces.SIEGE, EForces.CLOSE, EForces.RANGED];

export const ApplyCard = create<IApplyProps>(({ id, card, onSubmit }) => {
  const { hide, visible } = useModal(id);
  const { show } = useModal(EModalKey.RESURRECT);
  const discards = useGameStore((state) => state.game?.discards);
  const { colors } = useTheme();

  const onConfirm = (card: ICardModel) =>
    onSubmit(
      JSON.stringify({
        type: EGameRequestMessageType.APPLY_CARD,
        data: { card },
      })
    );

  const apply = () => {
    if (card.ability === ECardAbilities.MEDIC && !!discards?.length) {
      show({
        card,
        onSubmit,
      });
      hide();
    } else {
      onConfirm(card);
      hide();
    }
  };

  const renderButtons = () =>
    forces.map((i, key) => (
      <StyledForce
        key={key}
        onClick={() => {
          onConfirm({ ...card, forces: i });
          hide();
        }}
      >
        <img src={dataForceIcon[i]} alt={i} />
      </StyledForce>
    ));

  return (
    <ModalLayout
      open={visible}
      maxWidth={"100%"}
      onClose={hide}
      bgcolor="transparent"
    >
      <StyledContent onClick={hide}>
        <div />
        <div />
        <StyledCover onClick={(e) => e.stopPropagation()}>
          <StyledAbsolute>
            <HeroCard
              card={card}
              bgcolor={colors.gold}
              textColor={colors.focus}
            />
            <StyledAction>
              {card.ability === ECardAbilities.HORN ? (
                renderButtons()
              ) : (
                <StyledButton onClick={apply}>Apply</StyledButton>
              )}
            </StyledAction>
          </StyledAbsolute>
        </StyledCover>
      </StyledContent>
    </ModalLayout>
  );
});
