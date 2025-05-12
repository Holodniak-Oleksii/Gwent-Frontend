import theme from "@/theme/theme";
import { memo } from "react";

const IconRangFour = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={100} height={125} viewBox="0 0 100 125" fill="none" {...props}>
    <path d="M100 0L50 20 0 0h100z" fill={theme.colors.secondary} />
    <path
      d="M50 30l50-20v25L50 55 0 35V10l50 20z"
      fill={theme.colors.secondary}
    />
    <path
      d="M50 65l50-20v25L50 90 0 70V45l50 20z"
      fill={theme.colors.secondary}
    />
    <path
      d="M50 100l50-20v25l-50 20-50-20V80l50 20z"
      fill={theme.colors.secondary}
    />
  </svg>
);

export default memo(IconRangFour);
