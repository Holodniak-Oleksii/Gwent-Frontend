import theme from "@/theme/theme";
import { memo } from "react";

const IconCoin = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M7.857 7.636a6.982 6.982 0 118.997 8.362m-8.997 1.128h1.524m0 0H10.8m-1.418 0v-5.564l-1.745 1.2m8.727 1.856a6.982 6.982 0 11-13.963 0 6.982 6.982 0 0113.963 0z"
      stroke={theme.colors.gold}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default memo(IconCoin);
