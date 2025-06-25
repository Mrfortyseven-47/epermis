import React from 'react'
import Footer from './tinyComponents/footer'

const steps = [
	{
		img: '../../src/assets/step1.png',
		title: 'Inscription rapide',
		desc: 'Créez votre compte en quelques clics et accédez à votre espace personnel.',
	},
	{
		img: '../../src/assets/step2.png',
		title: 'Formation interactive',
		desc: 'Suivez des cours et entraînez-vous avec des quiz adaptés à votre niveau.',
	},
	{
		img: '../../src/assets/step3.png',
		title: 'Examen en ligne',
		desc: 'Passez votre examen du code de la route à distance, en toute sécurité.',
	},
	{
		img: '../../src/assets/step4.png',
		title: 'Obtenez votre permis',
		desc: 'Recevez vos résultats et obtenez votre permis plus rapidement.',
	},
]

export default function Home() {
	return (
		<div className="min-h-screen flex flex-col items-center justify-between bg-white mt-15">
			<div className="h-[15%] w-full max-w-3xl flex flex-col justify-center items-center mx-auto ">
				<h1 className="text-xl sm:text-3xl font-bold text-gray-800 mb-4 text-center">
					Bienvenue sur <span className='text-green-600' >e</span>-Permis
				</h1>
				<p className="text-lg sm:text-base text-gray-600 text-center">
					e-Permis est une plateforme en ligne qui vous permet de passer votre
					examen du code de la route à distance, où que vous soyez. Inscrivez-vous
					dès maintenant pour commencer votre formation et réussir votre examen!
				</p>
			</div>
			<div className="container mx-auto px-4 py-8 rounded-lg mt-5">
				<p className="text-xl sm:text-xl text-gray-700 text-center font-bold">
					<strong>C'est simple et rapide</strong> <br/> Comment ça marche?
				</p>
			</div>
			<div className="w-full max-w-4xl mx-auto px-4 py-8">
				<div className="flex flex-col gap-12">
					{steps.map((step, idx) => (
						<div
							key={idx}
							className={`flex flex-col md:flex-row items-center justify-center ${
								idx % 2 === 1 ? 'md:flex-row-reverse' : ''
							} gap-6 md:gap-12`}
						>
							<div className="flex-shrink-0 flex justify-center w-full md:w-auto border-2 border-blue-500 rounded-lg p-4">
								<img
									src={step.img}
									alt={step.title}
									className="w-64 h-48 object-contain rounded-xl shadow-lg bg-white"
								/>
							</div>
							<div className="flex-1 text-center md:text-left">
								<h3 className="text-lg sm:text-xl font-semibold text-blue-700 mb-2">
									{step.title}
								</h3>
								<p className="text-gray-600 text-base sm:text-lg">
									{step.desc}
								</p>
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="w-full flex flex-col md:flex-row items-center justify-center px-10 py-8 bg-white rounded-lg shadow-md mt-5 gap-2 border-2 border-blue-500  ">
				<div className="h-auto w-2/3 mb-6 md:mb-0 flex flex-col items-center justify-center px-2 sm:px-30 ">
					<h1 className='font-bold italic text-2xl text-blue-800 mb-4'>En avant toute !</h1>
					<p className="text-lg sm:text-base text-gray-700 text-justify">
						L’examen se déroule sur vos appareils personnels, que ce soit une tablette, un smartphone ou un ordinateur portable. Il est individuel : vous n'aurez pas les mêmes questions que vos voisins. Vous devrez répondre à 40 questions à choix multiples, présentées sous forme de photos ou vidéos. Pour réussir l'examen, vous devez avoir répondu correctement à 35 questions sur les 40 posées.
						<br /><br />
						Le jour de l’examen, veuillez vous connecter 15 minutes avant l'heure de la session. N’oubliez surtout pas votre convocation imprimée et votre document d’identité valable. Avant de commencer, assurez-vous que votre appareil est en mode silencieux et que vous avez déposé vos effets personnels dans l'espace prévu à cet effet.
						<br /><br />
						Une fois installé, vous aurez accès à une vidéo de démonstration pour vous familiariser avec le format de l'examen. L'examinateur vérifiera vos documents et sera présent pour vous aider en cas de besoin.
						<br /><br />
						L'examinateur donnera le top départ pour lancer la phase d’examen, qui dure environ 25 minutes : c’est parti, bonne chance !
						<br /><br />
						Lorsque vous avez terminé, attendez que les autres candidats aient également fini leur examen sans éteindre votre appareil. L'examinateur vous remettra votre document d'identité et vous autorisera à quitter la salle. Vous n’avez plus qu’à attendre vos résultats, qui vous seront communiqués par email dans un délai maximum de 48 heures (mais souvent seulement quelques heures après votre session).
					</p>
				</div>
				
			</div>
      
			<Footer />
		</div>
	)
}
