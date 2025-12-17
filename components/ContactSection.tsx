'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { Send, Mail, MapPin, Phone, CheckCircle } from 'lucide-react'

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [isSubmitted, setIsSubmitted] = useState(false)
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // In a real app, you would send this data to a backend
    console.log('Form submitted:', formData)
    setIsSubmitted(true)
    
    // Reset form after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false)
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      })
    }, 3000)
  }
  
  return (
    <section id="contact" className="py-20 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-section">
            Hubungi <span className="text-secondary-red">Saya</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Tertarik untuk berkolaborasi atau memiliki proyek menarik? Jangan ragu untuk menghubungi saya.
            Saya selalu terbuka untuk diskusi tentang ide-ide kreatif.
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="card-japanese">
              <h3 className="text-2xl font-bold mb-6">Kirim Pesan</h3>
              
              {isSubmitted ? (
                <motion.div
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="text-center py-12"
                >
                  <CheckCircle className="w-16 h-16 text-secondary-red mx-auto mb-6" />
                  <h4 className="text-xl font-bold mb-2">Pesan Terkirim!</h4>
                  <p className="text-gray-300">
                    Terima kasih telah menghubungi. Saya akan membalas pesan Anda secepatnya.
                  </p>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-gray-300 mb-2">Nama Lengkap</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-primary-black border border-gray-800 rounded-lg focus:outline-none focus:border-secondary-red transition-colors"
                      placeholder="Masukkan nama Anda"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-primary-black border border-gray-800 rounded-lg focus:outline-none focus:border-secondary-red transition-colors"
                      placeholder="email@contoh.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2">Subjek</label>
                    <input
                      type="text"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 bg-primary-black border border-gray-800 rounded-lg focus:outline-none focus:border-secondary-red transition-colors"
                      placeholder="Subjek pesan"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-gray-300 mb-2">Pesan</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 bg-primary-black border border-gray-800 rounded-lg focus:outline-none focus:border-secondary-red transition-colors resize-none"
                      placeholder="Tulis pesan Anda di sini..."
                    ></textarea>
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    type="submit"
                    className="btn-primary w-full"
                  >
                    Kirim Pesan <Send className="ml-2" size={18} />
                  </motion.button>
                </form>
              )}
            </div>
          </motion.div>
          
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-2xl font-bold mb-6">Informasi Kontak</h3>
              <p className="text-gray-300 mb-8">
                Saya tersedia untuk proyek freelance dan kolaborasi. Jangan ragu untuk menghubungi saya melalui salah satu cara di bawah.
              </p>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-red-900/20 flex items-center justify-center mr-4">
                  <Mail className="text-secondary-red" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Email</h4>
                  <p className="text-gray-300">hello@portofolio.dev</p>
                  <p className="text-gray-400 text-sm">Respon dalam 24 jam</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-red-900/20 flex items-center justify-center mr-4">
                  <Phone className="text-secondary-red" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Telepon</h4>
                  <p className="text-gray-300">+62 812 3456 7890</p>
                  <p className="text-gray-400 text-sm">Senin - Jumat, 9AM - 6PM</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-12 h-12 rounded-full bg-red-900/20 flex items-center justify-center mr-4">
                  <MapPin className="text-secondary-red" />
                </div>
                <div>
                  <h4 className="font-bold mb-1">Lokasi</h4>
                  <p className="text-gray-300">Jakarta, Indonesia</p>
                  <p className="text-gray-400 text-sm">Tersedia untuk remote work worldwide</p>
                </div>
              </div>
            </div>
            
            {/* Availability */}
            <div className="card-japanese mt-8">
              <h4 className="font-bold mb-4">Status Ketersediaan</h4>
              <div className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-green-500 mr-3 animate-pulse"></div>
                <span className="text-gray-300">Tersedia untuk proyek baru</span>
              </div>
              <p className="text-gray-400 text-sm mt-2">
                Saat ini menerima proyek freelance dan kolaborasi. Kapasitas terbatas untuk bulan ini.
              </p>
            </div>
            
            {/* Social Links */}
            <div className="pt-8 border-t border-gray-800">
              <h4 className="font-bold mb-4">Temukan Saya di</h4>
              <div className="flex space-x-4">
                {['Github', 'LinkedIn', 'Dribbble', 'Behance'].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="px-4 py-2 bg-primary-dark border border-gray-800 rounded-lg hover:border-secondary-red transition-colors"
                  >
                    {platform}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection