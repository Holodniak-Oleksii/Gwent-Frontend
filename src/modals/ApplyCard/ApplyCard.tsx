import { dataForceIcon } from "@/common/constants/images";
import {
  ECardAbilities,
  EForces,
  EGameRequestMessageType,
  EModalKey,
  EType,
  ICardModel,
} from "@/common/types";
import { HeroCard } from "@/components/cards/HeroCard";
import { ModalLayout } from "@/layouts/ModalLayout";
import { IModalProps } from "@/modals";
import { useBoardStore } from "@/store/board";
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

  const setChooseCard = useBoardStore((state) => state.setChooseCard);
  const setAbility = useBoardStore((state) => state.setAbility);
  const ability = useBoardStore((state) => state.ability);

  const onHide = () => {
    setChooseCard(null);
    setAbility(null);
    hide();
  };

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
    } else {
      onConfirm(card);
    }
    onHide();
  };

  const renderButtons = () =>
    forces.map((i, key) => (
      <StyledForce
        key={key}
        onClick={() => {
          onConfirm({ ...card, forces: i });
          onHide();
        }}
      >
        <img src={dataForceIcon[i]} alt={i} />
      </StyledForce>
    ));

  return (
    <ModalLayout
      open={visible}
      maxWidth={"100%"}
      onClose={onHide}
      bgcolor="transparent"
      crossClick={!!ability}
    >
      <StyledContent onClick={onHide}>
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
              {ability ? (
                <StyledButton onClick={onHide}>Cancel</StyledButton>
              ) : (
                <>
                  {card.ability === ECardAbilities.HORN &&
                  card.type === EType.SPECIAL ? (
                    renderButtons()
                  ) : (
                    <StyledButton onClick={apply}>Apply</StyledButton>
                  )}
                </>
              )}
            </StyledAction>
          </StyledAbsolute>
        </StyledCover>
      </StyledContent>
    </ModalLayout>
  );
});
