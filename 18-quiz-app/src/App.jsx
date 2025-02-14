import React, { useState } from "react";

const questions = [
  {
    question: "What is the capital of France?",
    options: ["Paris", "Berlin", "Madrid", "Rome"],
    correctAnswer: "Paris",
  },
  {
    question: "Which planet is known as the Red Planet?",
    options: ["Mars", "Venus", "Jupiter", "Saturn"],
    correctAnswer: "Mars",
  },
  {
    question: 'Who wrote "Romeo and Juliet"?',
    options: [
      "Charles Dickens",
      "Jane Austen",
      "William Shakespeare",
      "Mark Twain",
    ],
    correctAnswer: "William Shakespeare",
  },
];

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOptions, setSelectedOptions] = useState(Array(questions.length).fill(null));
  const [score, setScore] = useState(0);

  const handleSelectedOption = (option) => {
    const updatedSelectedOptions = [...selectedOptions];
    updatedSelectedOptions[currentQuestion] = option;
    setSelectedOptions(updatedSelectedOptions);
  };

  const handlePreviousQuestion = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleNextQuestion = () => {
    if (
      selectedOptions[currentQuestion] ===
      questions[currentQuestion].correctAnswer
    ) {
      setScore(score + 1);
    }
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleRestartQuiz = () => {
    setCurrentQuestion(0);
    setScore(0);
    setSelectedOptions(new Array(questions.length).fill(null));
    setShowResult(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-6 bg-gradient-to-br from-blue-100 to-blue-200">
      <h1 className="text-4xl font-bold text-blue-800 mb-8">Quiz App</h1>
      {!showResult ? (
        <div className="max-w-xl w-full bg-white rounded-lg shadow-lg p-6 space-y-6">
          <h2 className="text-2xl font-semibold text-blue-700">
            Question {currentQuestion + 1} of {questions.length}
          </h2>
          <p className="text-lg font-medium text-gray-800">
            {questions[currentQuestion].question}
          </p>
          <div className="flex flex-col space-y-3">
            {questions[currentQuestion].options.map((option) => (
              <button
                key={option}
                className={`px-4 py-2 rounded-lg text-lg font-medium shadow-sm transition-colors duration-300
                  ${selectedOptions[currentQuestion] === option
                    ? "bg-green-400 text-white"
                    : "bg-blue-200 text-blue-800 hover:bg-blue-300"
                  }`}
                onClick={() => handleSelectedOption(option)}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="flex justify-between mt-6">
            <button
              onClick={handlePreviousQuestion}
              disabled={currentQuestion === 0}
              className="px-4 py-2 bg-yellow-400 text-yellow-900 rounded-lg shadow-md disabled:opacity-50"
            >
              Previous
            </button>
            <button
              onClick={handleNextQuestion}
              className="px-4 py-2 bg-yellow-400 text-yellow-900 rounded-lg shadow-md"
            >
              {currentQuestion < questions.length - 1 ? "Next" : "Finish"}
            </button>
          </div>
        </div>
      ) : (
        <div className="max-w-xl w-full bg-white rounded-lg shadow-lg p-6 space-y-6 text-center">
          <h3 className="text-3xl font-bold text-green-600">Quiz Completed</h3>
          <p className="text-xl text-gray-700">
            Your Score: {score} / {questions.length}
          </p>
          <button
            onClick={handleRestartQuiz}
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700">
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
};

export default App;
