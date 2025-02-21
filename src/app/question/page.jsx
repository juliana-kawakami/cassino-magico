
import "../globals.css";

export default function Question() {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-golden p-6 text-7xl text-center">
        FÁCIL - JOGOS
      </h1>
      <div className="flex flex-col justify-between h-[600px] bg-beige mx-60 rounded-xl">
        <p className="text-brown font-semibold text-4xl p-14 text-center">
          Qual foi o primeiro jogo desenvolvido pela Nintendo a apresentar o
          personagem Mario, lançado originalmente em 1981 para fliperamas?
        </p>
        <p className="text-brown text-4xl p-14 text-center">TEMPO DE RESPOSTA: 30 SEG</p>
      </div>
      <div></div>
    </div>
  );
}
