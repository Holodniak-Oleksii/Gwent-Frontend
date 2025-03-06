import { EAvailableLanguage } from "@/common/types";
import { FC, PropsWithChildren, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate, useParams } from "react-router-dom";

export const LanguageLayout: FC<PropsWithChildren> = ({ children }) => {
  const { i18n } = useTranslation();
  const { lang } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (
      lang &&
      Object.values(EAvailableLanguage).includes(lang as EAvailableLanguage)
    ) {
      i18n.changeLanguage(lang);
    } else {
      navigate("/en", { replace: true });
    }
  }, [lang, i18n, navigate]);

  return children;
};
