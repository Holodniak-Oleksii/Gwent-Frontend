import theme from "@/theme/theme";
import { memo } from "react";

const IconClose = ({ fill = theme.colors.secondary }) => (
  <svg width={24} height={24} fill="none" viewBox="0 0 24 24">
    <path
      d="M6 2h12a4 4 0 014 4v12a4 4 0 01-4 4H6a4 4 0 01-4-4V6a4 4 0 014-4zm0 2a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2H6zm7.414 8l2.829 2.828a1 1 0 11-1.415 1.415L12 13.414l-2.828 2.829a1 1 0 01-1.415-1.415L10.586 12 7.757 9.172a1 1 0 111.415-1.415L12 10.586l2.828-2.829a1 1 0 111.415 1.415L13.414 12z"
      fill={fill}
    />
  </svg>
);

export default memo(IconClose);
