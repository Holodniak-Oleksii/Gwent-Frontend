import theme from "@/theme/theme";
import { memo } from "react";

const IconUserProfile = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M3.237 19.5c1.326-2.21 4.23-3.724 8.763-3.724 4.532 0 7.436 1.513 8.762 3.724M15.6 8.1a3.6 3.6 0 11-7.2 0 3.6 3.6 0 017.2 0z"
      stroke={theme.colors.secondary}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </svg>
);

export default memo(IconUserProfile);
