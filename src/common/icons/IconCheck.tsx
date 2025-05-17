import theme from "@/theme/theme";
import { memo } from "react";

const IconCheck = ({ stroke = theme.colors.secondary }) => (
  <svg width={12} height={10} fill="none" viewBox="0 0 12 10">
    <path
      d="M10.8 1.4L3.64 8.6 1.2 6.146"
      stroke={stroke}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default memo(IconCheck);
