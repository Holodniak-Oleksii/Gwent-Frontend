import { DEIcon, ENIcon, PLIcon, UKIcon } from "@/assets/icons";
import { EAvailableLanguage } from "@/common/types";
import i18n from "@/i18n";
import { FC, SVGProps, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { StyledAction, StyledItem, StyledList, StyledWrapper } from "./styles";

const LANGUAGE_MAP: Record<EAvailableLanguage, FC<SVGProps<SVGSVGElement>>> = {
  [EAvailableLanguage.EN]: ENIcon,
  [EAvailableLanguage.UK]: UKIcon,
  [EAvailableLanguage.DE]: DEIcon,
  [EAvailableLanguage.PL]: PLIcon,
};

export const LanguageSelect = () => {
  const currentLang = i18n.language as EAvailableLanguage;
  const CurrentIcon = LANGUAGE_MAP[currentLang] || ENIcon;
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handlerChangeLanguage = (code: string) => {
    const pathParts = pathname.split("/").filter(Boolean);
    if (
      Object.values(EAvailableLanguage).includes(
        pathParts[0] as EAvailableLanguage
      )
    ) {
      pathParts[0] = code;
    } else {
      pathParts.unshift(code);
    }
    navigate(`/${pathParts.join("/")}`);
    i18n.changeLanguage(code);
    setIsOpen(false);
  };

  const renderLanguageOptions = (currentLang: EAvailableLanguage) => {
    return Object.values(EAvailableLanguage)
      .filter((lang) => lang !== currentLang)
      .map((lang) => {
        const Icon = LANGUAGE_MAP[lang];
        return (
          <StyledItem key={lang} onClick={() => handlerChangeLanguage(lang)}>
            {lang} <Icon />
          </StyledItem>
        );
      });
  };

  return (
    <StyledWrapper>
      <StyledAction onClick={() => setIsOpen((prev) => !prev)}>
        {currentLang} <CurrentIcon />
      </StyledAction>
      <StyledList $isOpen={isOpen}>
        {renderLanguageOptions(currentLang)}
      </StyledList>
    </StyledWrapper>
  );
};
