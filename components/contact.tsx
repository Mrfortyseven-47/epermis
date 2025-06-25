import React from 'react'
import Footer from './tinyComponents/footer'

export default function Contact() {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col items-center py-10 px-4">
      <div className="max-w-4xl w-full bg-white rounded-lg shadow-lg p-8">
        <h1 className="text-3xl font-bold text-blue-700 mb-6 text-center">Contactez-nous</h1>
        <p className="text-gray-700 text-center mb-8">
          Vous avez une question ou besoin d'aide ? Remplissez le formulaire ci-dessous ou contactez-nous directement via nos coordonnées.
        </p>

        {/* Formulaire de contact */}
        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Nom complet</label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Votre nom"
              required
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Adresse email</label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Votre email"
              required
            />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              id="message"
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:ring-blue-500 focus:border-blue-500"
              placeholder="Votre message"
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Envoyer
          </button>
        </form>

        {/* Coordonnées */}
        <div className="mt-8 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Nos coordonnées</h2>
          <p className="text-gray-700">Email : contact@epermis-gabon.com</p>
          <p className="text-gray-700">Téléphone : +241 74688247</p>
          <p className="text-gray-700">Adresse : 123 Rue de l'Exemple, Libreville,Gaabon</p>
        </div>

        {/* Réseaux sociaux */}
        <div className="mt-8 text-center">
          <h2 className="text-xl font-semibold text-gray-800 mb-4">Suivez-nous</h2>
          <div className="flex justify-center gap-6">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
              className="text-blue-700 hover:text-blue-900 transition-colors text-3xl">
              <i className="mdi mdi-facebook-box"></i>
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
              className="text-blue-500 hover:text-blue-700 transition-colors text-3xl">
              <i className="mdi mdi-twitter"></i>
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
              className="text-pink-600 hover:text-pink-800 transition-colors text-3xl">
              <i className="mdi mdi-instagram"></i>
            </a>
          </div>
        </div>

        {/* Localisation Google Map */}
        <div className="mt-10">
          <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">Nous trouver</h2>
          <div className="rounded-lg overflow-hidden shadow-lg flex justify-center">
            <iframe
              title="Localisation e-Permis Gabon"
              src="https://www.google.com/maps?q=Libreville,+Gabon&output=embed"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
    <Footer />
    </>
  )
}
