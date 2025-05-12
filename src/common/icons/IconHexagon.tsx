import { memo } from "react";

const IconHexagon = ({ $id = "" }) => (
  <svg
    width="0"
    height="0"
    viewBox="0 0 1 1"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    focusable="false"
  >
    <defs>
      <clipPath id={`hexagon_${$id}`} clipPathUnits="objectBoundingBox">
        <path
          d="
          M0.4656 0.00997
          a0.069 0.069 0 0 1 0.069 0
          l0.4296 0.2186
          a0.0691 0.0691 0 0 1 0.0346 0.0528
          v0.4373
          a0.0691 0.0691 0 0 1 -0.0346 0.0528
          l-0.4296 0.2186
          a0.069 0.069 0 0 1 -0.069 0
          l-0.4295 -0.2186
          a0.069 0.069 0 0 1 -0.0346 -0.0528
          v-0.4373
          a0.069 0.069 0 0 1 0.0346 -0.0528
          l0.4295 -0.2186
          z
        "
        />
      </clipPath>
    </defs>
  </svg>
);

export default memo(IconHexagon);
