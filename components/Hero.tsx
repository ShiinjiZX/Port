'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Sparkles, Github, Linkedin, Twitter } from 'lucide-react'

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative pt-20">
      <div className="section-container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center space-x-2 mb-6 px-4 py-2 rounded-full bg-red-900/20 border border-red-900/30">
              <Sparkles className="text-secondary-red" size={16} />
              <span className="text-sm text-secondary-red">Portofolio Profesional</span>
            </div>
            
            <h1 className="heading-japanese mb-6 animate-fade-in">
              Kreativitas & <span className="text-secondary-red">Innovasi</span>
            </h1>
            
            <p className="text-xl text-gray-300 mb-8 max-w-2xl animate-slide-up">
              Saya adalah seorang <span className="text-secondary-red font-medium">Desainer & Developer</span> dengan passion dalam menciptakan pengalaman digital yang memukau. Menggabungkan estetika Jepang dengan teknologi modern.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary"
              >
                Lihat Proyek <ArrowRight className="ml-2" />
              </motion.button>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline"
              >
                Hubungi Saya
              </motion.button>
            </div>
            
            {/* Social Links */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex justify-center lg:justify-start space-x-4"
            >
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-secondary-red hover:bg-red-900/10 transition-all">
                <Github size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-secondary-red hover:bg-red-900/10 transition-all">
                <Linkedin size={18} />
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-gray-700 flex items-center justify-center hover:border-secondary-red hover:bg-red-900/10 transition-all">
                <Twitter size={18} />
              </a>
            </motion.div>
          </motion.div>
          
          {/* Right Content - Hero Visual */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative w-full max-w-lg mx-auto">
              {/* Main Card */}
              <div className="card-japanese kanji-border overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-red"></div>
                
                <div className="p-8">
                  <div className="w-20 h-20 rounded-full bg-gradient-red flex items-center justify-center mb-6 mx-auto">
                    <span className="text-3xl font-bold">侍</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-center mb-4">Samurai Digital</h3>
                  <p className="text-gray-300 text-center mb-6">
                    Pendekatan seperti samurai: disiplin, presisi, dan dedikasi terhadap setiap detail dalam desain dan pengembangan.
                  </p>
                  
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="text-center p-3 bg-primary-black rounded-lg">
                      <div className="text-2xl font-bold text-secondary-red">50+</div>
                      <div className="text-sm text-gray-400">Proyek Selesai</div>
                    </div>
                    <div className="text-center p-3 bg-primary-black rounded-lg">
                      <div className="text-2xl font-bold text-secondary-red">100%</div>
                      <div className="text-sm text-gray-400">Kepuasan Klien</div>
                    </div>
                  </div>
                  
                  <div className="h-2 w-full bg-primary-black rounded-full overflow-hidden">
                    <div 
                      className="h-full bg-gradient-red rounded-full animate-shimmer"
                      style={{ backgroundSize: '200px 100%' }}
                    ></div>
                  </div>
                  <div className="text-xs text-gray-400 mt-2 text-center">Skill Mastery: UI/UX Design</div>
                </div>
              </div>
              
              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 3 }}
                className="absolute -top-4 -right-4 w-16 h-16 bg-primary-dark border border-secondary-red rounded-lg flex items-center justify-center"
              >
                <span className="text-secondary-red font-bold">UI/UX</span>
              </motion.div>
              
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ repeat: Infinity, duration: 4, delay: 0.5 }}
                className="absolute -bottom-4 -left-4 w-20 h-20 bg-primary-dark border border-secondary-red rounded-lg flex items-center justify-center"
              >
                <span className="text-secondary-red font-bold text-xl">Dev</span>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 2 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-gray-400 mb-2">Scroll</span>
          <div className="w-6 h-10 border-2 border-gray-700 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-secondary-red rounded-full mt-2"></div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}

export default Hero