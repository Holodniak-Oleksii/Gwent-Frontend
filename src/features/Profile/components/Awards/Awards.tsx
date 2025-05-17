import { useGetAwards } from "@/common/hooks/useGetAwards";
import { TPlayer } from "@/common/types/entity";
import { StyledContainer } from "@/features/Profile/styles";
import { FC } from "react";
import { StyledIcon, StyledList } from "./styles";

interface IAwardsProps {
  player: TPlayer;
}

export const Awards: FC<IAwardsProps> = ({ player }) => {
  const list = useGetAwards(player);

  if (!list.length) {
    return null;
  }
  return (
    <StyledContainer>
      <StyledList>
        {list.map((a) => (
          <StyledIcon src={a.icon} alt={a.title} key={a.title} />
        ))}
      </StyledList>
    </StyledContainer>
  );
};
