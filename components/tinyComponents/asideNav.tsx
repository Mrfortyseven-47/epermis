import React from 'react'

export default function AsideNav() {
  const navItems = [
    { label: 'Dashboard', icon: 'mdi-view-dashboard', href: '/dashboard' },
    { label: 'Cours', icon: 'mdi-book-open-page-variant', href: '/cours' },
    { label: 'Examen', icon: 'mdi-file-document-edit', href: '/examen' },
    { label: 'Tous les utilisateurs', icon: 'mdi-account-group', href: '/users' },
    { label: 'Déconnexion', icon: 'mdi-logout', href: '/logout' },
  ]

  return (
    <aside className="fixed inset-y-0 left-0 w-64 bg-gray-900 text-white shadow-lg">
      <div className="flex items-center justify-center py-6">
        <svg className="w-10 h-10 text-blue-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 2l9 21H3L12 2z"></path>
        </svg>
        <span className="ml-2 text-xl font-bold">e-Permis</span>
      </div>
      <nav className="mt-6">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="flex items-center px-4 py-3 hover:bg-gray-700 transition-colors"
          >
            <i className={`mdi ${item.icon} text-lg`}></i>
            <span className="ml-3">{item.label}</span>
          </a>
        ))}
      </nav>
    </aside>
  )
}