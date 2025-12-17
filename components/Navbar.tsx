'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Home, User, Briefcase, Mail, Sparkles } from 'lucide-react'
import Link from 'next/link'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])
  
  const navItems = [
    { name: 'Home', href: '/', icon: <Home size={18} /> },
    { name: 'About', href: '/about', icon: <User size={18} /> },
    { name: 'Projects', href: '/projects', icon: <Briefcase size={18} /> },
    { name: 'Contact', href: '/contact', icon: <Mail size={18} /> },
  ]
  
  return (
    <>
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-primary-black/90 backdrop-blur-md py-3' : 'bg-transparent py-5'}`}
      >
        <div className="section-container">
          <div className="flex justify-between items-center">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2 group">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-gradient-red flex items-center justify-center">
                  <Sparkles className="text-white" size={20} />
                </div>
                <div className="absolute -inset-1 rounded-full bg-gradient-red opacity-30 blur-sm group-hover:opacity-50 transition-opacity"></div>
              </div>
              <div>
                <h1 className="text-xl font-bold tracking-wider">KAMON</h1>
                <div className="h-0.5 w-8 bg-gradient-red"></div>
              </div>
            </Link>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="relative group text-gray-300 hover:text-white transition-colors"
                >
                  <span className="flex items-center space-x-1">
                    {item.icon}
                    <span>{item.name}</span>
                  </span>
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-red group-hover:w-full transition-all duration-300"></span>
                </Link>
              ))}
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Download CV
              </motion.button>
            </div>
            
            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-gray-300 hover:text-white"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </motion.nav>
      
      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed top-20 left-0 right-0 bg-primary-dark/95 backdrop-blur-md z-40 md:hidden overflow-hidden"
          >
            <div className="section-container py-6">
              <div className="flex flex-col space-y-6">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center space-x-3 text-gray-300 hover:text-white py-2"
                    >
                      <div className="text-secondary-red">{item.icon}</div>
                      <span className="text-lg">{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
                
                <motion.button
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 0.4 }}
                  whileTap={{ scale: 0.95 }}
                  className="btn-primary mt-4"
                >
                  Download CV
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}

export default Navbar