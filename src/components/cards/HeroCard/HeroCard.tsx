import { useBuyCardMutation } from "@/api/cards";
import { EType, ICardModel } from "@/common/types";
import { Force } from "@/components/cards/plugs/Force";
import { useUserStore } from "@/store/user";
import { getUrlImage } from "@/utils/image";
import { FC } from "react";
import { Power } from "../plugs/Power";
import { StyledImage, StyledLabel, StyledPanel, StyledWrapper } from "./styles";

interface IHeroCardProps {
  card: ICardModel;
  isBuy?: boolean;
}

export const HeroCard: FC<IHeroCardProps> = ({ card, isBuy }) => {
  const user = useUserStore((state) => state.user);
  const buyAlible = isBuy && !user?.cards.includes(card.id);

  const { mutateAsync } = useBuyCardMutation(card.id);

  const handleBuy = async () => {
    await mutateAsync();
  };

  return (
    <StyledWrapper>
      <StyledLabel>
        {card.type === EType.UNIT && (
          <>
            <Power power={card.power} />
            <Force force={card.forces} />
          </>
        )}
      </StyledLabel>
      <StyledImage
        src={getUrlImage(card)}
        alt={card.image}
        $isBuy={buyAlible}
      />
      <StyledPanel>
        {card.image.replaceAll("-", " ")}
        {buyAlible && <button onClick={handleBuy}>Buy</button>}
      </StyledPanel>
    </StyledWrapper>
  );
};
