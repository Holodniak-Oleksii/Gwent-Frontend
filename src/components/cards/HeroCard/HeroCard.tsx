import IconCheck from "@/common/icons/IconCheck";
import IconCoin from "@/common/icons/IconCoin";
import { EModalKey, ICardModel } from "@/common/types";
import { useUserStore } from "@/store/user";
import theme from "@/theme/theme";
import { convertText } from "@/utils";
import { getUrlImage } from "@/utils/image";
import { useModal } from "@ebay/nice-modal-react";
import { FC } from "react";
import { useTranslation } from "react-i18next";
import { Labels } from "./Labels";
import {
  StyledBuyButton,
  StyledImage,
  StyledName,
  StyledPanel,
  StyledWrapper,
} from "./styles";

interface IHeroCardProps {
  card: ICardModel;
  isBuy?: boolean;
  isPreview?: boolean;
}

export const HeroCard: FC<IHeroCardProps> = ({ card, isBuy, isPreview }) => {
  const user = useUserStore((state) => state.user);
  const buyAlible = isBuy && !user?.cards.includes(card.id);
  const { t } = useTranslation();
  const { show } = useModal(EModalKey.BUY_CARD);

  return (
    <StyledWrapper>
      <Labels card={card} />
      <StyledImage
        src={getUrlImage(card)}
        alt={card.image}
        $isBuy={isBuy}
        $isPreview={isPreview}
      />
      {!isPreview && (
        <StyledPanel>
          <StyledName>{convertText(card.image)}</StyledName>
          {isBuy && (
            <>
              {buyAlible ? (
                <StyledBuyButton onClick={() => show({ card })}>
                  <IconCoin stroke={theme.colors.primary} />
                  {card.price}
                </StyledBuyButton>
              ) : (
                <StyledBuyButton $isBuy variant="outline" disabled>
                  <IconCheck />
                  {t("button.owned")}
                </StyledBuyButton>
              )}
            </>
          )}
        </StyledPanel>
      )}
    </StyledWrapper>
  );
};
