import React from 'react'

export default function Footer() {
  return (
    <footer className="min-w-screen bg-black backdrop-blur border-t border-gray-200 h-30 flex items-center justify-center">
      <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-8">
        <span className="text-white text-sm mb-2 md:mb-0">
          © {new Date().getFullYear()} e-Permis. Tous droits réservés.
        </span>
        <div className="flex gap-4">
          <a href="#" className="text-white hover:text-blue-600 transition-colors text-sm">Contact</a>
          <a href="#" className="text-white hover:text-blue-600 transition-colors text-sm">Mentions légales</a>
        </div>
      </div>
    </footer>
  )
}
