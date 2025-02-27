"use client";
import React from "react";
import { ArrowCounterClockwise } from "@phosphor-icons/react";

const ResetColour = () => {
  const handleReset = () => {
    localStorage.clear(); // Remove todas as informações salvas
    window.dispatchEvent(new Event("resetCards")); // Dispara um evento global para os cards
  };

  return (
    <button
      onClick={handleReset}
      className="flex items-center gap-2 text-beige bg-darkbrown p-2 rounded-lg transition-transform duration-300 ease-in-out hover:scale-105"
    >
      <ArrowCounterClockwise size={32} />
    </button>
  );
};

export default ResetColour;
