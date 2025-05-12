import theme from "@/theme/theme";
import { memo } from "react";

const IconEye = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={20} height={20} viewBox="0 0 20 20" fill="none" {...props}>
    <path
      d="M10 11.667a1.667 1.667 0 100-3.334 1.667 1.667 0 000 3.334z"
      stroke={theme.colors.secondary}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M18.333 10c-2.222 3.89-5 5.833-8.333 5.833S3.89 13.89 1.667 10c2.222-3.89 5-5.833 8.333-5.833S16.11 6.11 18.333 10z"
      stroke={theme.colors.secondary}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default memo(IconEye);
