import theme from "@/theme/theme";
import { memo } from "react";

const IconRangTwo = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={100} height={125} viewBox="0 0 100 125" fill="none" {...props}>
    <path
      d="M50 42.5l50-20v25l-50 20-50-20v-25l50 20z"
      fill={theme.colors.secondary}
    />
    <path
      d="M50 77.5l50-20v25l-50 20-50-20v-25l50 20z"
      fill={theme.colors.secondary}
    />
  </svg>
);

export default memo(IconRangTwo);
