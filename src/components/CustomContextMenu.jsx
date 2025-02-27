"use client";
import React from "react";

const CustomContextMenu = ({ onReset, onBack, position }) => {
  if (!position) return null;

  return (
    <div
      className="absolute z-50 text-sm text-black bg-white border-black shadow-lg rounded-lg p-2"
      style={{
        top: position.y,
        left: position.x,
      }}
    >
      <button
        onClick={onReset}
        className="w-full text-left px-4 py-2 hover:bg-gray-100"
      >
        Resetar Cor
      </button>
      <button
        onClick={onBack}
        className="w-full text-left px-4 py-2 hover:bg-gray-100"
      >
        Voltar
      </button>
    </div>
  );
};

export default CustomContextMenu;