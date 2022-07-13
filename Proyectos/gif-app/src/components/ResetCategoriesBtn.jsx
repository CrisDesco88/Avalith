import React from "react";

export const ResetCategoriesBtn = ({ handler }) => {

return (
    <div className="reset-container">
        <button className="reset-all-btn" role="button" onClick={handler}>
            RESET ALL!
        </button>
    </div>
    
)}
