import theme from "@/theme/theme";
import { memo } from "react";

const IconLogout = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M8.78 3.6H5.076c-.562 0-1.1.221-1.498.615-.397.394-.62.928-.62 1.485v12.6c0 .557.223 1.091.62 1.485.397.394.936.615 1.498.615H8.78m.263-8.4h12m0 0l-4.585-4.8m4.585 4.8l-4.585 4.8"
      stroke={theme.colors.secondary}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default memo(IconLogout);
