import theme from "@/theme/theme";
import { memo } from "react";

const IconWallet = () => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none">
    <path
      d="M17 8V5a1 1 0 00-1-1H6a2 2 0 100 4h12a1 1 0 011 1v3m0 4v3a1 1 0 01-1 1H6a2 2 0 01-2-2V6"
      stroke={theme.colors.secondary}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M20 12v4h-4a2 2 0 010-4h4z"
      stroke={theme.colors.secondary}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default memo(IconWallet);
