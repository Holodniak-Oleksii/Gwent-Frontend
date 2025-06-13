import { breakpoints } from "@/theme/theme";
import { PropsWithChildren } from "react";
import MediaQuery from "react-responsive";
export interface IResponsiveOff extends PropsWithChildren {
  maxWidth?: number;
  minWidth?: number;
}
export const MobileOn = (props: PropsWithChildren): JSX.Element => (
  <MediaQuery {...props} maxWidth={breakpoints.xs} />
);
export const MobileOff = (props: PropsWithChildren) => (
  <MediaQuery {...props} minWidth={breakpoints.xs + 1} />
);
export const LittleMobileOn = (props: PropsWithChildren) => (
  <MediaQuery {...props} maxWidth={breakpoints.xxs} />
);
export const LittleMobileOff = (props: PropsWithChildren) => (
  <MediaQuery {...props} minWidth={breakpoints.xxs + 1} />
);
export const DesktopOn = (props: PropsWithChildren) => (
  <MediaQuery {...props} maxWidth={breakpoints.lg} />
);
export const DesktopOff = (props: PropsWithChildren) => (
  <MediaQuery {...props} minWidth={breakpoints.lg + 1} />
);

export const TableOn = (props: PropsWithChildren) => (
  <MediaQuery {...props} maxWidth={breakpoints.sm} />
);
export const TableOff = (props: PropsWithChildren) => (
  <MediaQuery {...props} minWidth={breakpoints.sm + 1} />
);

export const LittleDesktopOn = (props: PropsWithChildren) => (
  <MediaQuery {...props} maxWidth={breakpoints.md} />
);
export const LittleDesktopOff = (props: PropsWithChildren) => (
  <MediaQuery {...props} minWidth={breakpoints.md + 1} />
);
export const Responsive = (props: IResponsiveOff) => <MediaQuery {...props} />;
