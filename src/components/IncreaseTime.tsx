"use client";

import Image from "next/image";

interface IncreaseTimeProps {
  onIncrease: () => void;
}

export default function IncreaseTime({ onIncrease }: IncreaseTimeProps) {
  return (
    <button onClick={onIncrease} className="focus:outline-none">
      <Image
        src="/poder1.png"
        alt="Diminuir tempo"
        width={100}
        height={50}
        className="hover:opacity-80 transition-opacity"
      />
    </button>
  );
}
