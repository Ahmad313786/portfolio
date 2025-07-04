import React from 'react'
import RevealOnScroll from '../RevealOnScroll'

const About = () => {
  const frontendSkills = ["HTML","CSS","TailwindCSS", "Javascript","React"]
  const backendSkills = ["Node.js","ExpressJS","MongoDB"]
  return (
    <div id='about' className='min-h-screen flex items-center justify-center py-20' >
      <RevealOnScroll>
      <div className='max-w-3xl mx-auto px-4' >
        <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center' >About Me</h2>
        <div className='rounded-xl p-8 border border-white/10 hover:-translate-y-1 transition-all' >
          <p className='text-gray-300 mb-6' >Passionate MERN Stack Developer building responsive, scalable web applications with clean, efficient code.</p>
          <div className='grid grid-cols-1 md:grid-cols-2 gap-6' >
            <div className='rounded p-6 hover:-translate-y-1 transition-all' >
              <h3 className='text-xl mb-4 font-bold' > Frontend</h3>
              <div className='flex flex-wrap gap-2' >
                {frontendSkills.map((tech,key) => (
                  <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow[0_2px_8px_rgba(59, 130, 246,0.2) transition-all' >{tech}</span>
                ))}
              </div>
            </div>
            <div className='rounded p-6 hover:-translate-y-1 transition-all' >
              <h3 className='text-xl mb-4 font-bold' > Backend</h3>
              <div className='flex flex-wrap gap-2' >
                {backendSkills.map((tech,key) => (
                  <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow[0_2px_8px_rgba(59, 130, 246,0.2) transition-all' >{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className='grid grid-cols-1 md:grid-cols-2 mt-8 gap-6' >
          <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all' >
          <h3 className='text-xl font-bold mb-4' > 🏫 Education </h3>
          <ul className='list-disc list-inside text-gray-300 space-y-2' >
            <li>
              <strong>Intermediate in Computer Science</strong> - Superior College Toba Tek Singh (2021 - 2023)
            </li>
            <li>
              Relative Coursework: Web development, Python Development, Data Science 
            </li>
          </ul>
          </div>
          <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 transition-all' >
          <h3 className='text-xl font-bold mb-4' > 💼  Work Experience </h3>
          <div className='space-y-4 text-gray-300' >
            <div>
              <h4 className='font-semibold' >Fresher</h4>
            </div>
          </div>
          </div>

        </div>
      </div>
      </RevealOnScroll>
    </div>
  )
}

export default About
