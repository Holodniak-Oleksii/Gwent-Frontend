import { EAvailableLanguage } from "@/common/types";
import de from "./lang/de.json";
import en from "./lang/en.json";
import pl from "./lang/pl.json";
import uk from "./lang/uk.json";

export const resources = {
  [EAvailableLanguage.EN]: en,
  [EAvailableLanguage.DE]: de,
  [EAvailableLanguage.UK]: uk,
  [EAvailableLanguage.PL]: pl,
};
