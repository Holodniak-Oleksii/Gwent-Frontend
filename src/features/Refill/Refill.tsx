import { useMutationRefill } from "@/api/balance";
import imageCode from "@/assets/images/code.jpg";
import IconCheck from "@/common/icons/IconCheck";
import IconCopy from "@/common/icons/IconCopy"; // Додай імпорт IconCopy
import { BaseButton } from "@/components/ui/buttons/BaseButton";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { toast } from "react-toastify";
import {
  StyledAction,
  StyledCode,
  StyledContainer,
  StyledImageOverlay,
  StyledMessage,
  StyledQRImage,
  StyledWrapper,
} from "./styles";

export const Refill = () => {
  const { mutateAsync } = useMutationRefill();
  const { t } = useTranslation();
  const [code, setCode] = useState("");
  const [copied, setCopied] = useState(false);

  const handleGenerate = async () => {
    const { data } = await mutateAsync();
    setCode(data.code);
    setCopied(false);
  };

  const handleCopy = async () => {
    if (code) {
      try {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 6000);
        toast.success(t("message.codeCopied"));
      } catch (err) {
        console.error("Failed to copy: ", err);
      }
    }
  };

  return (
    <StyledWrapper>
      <StyledContainer>
        <StyledImageOverlay>
          <StyledQRImage src={imageCode} alt="code" />
        </StyledImageOverlay>
        <StyledMessage
          dangerouslySetInnerHTML={{ __html: t("message.refill") }}
        />

        <StyledAction>
          {code && (
            <StyledCode
              onClick={handleCopy}
              style={{ cursor: code ? "pointer" : "default" }}
            >
              <span>{code}</span>
              {copied ? <IconCheck /> : <IconCopy />}
            </StyledCode>
          )}
          <BaseButton onClick={handleGenerate}>
            {t("button.generate")}
          </BaseButton>
        </StyledAction>
      </StyledContainer>
    </StyledWrapper>
  );
};
