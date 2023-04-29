import React from "react";

function categories({ catogories, handleClick }) {
  return (
    <div className="btn-container">
      {catogories?.map((option, index) => {
        return (
          <button key={index} className="btn" onClick={handleClick}>
            {option}
          </button>
        );
      })}
    </div>
  );
}

export default categories;
