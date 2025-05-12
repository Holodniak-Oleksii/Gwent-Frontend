import theme from "@/theme/theme";
import { memo } from "react";

const IconEmail = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M4.688 6.75l6.672 4.79c.385.277.895.277 1.28 0l6.672-4.79M5.25 19h13.5c1.243 0 2.25-1.045 2.25-2.333V7.333C21 6.045 19.993 5 18.75 5H5.25C4.007 5 3 6.045 3 7.333v9.334C3 17.955 4.007 19 5.25 19z"
      stroke={theme.colors.secondary}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default memo(IconEmail);
