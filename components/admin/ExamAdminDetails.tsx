import React, { useState, useMemo } from 'react'
import { useParams } from 'react-router-dom'

type Option = {
  text: string
  correct: boolean
}

type Question = {
  id: number
  text: string
  image?: string
  options: Option[]
}

type Exam = {
  id: number
  titre: string
  date: string
  questions: Question[]
}

const mockExamens: Exam[] = [
  {
    id: 1,
    titre: 'Examen Code Route - Série 1',
    date: '2025-06-01',
    questions: [
      {
        id: 101,
        text: 'Que signifie ce panneau ?',
        image: 'https://upload.wikimedia.org/wikipedia/commons/d/d4/Panneaux_de_signalisation_-_B14%2C_A14_et_M9z.jpg',
        options: [
          { text: 'Interdiction d’entrer', correct: false },
          { text: 'Obligation de tourner', correct: false },
          { text: 'Sens interdit', correct: true },
        ],
      },
      {
        id: 102,
        text: 'Quelle est la priorité dans un rond-point ?',
        options: [
          { text: 'Ceux qui entrent', correct: false },
          { text: 'Ceux déjà dedans', correct: true },
          { text: 'Personne', correct: false },
        ],
      },
    ],
  },
]

export default function ExamAdminDetails() {
  const { examId } = useParams<{ examId: string }>()
  const [examens, setExamens] = useState<Exam[]>(mockExamens)

  const exam = useMemo(() => examens.find(e => e.id === Number(examId)), [examens, examId])

  const [newQuestion, setNewQuestion] = useState<Question>({
    id: 0,
    text: '',
    image: '',
    options: [
      { text: '', correct: false },
      { text: '', correct: false },
      { text: '', correct: false },
    ],
  })

  const handleAddQuestion = () => {
    if (!exam || !newQuestion.text.trim()) return

    const updatedExamens = examens.map(e =>
      e.id === exam.id
        ? {
            ...e,
            questions: [
              ...e.questions,
              {
                id: Date.now(),
                text: newQuestion.text.trim(),
                image: newQuestion.image?.trim() || '',
                options: newQuestion.options.filter(opt => opt.text.trim() !== ''),
              },
            ],
          }
        : e
    )
    setExamens(updatedExamens)
    setNewQuestion({
      id: 0,
      text: '',
      image: '',
      options: [
        { text: '', correct: false },
        { text: '', correct: false },
        { text: '', correct: false },
      ],
    })
  }

  const handleDeleteQuestion = (questionId: number) => {
    if (!exam) return
    const updatedExamens = examens.map(e =>
      e.id === exam.id
        ? { ...e, questions: e.questions.filter(q => q.id !== questionId) }
        : e
    )
    setExamens(updatedExamens)
  }

  const handleModifyQuestion = (questionId: number) => {
    alert(`Modifier la question avec l'ID : ${questionId}`)
    // Ici tu pourras ouvrir un modal ou rediriger vers un formulaire d'édition
  }

  if (!exam) {
    return <p className="text-center text-red-500 mt-10">Examen introuvable.</p>
  }

  return (
  <div className="flex w-screen min-h-screen bg-gray-100">
    {/* Formulaire à gauche */}
    <div className="w-1/4 bg-blue-50 border-r border-blue-300 p-10">
      <h3 className="text-lg font-semibold mb-4 text-blue-600">Ajouter une nouvelle question</h3>
      <div className="space-y-4">
        <input
          type="text"
          placeholder="Texte de la question"
          value={newQuestion.text}
          onChange={(e) => setNewQuestion({ ...newQuestion, text: e.target.value })}
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          placeholder="URL de l'image (optionnel)"
          value={newQuestion.image}
          onChange={(e) => setNewQuestion({ ...newQuestion, image: e.target.value })}
          className="border p-2 rounded w-full"
        />
        {newQuestion.options.map((opt, index) => (
          <div key={index} className="flex items-center gap-2">
            <input
              type="text"
              placeholder={`Option ${index + 1}`}
              value={opt.text}
              onChange={(e) =>
                setNewQuestion({
                  ...newQuestion,
                  options: newQuestion.options.map((o, i) =>
                    i === index ? { ...o, text: e.target.value } : o
                  ),
                })
              }
              className="border p-2 rounded flex-1"
            />
            <label className="flex items-center gap-1">
              <input
                type="checkbox"
                checked={opt.correct}
                onChange={(e) =>
                  setNewQuestion({
                    ...newQuestion,
                    options: newQuestion.options.map((o, i) =>
                      i === index ? { ...o, correct: e.target.checked } : o
                    ),
                  })
                }
              />
              Correct
            </label>
          </div>
        ))}
      </div>
      <button
        onClick={handleAddQuestion}
        className="mt-4 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition w-full"
      >
        Ajouter la question
      </button>
    </div>

    {/* Questions à droite */}
    <div className="w-3/4 p-8 overflow-y-auto ">
      <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-10">
        <h2 className="text-2xl font-bold mb-4 text-blue-700">{exam.titre}</h2>
        <p className="text-sm text-gray-600">Créé le : {exam.date}</p>
        <p className="text-sm text-gray-600 mb-4">Nombre de questions : {exam.questions.length}</p>

        <h3 className="text-lg font-semibold mb-2 text-blue-600">Questions :</h3>
        <div className="space-y-4">
          {exam.questions.map((q, index) => (
            <div key={q.id} className="bg-white p-4 rounded border">
              <p className="font-medium mb-2">
                {index + 1}. {q.text}
              </p>
              {q.image && (
                <img src={q.image} alt="question" className="w-32 mb-2 rounded" />
              )}
              <ul className="list-disc ml-6 text-gray-700">
                {q.options.map((opt, idx) => (
                  <li key={idx}>
                    {opt.text} {opt.correct && <span className="text-green-600">(Correct)</span>}
                  </li>
                ))}
              </ul>
              <div className="mt-3 flex gap-3">
                <button
                  onClick={() => handleModifyQuestion(q.id)}
                  className="px-2 py-1 bg-yellow-400 text-white rounded hover:bg-yellow-500 text-sm"
                >
                  Modifier
                </button>
                <button
                  onClick={() => handleDeleteQuestion(q.id)}
                  className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 text-sm"
                >
                  Supprimer
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  </div>
)

}
