'use client'

import { motion } from 'framer-motion'
import { Code, Palette, Globe, Zap, Target, Users } from 'lucide-react'

const AboutSection = () => {
  const skills = [
    { name: 'UI/UX Design', level: 95, icon: <Palette /> },
    { name: 'Frontend Development', level: 90, icon: <Code /> },
    { name: 'Web Development', level: 85, icon: <Globe /> },
    { name: 'Performance Optimization', level: 80, icon: <Zap /> },
    { name: 'Project Management', level: 75, icon: <Target /> },
    { name: 'Team Collaboration', level: 90, icon: <Users /> },
  ]
  
  return (
    <section id="about" className="py-20 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-section">
            Tentang <span className="text-secondary-red">Saya</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Seorang profesional kreatif dengan lebih dari 5 tahun pengalaman dalam desain dan pengembangan web. 
            Terinspirasi oleh filosofi Jepang: <span className="text-secondary-red">Wabi-sabi</span> (keindahan dalam ketidaksempurnaan) dan <span className="text-secondary-red">Kaizen</span> (perbaikan terus-menerus).
          </p>
        </motion.div>
        
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="card-japanese h-full">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-gradient-red flex items-center justify-center mr-4">
                  <span className="text-white font-bold text-xl">道</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold">Jalan Saya</h3>
                  <p className="text-gray-400 text-sm">Filosofi & Pendekatan</p>
                </div>
              </div>
              
              <p className="text-gray-300 mb-6">
                Saya percaya bahwa setiap proyek adalah sebuah perjalanan. Seperti seorang samurai mengasah pedangnya, 
                saya terus mengasah keterampilan dan pendekatan untuk memberikan hasil terbaik.
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-red-900/20 flex items-center justify-center mr-3">
                    <div className="w-2 h-2 rounded-full bg-secondary-red"></div>
                  </div>
                  <span>Fokus pada pengalaman pengguna yang intuitif</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-red-900/20 flex items-center justify-center mr-3">
                    <div className="w-2 h-2 rounded-full bg-secondary-red"></div>
                  </div>
                  <span>Desain yang minimalis namun bermakna</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-red-900/20 flex items-center justify-center mr-3">
                    <div className="w-2 h-2 rounded-full bg-secondary-red"></div>
                  </div>
                  <span>Kode yang bersih dan terstruktur</span>
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Right Column - Skills */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8">Keahlian & Teknologi</h3>
            
            <div className="space-y-6">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="space-y-2"
                >
                  <div className="flex justify-between items-center">
                    <div className="flex items-center">
                      <div className="text-secondary-red mr-2">
                        {skill.icon}
                      </div>
                      <span>{skill.name}</span>
                    </div>
                    <span className="text-secondary-red font-bold">{skill.level}%</span>
                  </div>
                  
                  <div className="h-2 bg-primary-dark rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="h-full bg-gradient-red rounded-full"
                    ></motion.div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            {/* Tech Stack */}
            <div className="mt-12">
              <h4 className="text-xl font-bold mb-6">Teknologi yang Digunakan</h4>
              <div className="flex flex-wrap gap-3">
                {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Figma', 'Node.js', 'MongoDB', 'Framer Motion'].map((tech) => (
                  <span
                    key={tech}
                    className="px-4 py-2 bg-primary-dark border border-gray-800 rounded-full text-sm hover:border-secondary-red transition-colors"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection