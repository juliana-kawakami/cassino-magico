"use client";

import { useSearchParams, useRouter } from "next/navigation";
import data from "../data.json";
import "../globals.css";
import { useEffect, useState, Suspense } from "react";

interface Question {
  id: number;
  level: string;
  question: string;
  theme: string;
  time: number;
}

function QuestionContent() {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");
  const router = useRouter();

  const [question, setQuestion] = useState<Question | null>(null);
  const [timeLeft, setTimeLeft] = useState<number | null>(null);

  useEffect(() => {
    if (id) {
      // Encontra a pergunta correspondente no JSON
      const questionId = data.questions.find((q) => q.id === parseInt(id));
      if (questionId) {
        setQuestion(questionId);
        setTimeLeft(questionId.time); // Inicializa o tempo restante
      }
    }
  }, [id]);

  useEffect(() => {
    if (timeLeft === null || timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime === null || prevTime <= 0) {
          clearInterval(interval); // Para o intervalo se o tempo for nulo ou zero
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  useEffect(() => {
    if (timeLeft === 0) {
      // Redireciona para outra página quando o tempo chegar a zero
      router.push("/time-over"); // Substitua "/outra-pagina" pela rota desejada
    }
  }, [timeLeft, router]);

  if (!question) {
    return <div>Pergunta não encontrada.</div>;
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
          TEMPO DE RESPOSTA: {timeLeft !== null ? timeLeft : question.time} SEG
        </p>
      </div>
    </div>
  );
}

export default function Question() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <QuestionContent />
    </Suspense>
  );
}
