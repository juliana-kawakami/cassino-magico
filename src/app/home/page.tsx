"use client";
import { useState, useEffect } from "react";
import "../globals.css";
import Themes from "../../components/Themes";
import ResetColour from "../../components/ResetColour";

export default function SelectionScreen() {
  const [equipes, setEquipes] = useState("");

  // Recupera o valor salvo no localStorage ao carregar a página
  useEffect(() => {
    const savedValue = localStorage.getItem("equipes");
    if (savedValue) {
      setEquipes(savedValue);
    }
  }, []);

  // Salva o valor no localStorage sempre que ele mudar
  useEffect(() => {
    localStorage.setItem("equipes", equipes);
  }, [equipes]);

  return (
    <div className="flex flex-col h-full gap-5">
      <div className="flex justify-center items-center">
        <input
          type="text"
          placeholder="EQUIPE 1 VS EQUIPE 2"
          value={equipes}
          onChange={(e) => setEquipes(e.target.value)}
          className="text-golden p-6 text-7xl text-center bg-transparent placeholder:text-golden"
        />
      </div>
      <div className="flex h-full justify-between mx-24">
        <Themes theme="JOGOS" />
        <Themes theme="CINEMA" />
        <Themes theme="HISTÓRIA" />
        <Themes theme="MÚSICA" />
        <Themes theme="ENIGMAS" />
      </div>
      <div className="top-0 right-0 absolute mt-2 mr-2">
        <ResetColour />
      </div>
    </div>
  );
}
