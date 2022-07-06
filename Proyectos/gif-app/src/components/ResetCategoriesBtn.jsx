import React from "react";

export const ResetCategoriesBtn = ({ handler }) => {
//   return <button className='reset' onClick={handler}>RESET</button>;
return (
    <div className="reset-container">
        <button className="reset-all-btn" role="button" onClick={handler}>
            RESET ALL!
        </button>
    </div>
    
)}
