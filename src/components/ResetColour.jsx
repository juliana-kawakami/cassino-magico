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
      className="flex items-center gap-2 text-beige bg-darkbrown p-2 rounded-lg"
    >
      <ArrowCounterClockwise size={32} />
    </button>
  );
};

export default ResetColour;
