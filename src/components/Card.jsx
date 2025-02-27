"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation"; // Importe o useRouter do Next.js 13
import "../app/globals.css";

const Card = ({ points, href, id }) => {
  const localStorageKey = `card-${id}-clicado`;
  const [clicado, setClicado] = useState(false);
  const router = useRouter(); // Use o useRouter do Next.js 13

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

  return (
    <Link href={`${href}?id=${id}`} passHref>
      <div
        className={`relative flex items-center justify-center w-56 h-32 text-darkbrown text-5xl font-bold transition-transform duration-300 ease-in-out hover:scale-105 ${
          clicado ? "bg-[#ffad58]" : "bg-gradient-to-b from-white to-beige"
        } clip-hexagon`}
        onClick={handleClick} // Usa a função handleClick personalizada
      >
        <span className="relative">{points}</span>
      </div>
    </Link>
  );
};

export default Card;
