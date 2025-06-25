import React, { useState } from 'react'
import AsideNav from '../tinyComponents/asideNav'

interface Cours {
  id: number
  titre: string
  description: string
  type: 'Texte' | 'Vidéo' | 'PDF'
}

export default function CoursAdmin() {
  const [coursList, setCoursList] = useState<Cours[]>([
    {
      id: 1,
      titre: 'Les règles de priorité',
      description: 'Apprenez qui passe en premier à une intersection.',
      type: 'Texte',
    },
    {
      id: 2,
      titre: 'La signalisation',
      description: 'Comprendre les différents panneaux de signalisation.',
      type: 'PDF',
    },
  ])

  const [showForm, setShowForm] = useState(false)
  const [titre, setTitre] = useState('')
  const [description, setDescription] = useState('')
  const [type, setType] = useState<'Texte' | 'Vidéo' | 'PDF'>('Texte')

  const handleCreateCours = () => {
    const newCours: Cours = {
      id: Date.now(),
      titre,
      description,
      type,
    }
    setCoursList([...coursList, newCours])
    setTitre('')
    setDescription('')
    setType('Texte')
    setShowForm(false)
  }

  const handleDelete = (id: number) => {
    setCoursList(coursList.filter(c => c.id !== id))
  }

  return (
    <div className="flex h-auto bg-gray-100">
      {/* Aside Navigation */}
      <AsideNav />

      {/* Main Content */}
      <div className="flex-1 p-8">
        <div className="max-w-6xl mx-auto bg-white shadow-md rounded-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold text-gray-800">Gestion des cours e-permis</h1>
            <button
              onClick={() => setShowForm(true)}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
            >
              + Ajouter un cours
            </button>
          </div>

          {/* Formulaire */}
          {showForm && (
            <div className="bg-blue-50 border border-blue-300 p-4 rounded mb-6">
              <h2 className="text-lg font-semibold mb-4">Nouveau cours</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Titre"
                  value={titre}
                  onChange={(e) => setTitre(e.target.value)}
                  className="border p-2 rounded"
                />
                <select
                  value={type}
                  onChange={(e) => setType(e.target.value as any)}
                  className="border p-2 rounded"
                >
                  <option>Texte</option>
                  <option>Vidéo</option>
                  <option>PDF</option>
                </select>
                <textarea
                  placeholder="Description du cours"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="border p-2 rounded col-span-full"
                />
              </div>
              <div className="mt-4 flex gap-2">
                <button
                  className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
                  onClick={handleCreateCours}
                >
                  Enregistrer
                </button>
                <button
                  className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400 transition"
                  onClick={() => setShowForm(false)}
                >
                  Annuler
                </button>
              </div>
            </div>
          )}

          {/* Liste des cours */}
          <ul className="space-y-4">
            {coursList.map((cours) => (
              <li
                key={cours.id}
                className="border p-4 rounded flex justify-between items-center hover:shadow-md transition"
              >
                <div>
                  <h3 className="font-semibold text-lg text-gray-800">{cours.titre}</h3>
                  <p className="text-gray-600 text-sm">{cours.description}</p>
                  <span className="text-sm text-blue-600">Type : {cours.type}</span>
                </div>
                <div className="flex gap-2">
                  <button className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600 transition">
                    Modifier
                  </button>
                  <button
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                    onClick={() => handleDelete(cours.id)}
                  >
                    Supprimer
                  </button>
                </div>
              </li>
            ))}
          </ul>

          {coursList.length === 0 && (
            <p className="text-center text-gray-500 mt-10">Aucun cours disponible.</p>
          )}
        </div>
      </div>
    </div>
  )
}