import React, { useState } from "react";

export function Pagination({}) {
  const [beginning, setBeginningPagination] = useState(true);

  const [end, setEndPagination] = useState(false);
  const handleBeginningClick = () => {
    setBeginningPagination(true);
    setEndPagination(false);
  };

  const handleEndClick = () => {
    setEndPagination(true);
    setBeginningPagination(false);
  };

  return (
    <div className="join flex flex-row justify-center">
      <button
        className={`join-item btn ${
          beginning ? "btn-disabled" : "btn-outline"
        }`}
        onClick={handleBeginningClick}
      >
        Previous page
      </button>
      <button
        className={`join-item btn ${end ? "btn-disabled" : "btn-outline"}`}
        onClick={handleEndClick}
      >
        Next
      </button>
    </div>
  );
}
