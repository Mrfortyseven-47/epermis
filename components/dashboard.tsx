import React from 'react'
import AsideNav from './tinyComponents/asideNav'
import Footer from './tinyComponents/footer'

export default function Dashboard() {
  const users = [
    { id: 1, firstName: 'Alice', lastName: 'Dupont', email: 'alice@example.com', phone: '+33 6 12 34 56 78' },
    { id: 2, firstName: 'Bob', lastName: 'Martin', email: 'bob@example.com', phone: '+33 6 98 76 54 32' },
    { id: 3, firstName: 'Charlie', lastName: 'Durand', email: 'charlie@example.com', phone: '+33 6 11 22 33 44' },
  ]

  const overviewData = {
    totalUsers: 120,
    totalCourses: 15,
    totalExams: 45,
    pendingRequests: 8,
  }

  const lastActivity = {
    lastUser: 'David Moreau',
    lastExamPosted: '2025-06-10',
    lastRequestDate: '2025-06-08',
  }

  const now = new Date().toLocaleDateString()

  const cards = [
    {
      label: 'Utilisateurs',
      value: overviewData.totalUsers,
      color: 'text-blue-600',
      icon: 'group',
    },
    {
      label: 'Cours',
      value: overviewData.totalCourses,
      color: 'text-green-600',
      icon: 'menu_book',
    },
    {
      label: 'Examens',
      value: overviewData.totalExams,
      color: 'text-purple-600',
      icon: 'assignment',
    },
    {
      label: 'Demandes en attente',
      value: overviewData.pendingRequests,
      color: 'text-red-600',
      icon: 'pending_actions',
    },
  ]

  return (
    <div className="w-screen min-h-screen bg-gray-100">
      <AsideNav />

      <main className="flex-1 ml-64 p-6">
        {/* Titre du Dashboard */}
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Tableau de bord administrateur</h1>

        {/* Section Résumé */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          {cards.map((card, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 flex flex-col items-center text-center">
              <span className={`material-icons text-4xl mb-2 ${card.color}`}>{card.icon}</span>
              <h3 className="text-xl font-semibold text-gray-700">{card.label}</h3>
              <p className={`text-3xl font-extrabold ${card.color}`}>{card.value}</p>
            </div>
          ))}
        </div>

        {/* Liste des utilisateurs */}
        <div className="bg-white rounded-xl shadow-sm p-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Liste des utilisateurs</h2>
          <div className="overflow-x-auto">
            <table className="min-w-full border border-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 border border-gray-300 text-left text-sm font-medium text-gray-600">Photo</th>
                  <th className="px-4 py-3 border border-gray-300 text-left text-sm font-medium text-gray-600">Nom</th>
                  <th className="px-4 py-3 border border-gray-300 text-left text-sm font-medium text-gray-600">Prénom</th>
                  <th className="px-4 py-3 border border-gray-300 text-left text-sm font-medium text-gray-600">Email</th>
                  <th className="px-4 py-3 border border-gray-300 text-left text-sm font-medium text-gray-600">Téléphone</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-100 transition-colors">
                    <td className="px-4 py-3 border border-gray-300">
                      <img
                        src="../../src/assets/exam.jpg"
                        alt="Photo utilisateur"
                        className="w-12 h-12 rounded-full object-cover"
                      />
                    </td>
                    <td className="px-4 py-3 border border-gray-300">{user.lastName}</td>
                    <td className="px-4 py-3 border border-gray-300">{user.firstName}</td>
                    <td className="px-4 py-3 border border-gray-300">{user.email}</td>
                    <td className="px-4 py-3 border border-gray-300">{user.phone}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Informations supplémentaires */}
        <div className="bg-white rounded-xl shadow-sm p-6 mt-6">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Informations supplémentaires</h2>

          <p className="text-gray-600 mb-2">
            Date actuelle : <span className="font-semibold">{now}</span>
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-1">Activité récente</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>Dernier utilisateur inscrit : <span className="font-medium">{lastActivity.lastUser}</span></li>
                <li>Dernier examen publié : <span className="font-medium">{lastActivity.lastExamPosted}</span></li>
                <li>Dernière demande reçue : <span className="font-medium">{lastActivity.lastRequestDate}</span></li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-700 mb-1">Suggestions & alertes</h3>
              <ul className="list-disc list-inside text-gray-600 space-y-1">
                <li>{overviewData.pendingRequests > 0 ? `${overviewData.pendingRequests} demandes sont en attente` : `Aucune demande en attente`}</li>
                <li>{overviewData.totalCourses === 0 ? `Aucun cours actif pour le moment` : `Nombre total de cours : ${overviewData.totalCourses}`}</li>
              </ul>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  )
}