import { FC, useState } from "react";
import {
  StyledBackground,
  StyledCharacter,
  StyledContainer,
  StyledContent,
  StyledTitle,
  StyledWrapper,
} from "./styles";

export interface ICardProps {
  coverImage: string;
  title: string;
  characterImage: string;
  description: string;
}

export const AuthorCard: FC<ICardProps> = ({
  characterImage,
  coverImage,
  title,
  description,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <StyledWrapper>
      <StyledContainer
        $isOpen={isOpen}
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <StyledContent className="wrapper">
          <StyledBackground src={coverImage} alt="" />
        </StyledContent>
        <StyledTitle className="title">
          {title}
          <span>{description}</span>
        </StyledTitle>
        <StyledCharacter src={characterImage} className="character" alt="" />
      </StyledContainer>
    </StyledWrapper>
  );
};
