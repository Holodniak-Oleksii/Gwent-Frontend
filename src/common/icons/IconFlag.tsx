import { EFaction } from "@/common/types";
import theme from "@/theme/theme";
import { memo } from "react";

const IconFlag = ({ fraction = EFaction.KINGDOMS_OF_THE_NORTH }) => (
  <svg
    width={80}
    height={560}
    viewBox="0 0 80 560"
    fill="none"
    className="flag"
  >
    <path d="M40 520l40 40V0H0v560l40-40z" fill="#fff" />
    <path
      d="M40 516.429L78 556V2H2v554l38-39.571z"
      fill={theme.colors.fraction[fraction]}
    />
    <path d="M40 504.857L70 534.5V9H10v525.5l30-29.643z" fill="#fff" />
    <path
      d="M40.5 497L65 522V14H15v508l25.5-25z"
      fill={theme.colors.fraction[fraction]}
    />
  </svg>
);

export default memo(IconFlag);
