'use client'

import { motion } from 'framer-motion'
import { Heart, ArrowUp } from 'lucide-react'

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }
  
  return (
    <footer className="relative border-t border-gray-800 pt-12 pb-8">
      <div className="section-container">
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Brand Info */}
          <div>
            <div className="flex items-center space-x-2 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-red flex items-center justify-center">
                <span className="text-white font-bold">侍</span>
              </div>
              <div>
                <h2 className="text-xl font-bold">KAMON</h2>
                <div className="h-0.5 w-8 bg-gradient-red"></div>
              </div>
            </div>
            <p className="text-gray-400">
              Desainer & Developer dengan passion dalam menciptakan pengalaman digital yang memukau, 
              terinspirasi oleh estetika dan filosofi Jepang.
            </p>
          </div>
          
          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6">Tautan Cepat</h3>
            <ul className="space-y-3">
              {['Home', 'About', 'Projects', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase()}`} 
                    className="text-gray-400 hover:text-secondary-red transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-bold mb-6">Tetap Terhubung</h3>
            <p className="text-gray-400 mb-4">
              Berlangganan untuk mendapatkan update tentang proyek dan wawasan desain.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Email Anda"
                className="flex-grow px-4 py-3 bg-primary-black border border-gray-800 rounded-l-lg focus:outline-none focus:border-secondary-red"
              />
              <button className="px-6 bg-gradient-red rounded-r-lg font-medium">
                Kirim
              </button>
            </div>
          </div>
        </div>
        
        {/* Bottom Bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm mb-4 md:mb-0">
            © {new Date().getFullYear()} Kamon Portfolio. Dibuat dengan <Heart className="inline w-4 h-4 text-secondary-red" /> di Jakarta.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
            className="w-12 h-12 rounded-full border border-gray-800 flex items-center justify-center hover:border-secondary-red transition-colors"
          >
            <ArrowUp size={20} />
          </motion.button>
        </div>
      </div>
    </footer>
  )
}

export default Footer