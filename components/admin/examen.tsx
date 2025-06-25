import React, { useState } from 'react'

const sampleQuestions = [
  {
    question: "Quel est le rôle principal d’un feu orange ?",
    options: [
      "Préparer à l’arrêt",
      "Accélérer pour passer",
      "Ignorer le feu",
      "Signaler un danger imminent"
    ],
    answer: 0
  },
  {
    question: "Sur autoroute, la vitesse maximale est de ?",
    options: [
      "100 km/h",
      "110 km/h",
      "130 km/h",
      "150 km/h"
    ],
    answer: 2
  }
]

export default function Examen() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [selectedOption, setSelectedOption] = useState<number | null>(null)
  const [showResult, setShowResult] = useState(false)
  const [score, setScore] = useState(0)

  const currentQuestion = sampleQuestions[currentIndex]

  const handleNext = () => {
    if (selectedOption === currentQuestion.answer) {
      setScore(prev => prev + 1)
    }

    if (currentIndex < sampleQuestions.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setSelectedOption(null)
    } else {
      setShowResult(true)
    }
  }

  return (
    <div className="max-w-xl mx-auto mt-10 bg-white shadow-lg p-6 rounded-xl">
      <h2 className="text-2xl font-bold mb-6 text-blue-600 text-center">Examen de Code</h2>

      {showResult ? (
        <div className="text-center">
          <p className="text-xl font-semibold text-green-600">Votre score : {score} / {sampleQuestions.length}</p>
        </div>
      ) : (
        <div>
          <p className="text-lg font-semibold mb-4">{currentQuestion.question}</p>

          <div className="space-y-2">
            {currentQuestion.options.map((option, index) => (
              <label key={index} className={`block p-3 rounded border cursor-pointer 
                ${selectedOption === index ? 'bg-blue-100 border-blue-500' : 'border-gray-300 hover:bg-gray-50'}`}>
                <input
                  type="radio"
                  name="option"
                  className="mr-2"
                  checked={selectedOption === index}
                  onChange={() => setSelectedOption(index)}
                />
                {option}
              </label>
            ))}
          </div>

          <button
            disabled={selectedOption === null}
            onClick={handleNext}
            className="mt-6 w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
          >
            {currentIndex === sampleQuestions.length - 1 ? 'Valider' : 'Suivant'}
          </button>
        </div>
      )}
    </div>
  )
}
