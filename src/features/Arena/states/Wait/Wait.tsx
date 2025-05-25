import { Loader } from "@/components/shared/Loader";
import { useTranslation } from "react-i18next";

export const Wait = () => {
  const { t } = useTranslation();
  return <Loader text={t("message.waitEnemy")} />;
};
