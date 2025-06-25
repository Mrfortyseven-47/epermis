import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import AsideNav from '../tinyComponents/asideNav'

const mockExamens = [
  {
    id: 1,
    titre: 'Examen Code Route - Série 1',
    date: '2025-06-01',
  },
  {
    id: 2,
    titre: 'Examen Code Route - Série 2',
    date: '2025-06-07',
  },
]

export default function ExamenAdmin() {
  const [examens] = useState(mockExamens)
  const navigate = useNavigate()

  const handleViewExam = (examId: number) => {
    navigate(`/admin/exam-details/${examId}`)
  }

  return (
    <div className="flex h-auto bg-gray-100">
      {/* Aside Navigation */}
      <AsideNav />

      {/* Main Content */}
      <div className="flex-1 p-18">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl font-bold text-blue-700 mb-6 text-center">Liste des examens</h1>

          <div className="space-y-4">
            {examens.map(exam => (
              <div key={exam.id} className="border p-4 rounded bg-white shadow-sm">
                <div className="flex justify-between items-center gap-2">
                  <div>
                    <h2 className="text-xl font-semibold text-blue-600">{exam.titre}</h2>
                    <p className="text-gray-600 text-sm">Créé le : {exam.date}</p>
                  </div>
                  <button
                    onClick={() => handleViewExam(exam.id)}
                    className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600"
                  >
                    Voir
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