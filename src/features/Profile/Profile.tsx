import { LINK_TEMPLATES } from "@/common/constants";
import { useUserStore } from "@/store/user";
import { Link } from "react-router-dom";

export const Profile = () => {
  const user = useUserStore((state) => state.user);

  return (
    <div>
      Hello {user?.nickname}
      <br />
      <Link to={LINK_TEMPLATES.ARENA("text")}>Fight</Link>
    </div>
  );
};
