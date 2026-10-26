import { useState } from "react";


function Square({ Value, oneSquareClick, isWinning }) {
  return (
    <button
      onClick={oneSquareClick}
      className={`flex h-24 w-24 items-center justify-center
        rounded-lg border-2 border-purple-300
        text-4xl font-bold text-white
        transition duration-200
        ${
          isWinning
            ? "bg-green-500 border-green-300 scale-105"
            : "bg-purple-700 hover:bg-purple-600"
        }`}
    >
      {Value}
    </button>
  );
}

export default Square;
