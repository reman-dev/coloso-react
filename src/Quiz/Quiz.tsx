import { useState } from "react";
import Question from "./Question";

export default function Quiz() {
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const questions = [
    {
      question: "JavaScript로 React를 만들기 위해서는?",
      answerOptions: ["JavaScript", "C++", "Python", "Java"],
      correctAnswer: "JavaScript",
    },
    {
      question: "React를 만든 회사는?",
      answerOptions: ["페이스북", "구글", "네이버", "카카오"],
      correctAnswer: "페이스북",
    },
    {
      question: "React의 state는?",
      answerOptions: [
        "변경할 수 없는 데이터",
        "변경할 수 있는 데이터",
        "변경할 수 없는 props",
        "변경할 수 있는 props",
      ],
      correctAnswer: "변경할 수 있는 데이터",
    },
  ];

  const handleAnswer = (answer: string) => {
    if (answer === questions[currentQuestionIndex].correctAnswer) {
      setScore((preScore) => preScore + 1);
      setCurrentQuestionIndex((preIndex) => preIndex + 1);
      console.log("정답!!");
    } else {
      console.log("오답!!");
    }
  };

  return (
    <main className="container">
      <div>Score: {score}</div>
      {currentQuestionIndex < questions.length ? (
        <Question
          currentQuestionIndex={currentQuestionIndex}
          question={questions[currentQuestionIndex].question}
          answerOptions={questions[currentQuestionIndex].answerOptions}
          handleAnswer={handleAnswer}
        />
      ) : (
        <>
          <div>Quiz End</div>
          <button
            onClick={() => {
              setScore(0);
              setCurrentQuestionIndex(0);
            }}
          >
            퀴즈 다시 풀기
          </button>
        </>
      )}
    </main>
  );
}
