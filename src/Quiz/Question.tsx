import { StrictMode } from "react";

interface QuestionProps {
  currentQuestionIndex: number;
  question: string;
  answerOptions: string[];
  handleAnswer: (answer: string) => void;
}

export default function Question({
  currentQuestionIndex,
  question,
  answerOptions,
  handleAnswer,
}: QuestionProps) {
  return (
    <StrictMode>
      <div>{currentQuestionIndex + 1}번 문제</div>
      <h2>{question}</h2>
      <div className="grid">
        {answerOptions.map((answer, index) => (
          <button key={index} onClick={() => handleAnswer(answer)}>
            {answer}
          </button>
        ))}
      </div>
    </StrictMode>
  );
}
