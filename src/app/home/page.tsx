"use client";
import { useState, useEffect } from "react";
import "../globals.css";
import Themes from "../../components/Themes";
import ResetColour from "../../components/ResetColour";

export default function SelectionScreen() {
  const [equipes, setEquipes] = useState("");
  const [pontosEquipe1, setPontosEquipe1] = useState(0);
  const [pontosEquipe2, setPontosEquipe2] = useState(0);
  const [isMounted, setIsMounted] = useState(false); // Garante que só renderizamos após montar

  // Recupera os valores salvos ao carregar a página
  useEffect(() => {
    setIsMounted(true); // Marca que o componente montou

    const savedEquipes = localStorage.getItem("equipes");
    const savedPontos1 = localStorage.getItem("pontosEquipe1");
    const savedPontos2 = localStorage.getItem("pontosEquipe2");

    if (savedEquipes) setEquipes(savedEquipes);
    if (savedPontos1) setPontosEquipe1(parseInt(savedPontos1) || 0);
    if (savedPontos2) setPontosEquipe2(parseInt(savedPontos2) || 0);
  }, []);

  // Atualiza os valores no localStorage sempre que mudam
  useEffect(() => {
    if (isMounted) {
      localStorage.setItem("equipes", equipes);
      localStorage.setItem("pontosEquipe1", pontosEquipe1.toString());
      localStorage.setItem("pontosEquipe2", pontosEquipe2.toString());
    }
  }, [equipes, pontosEquipe1, pontosEquipe2, isMounted]);

  // Escuta o evento de reset e redefine os pontos
  useEffect(() => {
    const resetPoints = () => {
      setPontosEquipe1(0);
      setPontosEquipe2(0);
    };

    window.addEventListener("resetPoints", resetPoints);
    return () => window.removeEventListener("resetPoints", resetPoints);
  }, []);

  return (
    <div className="flex flex-col h-full w-full gap-5">
      {/* Input para o nome das equipes */}
      <div className="flex justify-center items-center w-full">
        {/* Inputs para os pontos das equipes */}
        <div className="flex justify-between items-center w-full px-24">
          {/* Equipe 1 */}
          <input
            type="number"
            value={pontosEquipe1}
            onChange={(e) => setPontosEquipe1(parseInt(e.target.value) || 0)}
            className="text-golden p-6 text-5xl text-center bg-transparent placeholder:text-golden w-32 border border-golden rounded-md"
          />
          <input
            type="text"
            placeholder="EQUIPE 1 VS EQUIPE 2"
            value={equipes}
            onChange={(e) => setEquipes(e.target.value)}
            className="text-golden p-6 text-7xl text-center bg-transparent placeholder:text-golden"
          />
          {/* Equipe 2 */}
          <input
            type="number"
            value={pontosEquipe2}
            onChange={(e) => setPontosEquipe2(parseInt(e.target.value) || 0)}
            className="text-golden p-6 text-5xl text-center bg-transparent placeholder:text-golden w-32 border border-golden rounded-md"
          />
        </div>
      </div>

      {/* Temas */}
      <div className="flex h-full justify-between mx-24">
        <Themes theme="JOGOS" />
        <Themes theme="CINEMA" />
        <Themes theme="HISTÓRIA" />
        <Themes theme="MÚSICA" />
        <Themes theme="ENIGMAS" />
      </div>

      {/* Botão para resetar cores */}
      <div className="top-0 right-0 absolute mt-2 mr-2">
        <ResetColour />
      </div>
    </div>
  );
}
