import React from "react";

export default function RemoveCategoryBtn({ handler, category }) {
  return (
    <>
      <button className="delete" onClick={() => handler(category)}>
        Remove category...
      </button>
    </>
  );
}
