"use client";

import { useSearchParams } from "next/navigation";
import data from "../data.json";
import "../globals.css";
import { useEffect, useState } from "react";

interface Question {
  id: number;
  level: string;
  question: string;
  theme: string;
  time: number;
}

export default function Question() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [question, setQuestion] = useState<Question | null>(null);

  useEffect(() => {
    if (id) {
      // Encontra a pergunta correspondente no JSON
      const questionId = data.questions.find(
        (q) => q.id === parseInt(id)
      );
      setQuestion(questionId || null);
    }
  }, [id]);

  if (!question) {
    return <div>Pergunta não encontrada. </div>;
  }

  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-golden p-6 text-7xl text-center">
        {question.level.toUpperCase()} - {question.theme.toUpperCase()}
      </h1>
      <div className="flex flex-col justify-between h-[600px] bg-beige mx-60 rounded-xl">
        <p className="text-brown font-semibold text-4xl p-14 text-center">
          {question.question}
        </p>
        <p className="text-brown text-4xl p-14 text-center">
          TEMPO DE RESPOSTA: {question.time} SEG
        </p>
      </div>
    </div>
  );
}
