import React from 'react'
import Footer from './tinyComponents/footer'

export default function Apropos() {
  return (
    <>
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-blue-100 flex flex-col items-center py-10 px-4">
      <div className="max-w-4xl w-full grid gap-8 md:grid-cols-2">
        {/* Présentation */}
        <section className="bg-white/90 rounded-2xl shadow-xl p-8 flex flex-col items-center animate-fade-in-up transition-all duration-300 hover:shadow-2xl">
          <div className="mb-4">
            <i className="mdi mdi-account-tie text-blue-600 text-4xl"></i>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">Présentation</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            <span className="font-bold text-blue-700">e-Permis</span> est une plateforme innovante dédiée à la préparation et au passage du code de la route en ligne.<br />
            Fondée par des passionnés de l’éducation et de la technologie, notre mission est de rendre l’apprentissage du code accessible à tous, partout et à tout moment.
          </p>
        </section>

        {/* Histoire */}
        <section className="bg-white/90 rounded-2xl shadow-xl p-8 flex flex-col items-center animate-fade-in-up transition-all duration-300 hover:shadow-2xl" style={{ animationDelay: '0.1s' }}>
          <div className="mb-4">
            <i className="mdi mdi-timeline-clock-outline text-blue-600 text-4xl"></i>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">Notre histoire</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            L’aventure <span className="font-bold text-blue-700">e-Permis</span> a commencé en 2025, face au constat que de nombreux candidats rencontraient des difficultés pour accéder à une formation de qualité et flexible.<br />
            Nous avons alors décidé de créer une solution 100% en ligne, moderne et adaptée aux besoins de chacun.
          </p>
        </section>

        {/* Mission */}
        <section className="bg-white/90 rounded-2xl shadow-xl p-8 flex flex-col items-center animate-fade-in-up transition-all duration-300 hover:shadow-2xl" style={{ animationDelay: '0.2s' }}>
          <div className="mb-4">
            <i className="mdi mdi-target text-blue-600 text-4xl"></i>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">Notre mission</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            Démocratiser l’accès au permis de conduire en proposant une formation efficace, interactive et accessible à tous.
          </p>
        </section>

        {/* Vision */}
        <section className="bg-white/90 rounded-2xl shadow-xl p-8 flex flex-col items-center animate-fade-in-up transition-all duration-300 hover:shadow-2xl" style={{ animationDelay: '0.3s' }}>
          <div className="mb-4">
            <i className="mdi mdi-eye-outline text-blue-600 text-4xl"></i>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">Notre vision</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            Devenir la référence de la formation au code de la route en ligne, en accompagnant chaque candidat vers la réussite et l’autonomie.
          </p>
        </section>

        {/* Valeurs */}
        <section className="bg-white/90 rounded-2xl shadow-xl p-8 flex flex-col items-center animate-fade-in-up transition-all duration-300 hover:shadow-2xl" style={{ animationDelay: '0.4s' }}>
          <div className="mb-4">
            <i className="mdi mdi-diamond-stone text-blue-600 text-4xl"></i>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">Nos valeurs</h2>
          <ul className="list-none text-gray-700 space-y-1 text-center">
            <li className="flex items-center justify-center gap-2 transition-all duration-200 hover:text-blue-700">
              <i className="mdi mdi-check-circle-outline text-blue-400"></i>Accessibilité
            </li>
            <li className="flex items-center justify-center gap-2 transition-all duration-200 hover:text-blue-700">
              <i className="mdi mdi-lightbulb-on-outline text-blue-400"></i>Innovation
            </li>
            <li className="flex items-center justify-center gap-2 transition-all duration-200 hover:text-blue-700">
              <i className="mdi mdi-eye-check-outline text-blue-400"></i>Transparence
            </li>
            <li className="flex items-center justify-center gap-2 transition-all duration-200 hover:text-blue-700">
              <i className="mdi mdi-account-heart-outline text-blue-400"></i>Accompagnement personnalisé
            </li>
            <li className="flex items-center justify-center gap-2 transition-all duration-200 hover:text-blue-700">
              <i className="mdi mdi-handshake-outline text-blue-400"></i>Respect et bienveillance
            </li>
          </ul>
        </section>

        {/* Produits ou services */}
        <section className="bg-white/90 rounded-2xl shadow-xl p-8 flex flex-col items-center animate-fade-in-up transition-all duration-300 hover:shadow-2xl" style={{ animationDelay: '0.5s' }}>
          <div className="mb-4">
            <i className="mdi mdi-laptop text-blue-600 text-4xl"></i>
          </div>
          <h2 className="text-xl font-semibold text-gray-800 mb-2 text-center">Nos services</h2>
          <p className="text-gray-700 leading-relaxed text-center">
            Plateforme complète pour préparer et passer le code de la route : <span className="font-semibold text-blue-700">cours interactifs</span>, <span className="font-semibold text-blue-700">quiz personnalisés</span>, <span className="font-semibold text-blue-700">examens blancs</span>, suivi de progression et assistance dédiée.<br />
            <span className="font-semibold">Ce qui nous distingue ?</span> Une expérience intuitive, des contenus à jour et un accompagnement humain à chaque étape.
          </p>
        </section>
      </div>

      {/* Réseaux sociaux */}
      <section className="mt-12 text-center animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
        <h2 className="text-xl font-semibold text-gray-800 mb-4">Suivez-nous</h2>
        <div className="flex justify-center gap-6">
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 transition-colors text-3xl duration-200">
            <i className="mdi mdi-facebook-box"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
            className="text-blue-500 hover:text-blue-700 transition-colors text-3xl duration-200">
            <i className="mdi mdi-facebook"></i>
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
            className="text-pink-600 hover:text-pink-800 transition-colors text-3xl duration-200">
            <i className="mdi mdi-instagram"></i>
          </a>
          <a href="mailto:contact@epermis.com"
            className="text-gray-700 hover:text-black transition-colors text-3xl duration-200">
            <i className="mdi mdi-email-outline"></i>
          </a>
        </div>
      </section>

      

      {/* Animation CSS */}
      <style>{`
        .animate-fade-in-up {
          opacity: 0;
          transform: translateY(30px);
          animation: fadeInUp 0.7s forwards;
        }
        .animate-fade-in-up[style*="0.1s"] { animation-delay: 0.1s; }
        .animate-fade-in-up[style*="0.2s"] { animation-delay: 0.2s; }
        .animate-fade-in-up[style*="0.3s"] { animation-delay: 0.3s; }
        .animate-fade-in-up[style*="0.4s"] { animation-delay: 0.4s; }
        .animate-fade-in-up[style*="0.5s"] { animation-delay: 0.5s; }
        .animate-fade-in-up[style*="0.6s"] { animation-delay: 0.6s; }
        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
    {/* Footer bien intégré */}
        <Footer />
    </>
  )
}
