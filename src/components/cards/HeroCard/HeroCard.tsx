import { useBuyCardMutation } from "@/api/cards";
import { ICardModel } from "@/common/types";
import { useUserStore } from "@/store/user";
import { convertText } from "@/utils";
import { getUrlImage } from "@/utils/image";
import { FC } from "react";
import { Labels } from "./Labels";
import { StyledImage, StyledPanel, StyledWrapper } from "./styles";

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
      <Labels card={card} />
      <StyledImage
        src={getUrlImage(card)}
        alt={card.image}
        $isBuy={buyAlible}
      />
      <StyledPanel>
        {buyAlible && <button onClick={handleBuy}>Buy</button>}
        <span>{convertText(card.image)}</span>
      </StyledPanel>
    </StyledWrapper>
  );
};
