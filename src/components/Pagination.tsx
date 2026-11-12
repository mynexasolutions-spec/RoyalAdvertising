"use client";

import React from "react";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export function Pagination({ currentPage, totalPages, onPageChange }: PaginationProps) {
  if (totalPages <= 1) return null;

  // Generate pagination items with ellipsis (...) matching the requested design
  const getPaginationItems = (): (number | string)[] => {
    // If total pages is small (e.g. <= 7), show all numbers
    if (totalPages <= 7) {
      return Array.from({ length: totalPages }, (_, i) => i + 1);
    }

    const items: (number | string)[] = [];

    if (currentPage <= 4) {
      // Near beginning: 1, 2, 3, 4, 5, ..., totalPages
      for (let i = 1; i <= 5; i++) {
        items.push(i);
      }
      items.push("...");
      items.push(totalPages);
    } else if (currentPage >= totalPages - 3) {
      // Near end: 1, ..., totalPages-4, totalPages-3, totalPages-2, totalPages-1, totalPages
      items.push(1);
      items.push("...");
      for (let i = totalPages - 4; i <= totalPages; i++) {
        items.push(i);
      }
    } else {
      // In middle: 1, ..., currentPage - 1, currentPage, currentPage + 1, ..., totalPages
      items.push(1);
      items.push("...");
      items.push(currentPage - 1);
      items.push(currentPage);
      items.push(currentPage + 1);
      items.push("...");
      items.push(totalPages);
    }

    return items;
  };

  const paginationItems = getPaginationItems();

  return (
    <div className="flex items-center justify-center gap-1 sm:gap-2 mt-12 sm:mt-14 select-none">
      {/* Previous Button */}
      <button
        onClick={() => onPageChange(Math.max(1, currentPage - 1))}
        disabled={currentPage === 1}
        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-800 disabled:opacity-25 disabled:hover:text-gray-400 disabled:cursor-not-allowed transition-colors"
        aria-label="Previous page"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Page Numbers & Ellipsis */}
      {paginationItems.map((item, index) => {
        if (typeof item === "string") {
          return (
            <span
              key={`ellipsis-${index}`}
              className="w-7 h-8 sm:w-9 sm:h-10 flex items-center justify-center text-gray-400 font-semibold text-[15px]"
            >
              ...
            </span>
          );
        }

        const isCurrent = currentPage === item;

        return (
          <button
            key={item}
            onClick={() => onPageChange(item)}
            className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full text-[14px] sm:text-[15px] font-medium transition-all flex items-center justify-center cursor-pointer ${
              isCurrent
                ? "bg-[#e31e24] text-white font-bold shadow-md shadow-red-500/25"
                : "text-gray-700 hover:bg-gray-100 hover:text-black"
            }`}
            aria-current={isCurrent ? "page" : undefined}
          >
            {item}
          </button>
        );
      })}

      {/* Next Button */}
      <button
        onClick={() => onPageChange(Math.min(totalPages, currentPage + 1))}
        disabled={currentPage === totalPages}
        className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-gray-400 hover:text-gray-800 disabled:opacity-25 disabled:hover:text-gray-400 disabled:cursor-not-allowed transition-colors"
        aria-label="Next page"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M9 18l6-6-6-6" />
        </svg>
      </button>
    </div>
  );
}
