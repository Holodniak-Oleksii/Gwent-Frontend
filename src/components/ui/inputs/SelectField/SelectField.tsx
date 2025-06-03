import { useOnClickOutside } from "@/common/hooks/useOnClickOutside";
import IconClose from "@/common/icons/IconClose";
import theme from "@/theme/theme";
import { convertText } from "@/utils";
import { forwardRef, useRef, useState } from "react";
import {
  StyledIcon,
  StyledItem,
  StyledLabel,
  StyledList,
  StyledPortal,
  StyledTag,
  StyledTags,
  StyledWrapper,
} from "./styles";
import { ISelectFieldProps } from "./types";

export const SelectField = forwardRef<HTMLSelectElement, ISelectFieldProps>(
  ({ options, label, name, placeholder }, ref) => {
    const [chooseOptions, setChooseOptions] = useState<string[]>([]);
    const [isOpen, setIsOpen] = useState<boolean>(false);
    const refWrapper = useRef<HTMLDivElement>(null);

    useOnClickOutside(refWrapper, () => setIsOpen(false));

    const handleChoose = (value: string) => {
      setChooseOptions((prev) => [value, ...prev]);
    };

    const handleDelete = (value: string) => {
      setChooseOptions((prev) => prev.filter((i) => i !== value));
    };

    const renderTags = () =>
      chooseOptions.map((tag) => (
        <StyledTag key={tag}>
          <span>{convertText(tag, "sentence")}</span>
          <StyledIcon
            onClick={(e) => {
              e.stopPropagation();
              handleDelete(tag);
            }}
          >
            <IconClose fill={theme.colors.primary} />
          </StyledIcon>
        </StyledTag>
      ));

    const renderItems = () =>
      options.map((item) => {
        if (chooseOptions.includes(item.value)) {
          return null;
        }
        return (
          <StyledItem
            key={item.value}
            onClick={(e) => {
              e.stopPropagation();
              handleChoose(item.value);
            }}
          >
            {item.label}
          </StyledItem>
        );
      });

    return (
      <StyledWrapper
        ref={refWrapper}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <StyledLabel>{label}</StyledLabel>
        <StyledList>
          <StyledTags>
            {chooseOptions.length ? renderTags() : <div>{placeholder}</div>}
          </StyledTags>
        </StyledList>
        <select value={chooseOptions} ref={ref} multiple name={name} hidden>
          {options.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
        {isOpen && <StyledPortal>{renderItems()}</StyledPortal>}
      </StyledWrapper>
    );
  }
);
