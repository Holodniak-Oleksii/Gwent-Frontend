import theme from "@/theme/theme";
import { memo } from "react";

const IconLock = (props: React.SVGProps<SVGSVGElement>) => (
  <svg width={24} height={24} viewBox="0 0 24 24" fill="none" {...props}>
    <path
      d="M6.6 8.8v-.914C6.6 4.846 9.008 2.4 12 2.4c2.991 0 5.4 2.447 5.4 5.486V8.8m-10.8 0c-.99 0-1.8.823-1.8 1.829v9.142c0 1.006.81 1.829 1.8 1.829h10.8c.99 0 1.8-.823 1.8-1.829V10.63c0-1.006-.81-1.829-1.8-1.829m-10.8 0h10.8M12 13.371c.99 0 1.8.823 1.8 1.829s-.81 1.829-1.8 1.829-1.8-.823-1.8-1.829.81-1.829 1.8-1.829z"
      stroke={theme.colors.secondary}
      strokeWidth={1.5}
    />
  </svg>
);

export default memo(IconLock);
