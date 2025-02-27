"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import CustomContextMenu from "./CustomContextMenu"; // Importe o CustomContextMenu
import "../app/globals.css";

const Card = ({ points, href, id }) => {
  const localStorageKey = `card-${id}-clicado`;
  const [clicado, setClicado] = useState(false);
  const [contextMenuPosition, setContextMenuPosition] = useState(null); // Estado para armazenar a posição do menu de contexto
  const router = useRouter();

  useEffect(() => {
    const salvo = localStorage.getItem(localStorageKey);
    if (salvo === "true") {
      setClicado(true);
    }

    const handleReset = () => {
      setClicado(false);
    };

    window.addEventListener("resetCards", handleReset);

    return () => {
      window.removeEventListener("resetCards", handleReset);
    };
  }, []);

  const handleClick = (e) => {
    e.preventDefault(); // Impede o comportamento padrão do Link
    const targetUrl = `${href}?id=${id}`;

    setTimeout(() => {
      setClicado(true);
    }, 300); // Delay de 300ms para garantir que a cor seja atualizada depois de acessar a pergunta
    localStorage.setItem(localStorageKey, "true");
    router.push(targetUrl);
  };

  const handleRightClick = (e) => {
    e.preventDefault(); // Impede o menu de contexto padrão do navegador
    setContextMenuPosition({ x: e.pageX, y: e.pageY }); // Define a posição do menu
  };

  const resetColor = () => {
    setClicado(false); // Reseta a cor do card
    localStorage.setItem(localStorageKey, "false"); // Atualiza o localStorage
    setContextMenuPosition(null); // Fecha o menu de contexto
  };

  const handleBack = () => {
    setContextMenuPosition(null); // Fecha o menu de contexto
  };

  const handleClickOutside = () => {
    setContextMenuPosition(null); // Fecha o menu de contexto ao clicar fora
  };

  return (
    <div onClick={handleClickOutside}>
      <Link href={`${href}?id=${id}`} passHref>
        <div
          className={`relative flex items-center justify-center w-56 h-32 text-darkbrown text-5xl font-bold transition-transform duration-300 ease-in-out hover:scale-105 ${
            clicado ? "bg-[#ffad58]" : "bg-gradient-to-b from-white to-beige"
          } clip-hexagon`}
          onClick={handleClick} // Usa a função handleClick personalizada
          onContextMenu={handleRightClick} // Adiciona o evento de clique direito
        >
          <span className="relative">{points}</span>
        </div>
      </Link>

      {/* Menu de contexto personalizado */}
      <CustomContextMenu
        onReset={resetColor} // Função para resetar a cor
        onBack={handleBack}
        position={contextMenuPosition} // Posição do menu
      />
    </div>
  );
};

export default Card;
