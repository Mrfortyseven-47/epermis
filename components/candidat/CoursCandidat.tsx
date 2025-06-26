import React from 'react'

const coursList = [
	{
		id: 1,
		titre: '📚 Cours 1',
		description: 'Description du cours 1. Cliquez pour en savoir plus.',
	},
	{
		id: 2,
		titre: '🚦 Cours 2',
		description: 'Description du cours 2. Découvrez les règles de circulation.',
	},
	{
		id: 3,
		titre: '🛑 Cours 3',
		description: 'Description du cours 3. Apprenez la signalisation routière.',
	},
	{
		id: 4,
		titre: '🚗 Cours 4',
		description: 'Description du cours 4. Maîtrisez la conduite en ville.',
	},
	{
		id: 5,
		titre: '🔰 Cours 5',
		description: "Description du cours 5. Préparez-vous à l'examen pratique.",
	},
  
]

export default function CoursCandidat() {
	return (
		<div className="min-h-screen w-full bg-gradient-to-br from-blue-50 via-white to-blue-100 py-10 sm:p-15">
			<div className="w-6/7 mx-auto bg-white shadow-2xl rounded-3xl p-6 sm:p-10 space-y-10">
				{/* HEADER */}
				<div className="text-center space-y-2">
					<h1 className="text-4xl sm:text-5xl font-extrabold text-blue-700">
						👩‍🎓 Espace Candidat
					</h1>
					<p className="text-gray-600 text-lg sm:text-xl">
						Bienvenue dans votre espace de cours. Sélectionnez un cours pour
						commencer.
					</p>
				</div>

				{/* COURSES LIST */}
				<section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 ">
					{coursList.map(cours => (
						<div
							key={cours.id}
							className="p-6 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-2xl shadow-lg cursor-pointer hover:scale-105 transition flex flex-col justify-between"
						>
							<h2 className="text-2xl font-bold mb-2">{cours.titre}</h2>
							<p className="mb-4">{cours.description}</p>
							<button className="bg-white text-blue-600 px-4 py-2 rounded-full font-semibold hover:bg-gray-100 transition">
								Accéder au cours
							</button>
						</div>
					))}
				</section>
			</div>
		</div>
	)
}
