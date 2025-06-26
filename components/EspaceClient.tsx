import React from 'react'
import Footer from './tinyComponents/footer'
import { Link } from 'react-router-dom'

export default function EspaceClient() {
  const clientInfo = {
    name: 'Alice Dupont',
    email: 'alice@example.com',
    phone: '+33 6 12 34 56 78',
    progress: 75,
    nextExam: {
      date: '2025-06-15',
      time: '10:00',
      location: 'En ligne',
    },
    otherInfo: {
      completedCourses: 5,
      pendingCourses: 2,
      totalExams: 3,
    },
  }

  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 py-10 sm:p-15">
      <div className="w-6/7 mx-auto bg-white shadow-2xl rounded-3xl p-6 sm:p-10 space-y-10">

        {/* HEADER */}
        <div className="text-center space-y-2">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700">👩‍🎓 Espace Candidat</h1>
          <p className="text-gray-600 text-lg sm:text-xl">Bienvenue, <span className="font-semibold">{clientInfo.name}</span>. Voici un aperçu complet de votre parcours.</p>
        </div>

        {/* RÉCAPITULATIF */}
        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-blue-50 rounded-xl p-4 shadow-sm">
            <h3 className="font-semibold text-gray-700 mb-2">Informations personnelles</h3>
            <p><span className="font-medium">📧 Email :</span> {clientInfo.email}</p>
            <p><span className="font-medium">📱 Téléphone :</span> {clientInfo.phone}</p>
          </div>
          <div className="bg-blue-50 rounded-xl p-4 shadow-sm">
            <h3 className="font-semibold text-gray-700 mb-2">Progression</h3>
            <div className="w-full bg-gray-200 h-5 rounded-full relative">
              <div className="bg-blue-600 h-5 rounded-full transition-all duration-500" style={{ width: `${clientInfo.progress}%` }}></div>
              <span className="absolute inset-0 flex justify-center items-center text-white font-bold">{clientInfo.progress}%</span>
            </div>
          </div>
          <div className="bg-blue-50 rounded-xl p-4 shadow-sm">
            <h3 className="font-semibold text-gray-700 mb-2">Prochain Examen</h3>
            <p>📅 {clientInfo.nextExam.date}</p>
            <p>🕙 {clientInfo.nextExam.time}</p>
            <p>📍 {clientInfo.nextExam.location}</p>
          </div>
        </section>

        {/* BLOCS PRINCIPAUX */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition">
            <Link to="/candidat/cours" className="no-underline text-white">
              <h2 className="text-2xl font-bold mb-2">📚 Accéder à mes cours</h2>
              <p>Continuez vos formations à votre rythme.</p>
            </Link>
          </div>
          <div className="p-6 bg-gradient-to-r from-green-500 to-green-700 text-white rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition">
            <Link to="/candidat/examen" className="no-underline text-white">
            <h2 className="text-2xl font-bold mb-2">📝 Gérer mes examens</h2>
            <p>Consultez, planifiez ou révisez vos examens.</p>
            </Link>
          </div>
        </section>

        {/* STATISTIQUES */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">📊 Statistiques</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm text-center">
              <p className="text-3xl font-bold text-green-600">{clientInfo.otherInfo.completedCourses}</p>
              <p className="text-gray-700">Cours terminés</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm text-center">
              <p className="text-3xl font-bold text-yellow-600">{clientInfo.otherInfo.pendingCourses}</p>
              <p className="text-gray-700">Cours en attente</p>
            </div>
            <div className="bg-gray-100 p-4 rounded-lg shadow-sm text-center">
              <p className="text-3xl font-bold text-purple-600">{clientInfo.otherInfo.totalExams}</p>
              <p className="text-gray-700">Examens passés</p>
            </div>
          </div>
        </section>

        {/* ACTIONS SECONDAIRES */}
        <section>
          <h2 className="text-xl font-semibold text-gray-800 mb-4">📂 Actions utiles</h2>
          <div className="flex flex-wrap gap-4">
            <button className="bg-blue-600 text-white px-6 py-3 rounded-full shadow hover:bg-blue-700 transition">
              📄 Télécharger mes documents
            </button>
            <button className="bg-indigo-600 text-white px-6 py-3 rounded-full shadow hover:bg-indigo-700 transition">
              🤝 Contacter un formateur
            </button>
            <button className="bg-gray-700 text-white px-6 py-3 rounded-full shadow hover:bg-black transition">
              ⚙️ Modifier mes informations
            </button>
          </div>
        </section>
      </div>
    </div>
    <Footer />
    </>
  )
}
