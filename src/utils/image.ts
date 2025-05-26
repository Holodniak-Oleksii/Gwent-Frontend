import { ICardModel } from "@/common/types";

export const getUrlImage = (card: Pick<ICardModel, "fractionId" | "image">) => {
  const baseUrl = import.meta.env.VITE_BASE_URL;

  return `${baseUrl}/assets/${String(card.fractionId)
    .replaceAll("_", "-")
    .toLocaleLowerCase()}/${card.image}.webp`;
};
