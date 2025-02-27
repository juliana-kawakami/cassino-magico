"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import "../app/globals.css";

const Card = ({ points, href, id }) => {
  const localStorageKey = `card-${id}-clicado`;

  // Estado inicial baseado no localStorage
  const [clicado, setClicado] = useState(false);

  useEffect(() => {
    const salvo = localStorage.getItem(localStorageKey);
    if (salvo === "true") {
      setClicado(true);
    }

    // Ouvinte para resetar os cards quando o evento for disparado
    const handleReset = () => {
      setClicado(false);
    };

    window.addEventListener("resetCards", handleReset);

    return () => {
      window.removeEventListener("resetCards", handleReset);
    };
  }, []);

  const handleClick = () => {
    setClicado(true);
    localStorage.setItem(localStorageKey, "true");
  };

  return (
    <Link href={`${href}?id=${id}`} passHref>
      <div
        className={`relative flex items-center justify-center w-56 h-32 text-darkbrown text-5xl font-bold hover:opacity-70 ${
          clicado ? "bg-[#dd2e44]" : "bg-gradient-to-b from-white to-beige"
        } clip-hexagon`}
        onClick={handleClick}
      >
        <span className="relative">{points}</span>
      </div>
    </Link>
  );
};

export default Card;
