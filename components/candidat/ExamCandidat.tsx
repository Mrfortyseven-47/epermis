import React from 'react'
import Footer from '../tinyComponents/footer'

const examens = [
    {
        id: 1,
        titre: 'Examen Code de la Route - Série 1',
        description: 'Testez vos connaissances sur les règles de circulation et la signalisation.',
        duree: 30,
        nombreQuestions: 20,
        date: '2025-07-01',
        niveau: 'Débutant',
    },
    {
        id: 2,
        titre: 'Examen Code de la Route - Série 2',
        description: 'Mettez à l\'épreuve vos compétences en conduite et sécurité routière.',
        duree: 45,
        nombreQuestions: 30,
        date: '2025-07-15',
        niveau: 'Intermédiaire',
    },
    {
        id: 3,
        titre: 'Examen Code de la Route - Série 3',
        description: 'Préparez-vous pour l\'examen pratique avec des questions avancées.',
        duree: 60,
        nombreQuestions: 40,
        date: '2025-08-01',
        niveau: 'Avancé',
    },
]

export default function ExamCandidat() {
    return (
        <>
        <div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-blue-100 py-10 flex items-center">
            <div className="max-w-6xl mx-auto bg-white rounded-3xl shadow-2xl p-8 w-full">
                <h1 className="text-3xl font-bold text-blue-700 mb-8 text-center">
                    Examens disponibles
                </h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {examens.map((exam) => (
                        <div
                            key={exam.id}
                            className="p-8 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl shadow-lg flex flex-col gap-2"
                        >
                            <h2 className="text-2xl font-bold mb-1">{exam.titre}</h2>
                            <p className="mb-2">{exam.description}</p>
                            <div className="flex flex-wrap gap-4 text-sm mb-2">
                                <span className="bg-white/20 px-3 py-1 rounded-full">
                                    Durée : <b>{exam.duree} min</b>
                                </span>
                                <span className="bg-white/20 px-3 py-1 rounded-full">
                                    Questions : <b>{exam.nombreQuestions}</b>
                                </span>
                                <span className="bg-white/20 px-3 py-1 rounded-full">
                                    Niveau : <b>{exam.niveau}</b>
                                </span>
                                <span className="bg-white/20 px-3 py-1 rounded-full">
                                    Date : <b>{exam.date}</b>
                                </span>
                            </div>
                            <button className="mt-2 bg-white text-blue-700 px-5 py-2 rounded-full font-semibold hover:bg-gray-100 transition self-end">
                                Commencer l'examen
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        <Footer />
        </>
    )
}