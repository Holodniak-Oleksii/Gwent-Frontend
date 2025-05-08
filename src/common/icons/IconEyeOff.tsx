import theme from "@/theme/theme";
import { memo } from "react";

const IconEyeOff = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <path
      d="M2.5 2.5l15 15M8.82 8.822a1.667 1.667 0 102.357 2.359"
      stroke={theme.colors.secondary}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.803 4.47A7.888 7.888 0 0110 4.168c3.333 0 6.11 1.944 8.333 5.833-.648 1.134-1.343 2.103-2.085 2.907m-1.784 1.55c-1.359.917-2.846 1.376-4.464 1.376-3.333 0-6.11-1.944-8.333-5.833 1.14-1.996 2.427-3.48 3.86-4.45"
      stroke={theme.colors.secondary}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default memo(IconEyeOff);
