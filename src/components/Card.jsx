import React from "react";
import Link from "next/link";
import "../app/globals.css"; // Certifique-se de importar o CSS global, se necessário.

const Card = ({ points, href, id }) => {
  return (
    <Link href={`${href}?id=${id}`} passHref>
      <div className="relative flex items-center justify-center w-56 h-32 text-darkbrown text-5xl font-bold hover:opacity-70">
        <div className="absolute inset-0 bg-gradient-to-b from-white to-beige clip-hexagon"></div>
        <span className="relative">{points}</span>
      </div>
    </Link>
  );
};

export default Card;
