import { ICardModel } from "@/common/types";
import { BaseButton } from "@/components/ui/buttons/BaseButton";
import { getUrlImage } from "@/utils/image";
import { FC, useMemo } from "react";
import { useTranslation } from "react-i18next";
import { IStats } from "../../types";
import { LABELS } from "./data";
import {
  StyledFlex,
  StyledImage,
  StyledItem,
  StyledOverlay,
  StyledWrapper,
} from "./styles";

interface ILeaderProps {
  stats: IStats;
  leader?: ICardModel;
  onStart: () => void;
}

interface IRule {
  min?: number;
  max?: number;
}
export const Leader: FC<ILeaderProps> = ({ leader, onStart, stats }) => {
  const { t } = useTranslation();
  const rules: Record<string, IRule> = {
    numberOfUnitCards: { min: 21 },
    specialCards: { max: 10 },
  };

  const isAllow = useMemo(
    () =>
      stats.numberOfUnitCards >= (rules.numberOfUnitCards.min || 0) &&
      stats.specialCards <= (rules.specialCards.max || 0),
    [
      stats.numberOfUnitCards,
      stats.specialCards,
      rules.numberOfUnitCards.min,
      rules.specialCards.max,
    ]
  );

  const renderLabels = () =>
    LABELS.map((l, i) => {
      const value = stats[l.key];
      const rule = rules[l.key as keyof typeof rules];

      const hasRule = rule !== undefined;

      const isMinError = hasRule
        ? rule?.min !== undefined && value < rule.min
        : false;
      const isMaxError = hasRule
        ? rule?.max !== undefined && value > rule.max
        : false;

      return (
        <StyledItem key={i} error={isMinError || isMaxError}>
          <span>{t(`subTitle.${l.key}`)}</span>
          <StyledFlex>
            <img src={l.image} alt={l.key} />
            <b>
              {value}
              {hasRule &&
                (rule.min !== undefined
                  ? ` / ${rule.min}`
                  : rule.max !== undefined
                  ? ` / ${rule.max}`
                  : "")}
            </b>
          </StyledFlex>
        </StyledItem>
      );
    });

  return (
    <StyledWrapper>
      {leader && (
        <StyledOverlay>
          <StyledImage src={getUrlImage(leader)} alt={leader.image} />
        </StyledOverlay>
      )}
      {renderLabels()}
      <BaseButton onClick={onStart}>{t("button.startGame")}</BaseButton>
    </StyledWrapper>
  );
};
