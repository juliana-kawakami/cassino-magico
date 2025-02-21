import React from "react";
import Card from "../components/Card";
import data from "../app/data.json";

const Themes = ({ theme }) => {
  const themeQuestions = data.questions.filter(
    (q) => q.theme.toUpperCase() === theme.toUpperCase()
  );

  const pointsPerLevel = {
    fácil: 1,
    médio: 2,
    difícil: 3,
    impossível: 5,
  };

  return (
    <div className="flex flex-col bg-darkbrown h-full text-beige text-5xl p-8 items-center gap-9">
      <h3 className="text-center">{theme}</h3>
      <div className="flex flex-col justify-between h-full gap-5">
        {themeQuestions.map((q) => (
          <Card
            key={q.id}
            points={pointsPerLevel[q.level]}
            href="/question"
            id={q.id}
          />
        ))}
      </div>
    </div>
  );
};

export default Themes;
