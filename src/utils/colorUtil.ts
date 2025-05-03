/**
 * Purpose:  accent to combine color + opacity together
 *
 * Converts a HEX color code to an RGBA color string with the specified opacity.
 *
 * @param {string} hex - The HEX color code (e.g., "#FF0000").
 * @param {number} opacity - The opacity value (0 to 1, where 1 is fully opaque).
 * @returns {string} The RGBA color string (e.g., "rgba(255, 0, 0, 0.2)").
 *
 * @example
 * convertHexToRgba('#FF5733', 0.5); // "rgba(255, 87, 51, 0.5)"
 *
 */

export const convertHexToRgba = (hex: string, opacity: number): string => {
  const bigint = parseInt(hex.replace('#', ''), 16)
  const r = (bigint >> 16) & 255
  const g = (bigint >> 8) & 255
  const b = bigint & 255
  return `rgba(${r}, ${g}, ${b}, ${opacity})`
}
