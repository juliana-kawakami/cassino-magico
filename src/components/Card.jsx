import React from "react";
import Link from "next/link";
import "../app/globals.css"; // Certifique-se de importar o CSS global, se necessário.

const Card = ({ number, href }) => {
  return (
    <Link href={href} passHref>
      <div className="relative flex items-center justify-center w-56 h-32 text-[#5b3624] text-5xl font-bold">
        <div className="absolute inset-0 bg-gradient-to-b from-[#f5f0e6] to-[#efe7dd] clip-hexagon"></div>
        <a className="relative">{number}</a>
      </div>
    </Link>
  );
};

export default Card;
