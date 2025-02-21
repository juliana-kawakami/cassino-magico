import "./globals.css";
import Themes from "../components/Themes";

export const metadata = {
  title: "Cassino Mágico",
};

export default function Home() {
  return (
    <div className="flex flex-col h-full w-full gap-5">
      <div className="flex justify-center items-center w-full">
        <h1 className="text-golden p-6 text-7xl text-center">
          EQUIPE 3 VS EQUIPE 4
        </h1>
      </div>
      <div className="flex h-full justify-between mx-24">
        <Themes theme="JOGOS" />
        <Themes theme="CINEMA" />
        <Themes theme="HISTÓRIA" />
        <Themes theme="MÚSICA" />
        <Themes theme="ENIGMAS" />
      </div>
    </div>
  );
}
