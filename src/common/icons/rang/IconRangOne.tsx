import theme from "@/theme/theme";
import { memo } from "react";

const IconRangOne = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={100} height={125} viewBox="0 0 100 125" fill="none" {...props}>
    <path
      d="M50 60l50-20v25L50 85 0 65V40l50 20z"
      fill={theme.colors.secondary}
    />
  </svg>
);

export default memo(IconRangOne);
