"use client";

import Image from "next/image";

interface DecreaseTimeProps {
  onDecrease: () => void;
}

export default function DecreaseTime({ onDecrease }: DecreaseTimeProps) {
  return (
    <button onClick={onDecrease} className="focus:outline-none">
      <Image
        src="/poder2.png"
        alt="Diminuir tempo"
        width={100}
        height={50}
        className="hover:opacity-80 transition-opacity"
      />
    </button>
  );
}
