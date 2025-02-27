"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function Home() {
  const router = useRouter();
  const [isSelected, setIsSelected] = useState(false); // Estado para controlar a animação

  const handleClick = () => {
    setIsSelected(true); // Ativa a animação
    setTimeout(() => {
      router.push("/home"); // Redireciona após um delay
    }, 2000); // Delay de 2 segundos (tempo da animação)
  };

  return (
    <div className="w-full h-full overflow-hidden">
      <img
        src="/cassino.svg"
        alt="Iniciar jogo"
        className={`w-[1000px] h-fit object-cover cursor-pointer transition-transform duration-300 ease-in-out hover:scale-105 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
          isSelected ? "animate-spin-outline" : "" // Aplica a animação quando selecionada
        }`}
        onClick={handleClick} // Usa a função handleClick para gerenciar o clique
      />
    </div>
  );
}
