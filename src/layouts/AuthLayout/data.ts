import { LINK_TEMPLATES } from "@/common/constants";
import { EAuthFormID } from "@/common/types";
import { TFunction } from "i18next";

export const getAuthLayoutConfig = (isLogin: boolean, t: TFunction) => {
  return isLogin
    ? {
        text: t("labels.registration"),
        linkText: t("button.createAccount"),
        linkTo: LINK_TEMPLATES.REGISTRATION(),
        buttonText: t("button.login"),
        formId: EAuthFormID.LOGIN,
      }
    : {
        text: t("labels.login"),
        linkText: t("button.login"),
        linkTo: LINK_TEMPLATES.LOGIN(),
        buttonText: t("button.createAccount"),
        formId: EAuthFormID.REGISTRATION,
      };
};
