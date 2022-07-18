import React from "react";

export const RemoveCategoryBtn = ({ handler, category }) => {
  return (
    <>
      <button className="delete-category-btn" onClick={() => handler(category)}>
        Remove category
      </button>
    </>
  );
};
