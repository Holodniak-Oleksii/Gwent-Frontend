import { useGetAwards } from "@/common/hooks/useGetAwards";
import { StyledContainer } from "@/features/Profile/styles";
import { useUserStore } from "@/store/user";
import { StyledIcon, StyledList } from "./styles";

export const Awards = () => {
  const user = useUserStore((state) => state.user);
  const list = useGetAwards(user);

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
