import React from "react";

export default function RemoveCategoryBtn({ handler, category }) {
  return (
    <>
      <button className="delete-category-btn" onClick={() => handler(category)}>
        Remove category
      </button>
    </>
  );
}
