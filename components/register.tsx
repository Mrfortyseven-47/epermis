import React from 'react'

export default function Register() {
  return (
    <div className="min-h-screen w-screen flex items-center justify-center px-5 py-10 bg-gray-100">
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/MaterialDesign-Webfont/5.3.45/css/materialdesignicons.min.css"
      />
      <div className="bg-white text-gray-700 rounded-3xl shadow-xl w-full max-w-4xl overflow-hidden flex flex-col md:flex-row">
        
        {/* Partie gauche avec image */}
        <div className="hidden md:block md:w-1/2">
          <img
            src="../src/assets/exam.jpg"
            alt="Illustration d'inscription"
            className="h-full w-full object-cover"
          />
        </div>

        {/* Partie droite avec formulaire */}
        <div className="w-full md:w-1/2 py-10 px-6 md:px-10">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Inscription</h1>
            <p className="text-sm mt-2 text-gray-500">Remplissez vos informations pour créer un compte</p>
          </div>

          <form className="space-y-6">
            <div className="flex gap-4">
              <div className="w-1/2">
                <label className="text-sm font-medium">Prénom</label>
                <div className="relative">
                  <i className="mdi mdi-account-outline absolute left-3 top-3 text-gray-400 text-lg"></i>
                  <input
                    type="text"
                    placeholder="Jean"
                    className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>
              <div className="w-1/2">
                <label className="text-sm font-medium">Nom</label>
                <div className="relative">
                  <i className="mdi mdi-account-outline absolute left-3 top-3 text-gray-400 text-lg"></i>
                  <input
                    type="text"
                    placeholder="Dupont"
                    className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                  />
                </div>
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">NIP</label>
              <div className="relative">
                <i className="mdi mdi-email-outline absolute left-3 top-3 text-gray-400 text-lg"></i>
                <input
                  type="text"
                  placeholder="votre NIP"
                  className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>


            <div>
              <label className="text-sm font-medium">Adresse email</label>
              <div className="relative">
                <i className="mdi mdi-email-outline absolute left-3 top-3 text-gray-400 text-lg"></i>
                <input
                  type="email"
                  placeholder="jean.dupont@email.com"
                  className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Téléphone</label>
              <div className="relative">
                <i className="mdi mdi-phone-outline absolute left-3 top-3 text-gray-400 text-lg"></i>
                <input
                  type="tel"
                  placeholder="+33 6 12 34 56 78"
                  className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <div>
              <label className="text-sm font-medium">Mot de passe</label>
              <div className="relative">
                <i className="mdi mdi-lock-outline absolute left-3 top-3 text-gray-400 text-lg"></i>
                <input
                  type="password"
                  placeholder="********"
                  className="pl-10 pr-3 py-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:border-indigo-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-lg transition duration-200"
            >
              S'inscrire
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
