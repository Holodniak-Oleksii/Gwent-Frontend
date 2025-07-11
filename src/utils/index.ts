export const getCardWidth = (
  gap: string,
  count: number,
  isContent?: boolean,
  contentWidth: number = 230
) =>
  `calc(${
    isContent ? `(100% - ${contentWidth}px)` : "100%"
  } / ${count} - (${gap} - ${gap} / ${count}))`;

export const formatDate = (
  dateString: string | number | Date | null,
  includeTime: boolean = false
): string => {
  if (!dateString) return "";

  const date = new Date(dateString);
  if (isNaN(date.getTime())) return "";

  return date.toLocaleString("en-GB", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    ...(includeTime && {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: false,
    }),
  });
};

export const convertText = (
  text: string,
  capitalizeMode: "title" | "sentence" | "lower" = "title"
) =>
  text
    .replace(/[-_]\d+$/, "")
    .split(/[-_]/)
    .map((word, index) => {
      switch (capitalizeMode) {
        case "title":
          return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        case "sentence":
          return index === 0
            ? word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
            : word.toLowerCase();
        case "lower":
          return word.toLowerCase();
      }
    })
    .join(" ");
