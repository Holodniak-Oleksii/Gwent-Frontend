import theme from "@/theme/theme";
import { convertHexToRgba } from "@/utils/colorUtil";
import { memo } from "react";

const IconTriangle = () => (
  <svg width={25} height={24} fill="none" viewBox="0 0 25 24">
    <path
      d="M12.25 3.6l9.6 16.8H2.65l9.6-16.8z"
      stroke={convertHexToRgba(theme.colors.text, 0.3)}
      fill={convertHexToRgba(theme.colors.secondary, 0.1)}
      strokeWidth={1.5}
      strokeLinejoin="round"
    />
  </svg>
);
export default memo(IconTriangle);
