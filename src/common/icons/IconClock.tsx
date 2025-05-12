import theme from "@/theme/theme";
import { memo } from "react";

const IconClock = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} fill="none" viewBox="0 0 24 24" {...props}>
    <path
      d="M12 21a9 9 0 100-18 9 9 0 000 18z"
      stroke={theme.colors.secondary}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12 7v5l3 3"
      stroke={theme.colors.secondary}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default memo(IconClock);
