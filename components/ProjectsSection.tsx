'use client'

import { motion } from 'framer-motion'
import { ExternalLink, Github, Eye } from 'lucide-react'
import { useState } from 'react'

const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState('all')
  
  const projects = [
    {
      id: 1,
      title: 'Sakura E-Commerce',
      description: 'Platform e-commerce dengan tema Jepang modern, fokus pada pengalaman belanja yang mulus.',
      category: 'web',
      tags: ['Next.js', 'TypeScript', 'Tailwind', 'Stripe'],
      imageColor: 'bg-gradient-to-br from-red-900/30 to-black',
      liveLink: '#',
      codeLink: '#'
    },
    {
      id: 2,
      title: 'Zen Meditation App',
      description: 'Aplikasi meditasi dengan UI yang tenang dan fitur pelacakan progres.',
      category: 'mobile',
      tags: ['React Native', 'Firebase', 'Framer Motion'],
      imageColor: 'bg-gradient-to-br from-gray-900 to-black',
      liveLink: '#',
      codeLink: '#'
    },
    {
      id: 3,
      title: 'Samurai Portfolio',
      description: 'Website portofolio dengan animasi yang dinamis dan desain yang minimalis.',
      category: 'web',
      tags: ['Next.js', 'Framer Motion', 'Tailwind'],
      imageColor: 'bg-gradient-to-br from-red-900/20 to-black',
      liveLink: '#',
      codeLink: '#'
    },
    {
      id: 4,
      title: 'Ramen Restaurant UI',
      description: 'UI/UX design untuk website restoran ramen dengan pemesanan online.',
      category: 'design',
      tags: ['Figma', 'UI/UX', 'Prototyping'],
      imageColor: 'bg-gradient-to-br from-amber-900/20 to-black',
      liveLink: '#',
      codeLink: '#'
    },
    {
      id: 5,
      title: 'Anime Discovery Platform',
      description: 'Platform untuk menemukan dan melacak anime favorit dengan rekomendasi AI.',
      category: 'web',
      tags: ['Next.js', 'GraphQL', 'Apollo', 'Tailwind'],
      imageColor: 'bg-gradient-to-br from-purple-900/20 to-black',
      liveLink: '#',
      codeLink: '#'
    },
    {
      id: 6,
      title: 'Japanese Learning App',
      description: 'Aplikasi pembelajaran bahasa Jepang dengan sistem pengulangan spasi.',
      category: 'mobile',
      tags: ['React Native', 'Node.js', 'MongoDB'],
      imageColor: 'bg-gradient-to-br from-blue-900/20 to-black',
      liveLink: '#',
      codeLink: '#'
    },
  ]
  
  const filters = [
    { id: 'all', name: 'Semua' },
    { id: 'web', name: 'Web' },
    { id: 'mobile', name: 'Mobile' },
    { id: 'design', name: 'Design' },
  ]
  
  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter)
  
  return (
    <section id="projects" className="py-20 relative">
      <div className="section-container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="heading-section">
            Proyek <span className="text-secondary-red">Unggulan</span>
          </h2>
          <p className="text-gray-300 max-w-3xl mx-auto">
            Kumpulan proyek yang mencerminkan pendekatan saya terhadap desain dan pengembangan. 
            Setiap proyek adalah cerita tentang pemecahan masalah dan kreativitas.
          </p>
        </motion.div>
        
        {/* Filter Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={`px-6 py-2 rounded-full border transition-all ${activeFilter === filter.id ? 'bg-secondary-red border-secondary-red text-white' : 'border-gray-700 text-gray-300 hover:border-secondary-red'}`}
            >
              {filter.name}
            </button>
          ))}
        </motion.div>
        
        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
              className="card-japanese group"
            >
              {/* Project Image/Placeholder */}
              <div className={`${project.imageColor} h-48 rounded-lg mb-6 relative overflow-hidden`}>
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-4xl font-bold opacity-20">
                    {project.title.charAt(0)}
                  </div>
                </div>
                
                {/* Overlay on hover */}
                <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex space-x-4">
                    <a href={project.liveLink} className="w-12 h-12 rounded-full bg-secondary-red flex items-center justify-center hover:bg-red-700 transition-colors">
                      <Eye size={20} />
                    </a>
                    <a href={project.codeLink} className="w-12 h-12 rounded-full bg-primary-dark border border-gray-700 flex items-center justify-center hover:border-secondary-red transition-colors">
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
              
              <h3 className="text-xl font-bold mb-3 group-hover:text-secondary-red transition-colors">
                {project.title}
              </h3>
              
              <p className="text-gray-300 mb-6">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 bg-primary-black text-xs rounded-full border border-gray-800"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              
              <a
                href={project.liveLink}
                className="inline-flex items-center text-secondary-red hover:text-red-400 transition-colors"
              >
                Lihat Proyek <ExternalLink className="ml-2" size={16} />
              </a>
            </motion.div>
          ))}
        </div>
        
        {/* View More */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <button className="btn-outline">
            Lihat Semua Proyek
          </button>
        </motion.div>
      </div>
    </section>
  )
}

export default ProjectsSection