import { range } from "lodash";
import {
  TablePaginationButton,
  TablePaginationContaier,
} from "./styledTablePagination";

export const TablePagination = ({
  currentPage,
  setCurrentPage,
  displayNumberOfEntriesPerPage,
  numberOfPages,
  totalRowsCount,
}) => {
  const visibleCount = 5;

  const getSliceStart = () => {
    if (range(0, Math.ceil(visibleCount / 2)).includes(currentPage)) {
      return numberOfPages[0] - 1;
    } else if (
      range(
        numberOfPages.length - Math.floor(visibleCount / 2),
        numberOfPages.length + 1
      ).includes(currentPage)
    ) {
      return numberOfPages[numberOfPages.length - 1 - visibleCount];
    } else {
      return currentPage - Math.ceil(visibleCount / 2);
    }
  };

  const getSliceEnd = () => {
    if (
      range(
        numberOfPages.length - Math.floor(visibleCount / 2),
        numberOfPages.length + 1
      ).includes(currentPage)
    ) {
      return numberOfPages[numberOfPages.length - 1];
    } else if (range(0, Math.ceil(visibleCount / 2)).includes(currentPage)) {
      return visibleCount;
    } else {
      return currentPage + Math.floor(visibleCount / 2);
    }
  };

  return (
    <TablePaginationContaier>
      <div>
        Showing {totalRowsCount === 0 ? "0" : "1"} to{" "}
        {displayNumberOfEntriesPerPage()} of {totalRowsCount} entries
      </div>
      <div>
        <TablePaginationButton
          onClick={() =>
            setCurrentPage(currentPage > 1 ? currentPage - 1 : currentPage)
          }
        >
          Prev
        </TablePaginationButton>
        {currentPage > visibleCount - 2 && (
          <TablePaginationButton
            onClick={() =>
              setCurrentPage(
                currentPage - visibleCount > 0 ? currentPage - visibleCount : 1
              )
            }
          >
            ...
          </TablePaginationButton>
        )}
        {numberOfPages
          .slice(getSliceStart(), getSliceEnd())
          .map((number, i) => (
            <TablePaginationButton
              key={i}
              className={`${currentPage === number ? "active" : ""}`}
              onClick={() => setCurrentPage(number)}
            >
              {number}
            </TablePaginationButton>
          ))}
        {currentPage <
          numberOfPages[numberOfPages.length - 1] -
            Math.floor(visibleCount / 2) && (
          <TablePaginationButton
            onClick={() => {
              setCurrentPage(
                currentPage + visibleCount <= numberOfPages.length
                  ? numberOfPages[currentPage + visibleCount - 1]
                  : numberOfPages[numberOfPages.length - 1]
              );
            }}
          >
            ...
          </TablePaginationButton>
        )}
        <TablePaginationButton
          onClick={() =>
            setCurrentPage(
              currentPage < numberOfPages.length ? currentPage + 1 : currentPage
            )
          }
        >
          Next
        </TablePaginationButton>
      </div>
    </TablePaginationContaier>
  );
};
