import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom'
import React, { useState } from 'react'
import Home from '../components/home'
import Apropos from '../components/apropos'
import Register from '../components/register'
import Login from '../components/login'
import './App.css'
import Contact from '../components/contact'
import Dashboard from '../components/dashboard'
import EspaceClient from '../components/EspaceClient'
import Cours from '../components/admin/cours'
import Examen from '../components/admin/examen'
import AdminExamen from '../components/admin/ExamenAdmin'
import ExamAdminDetails from '../components/admin/ExamAdminDetails'
import logo from './assets/logo2.jpeg'

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Router>
      <NavBar isOpen={isOpen} setIsOpen={setIsOpen} />
      <div className="pt-16">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/apropos" element={<Apropos />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<EspaceClient />} />
          <Route path="/cours" element={<Cours />} />
          <Route path="/examen" element={<AdminExamen />} />
          <Route path="/admin/exam-details/:examId" element={<ExamAdminDetails />} />
          <Route path="*" element={<div>404 Not Found</div>} />
        </Routes>
      </div>
    </Router>
  )
}

function NavBar({ isOpen, setIsOpen }) {
  const location = useLocation()
  const links = [
    { to: '/', label: 'Home' },
    { to: '/apropos', label: 'À Propos' },
    { to: '/contact', label: 'Contact' },
    { to: '/login', label: 'Connexion' },
    { to: '/register', label: 'Inscription' },
    { to: '/dashboard', label: 'Dashboard' },
    { to: '/profile', label: 'Profile' },
  ]

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-blue-50 backdrop-blur shadow transition-all">
      <div className="container mx-auto px-4 py-3 flex items-center justify-between">
        {/* Logo */}
         <img
          src={logo} 
          alt="e-Permis Logo"
          className="h-15 rounded-full w-auto select-none"
        />

        {/* Desktop navigation */}
        <div className="hidden md:flex gap-2">
          {links.map(link => (
            <NavLinkPro
              key={link.to}
              to={link.to}
              label={link.label}
              active={location.pathname === link.to}
            />
          ))}
        </div>

        {/* Mobile burger */}
        <button
          className="md:hidden flex flex-col gap-1 focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Menu"
        >
          <div className="w-6 h-1 bg-blue-600 rounded"></div>
          <div className="w-6 h-1 bg-blue-600 rounded"></div>
          <div className="w-6 h-1 bg-blue-600 rounded"></div>
        </button>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-blue-100 border-t border-blue-200 px-4 py-4 space-y-2">
          {links.map(link => (
            <NavLinkPro
              key={link.to}
              to={link.to}
              label={link.label}
              active={location.pathname === link.to}
              mobile
              onClick={() => setIsOpen(false)}
            />
          ))}
        </div>
      )}
    </nav>
  )
}

function NavLinkPro({ to, label, active, mobile = false, onClick }) {
  return (
    <Link
      to={to}
      onClick={onClick}
      className={
        `
        ${mobile
          ? 'block px-4 py-2 rounded-md font-medium'
          : 'px-3 py-2 rounded-md font-medium'
        }
        transition-all duration-200
        ${active
          ? 'bg-blue-600 text-white font-bold shadow'
          : 'text-gray-700 hover:bg-blue-200 hover:text-blue-700'
        }
        `
      }
      style={{ fontWeight: active ? 'bold' : undefined }}
    >
      {label}
    </Link>
  )
}

export default App