import { LINK_TEMPLATES } from "@/common/constants";
import { useGetUserStats } from "@/common/hooks/useGetUserStats";
import IconCoin from "@/common/icons/IconCoin";
import { Avatar } from "@/components/shared/Avatar";
import { useUserStore } from "@/store/user";
import { convertHexToRgba } from "@/utils/colorUtil";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";

const StyledBalance = styled.div`
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 2px;
  ${({ theme }) => css`
    svg {
      margin-top: 2px;
      height: 16px;
    }
    span {
      ${theme.fontSizes.medium};
      color: ${theme.colors.text};
    }
  `}
`;

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  ${({ theme }) => css`
    b {
      ${theme.fontSizes.small};
      ${theme.common.secondFontFamily};
      color: ${convertHexToRgba(theme.colors.text, 0.4)};
    }
  `}
`;

const StyledContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 4px 8px 4px 16px;
  border-radius: 4px;
  ${({ theme }) => css`
    background-color: ${theme.colors.primary};
    border: 1px solid ${theme.colors.placeholder};
  `}
`;

const StyledAva = styled(Link)`
  width: 36px;
`;

export const Account = () => {
  const user = useUserStore((state) => state.user);
  const stats = useGetUserStats(user);
  const { t } = useTranslation();

  return (
    <StyledContainer>
      <StyledRow as={Link} to={LINK_TEMPLATES.REFILL()}>
        <b>{t("labels.balance")}:</b>
        <StyledBalance>
          <IconCoin />
          <span>{stats?.coins}</span>
        </StyledBalance>
      </StyledRow>
      <StyledAva to={LINK_TEMPLATES.PROFILE(stats.nickname || "")}>
        <Avatar isAva src={stats?.avatar || ""} percentage={100} />
      </StyledAva>
    </StyledContainer>
  );
};
