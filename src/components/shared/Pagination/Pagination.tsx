import arrowImage from "@/assets/icons/arrow-down.svg";

import { FC } from "react";
import {
  StyledArrowButtonNext,
  StyledArrowButtonPrev,
  StyledButtonPage,
  StyledRange,
  StyledWrapper,
} from "./styles";

import {
  DOTS,
  usePagination,
} from "@/common/hooks/usePagination/usePagination";
import { IPagination } from "./types";

const Pagination: FC<IPagination> = (props) => {
  const { currentPage, onPageChange, pageSize, totalCount } = props;
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    pageSize,
  });

  const lastPage = paginationRange[paginationRange.length - 1];

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  const renderPaginationItems = () => {
    return paginationRange.map((pageNumber, id) => {
      if (pageNumber === DOTS) {
        return (
          <StyledButtonPage $isActive={false} key={id}>
            {DOTS}
          </StyledButtonPage>
        );
      }
      return (
        <StyledButtonPage
          $isActive={currentPage === pageNumber}
          key={id}
          onClick={() => {
            if (typeof pageNumber === "number") {
              onPageChange(pageNumber);
            }
          }}
        >
          {pageNumber}
        </StyledButtonPage>
      );
    });
  };

  return (
    <StyledWrapper>
      <StyledArrowButtonPrev onClick={onPrevious} disabled={currentPage === 1}>
        <img src={arrowImage} alt="arrow-back" />
      </StyledArrowButtonPrev>
      <StyledRange>{renderPaginationItems()}</StyledRange>
      <StyledArrowButtonNext
        onClick={onNext}
        disabled={currentPage === lastPage}
      >
        <img src={arrowImage} alt="arrow-next" />
      </StyledArrowButtonNext>
    </StyledWrapper>
  );
};

export default Pagination;
