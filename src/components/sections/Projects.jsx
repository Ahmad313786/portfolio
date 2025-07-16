import React from 'react'
import RevealOnScroll from '../RevealOnScroll'
const Projects = () => {
  return (
    <div id='projects' className='min-h-screen flex items-center justify-center py-20' >
      <RevealOnScroll>
      <div className='max-w-5xl mx-auto px-4' >
        <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center'  >Featured Projects</h2>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-6' >
          <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow[0_2px_8px_rgba(59, 130, 246,0.2) transition-all' >
            <h3 className='text-xl font-bold mb-2' >MyShop - Ecommerce App</h3>
            <p className='text-gray-300 mb-4' >A fully responsive frontend e-commerce website built with React. Users can browse, search, and filter products, add items to the cart, and place orders — all through a smooth and intuitive interface.</p>
            <div className='flex gap-1' >
              {["ReactJS", "TailwindCSS"].map((tech, key) => (
                <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow[0_2px_8px_rgba(59, 130, 246,0.1) transition-all' >{tech}</span>
              ))}
            </div>
            <div className='flex justify-between items-center' >
              <a href="https://ahmad313786.github.io/myshop"  className='text-blue-400 hover:text-blue-300 transition-colors my-4' target='_blank' >View Project ➡️</a>
            </div>
          </div>
          <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow[0_2px_8px_rgba(59, 130, 246,0.2) transition-all' >
            <h3 className='text-xl font-bold mb-2' >Todo - List App</h3>
            <p className='text-gray-300 mb-4' >Todo List app which stores todo in local storage.Todos can be edit and deleted.You can also filter todos to hide completed todos</p>
            <div className='flex gap-1' >
              {["ReactJS", "TailwindCSS"].map((tech, key) => (
                <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow[0_2px_8px_rgba(59, 130, 246,0.1) transition-all' >{tech}</span>
              ))}
            </div>
            <div className='flex justify-between items-center' >
              <a href="https://ahmad313786.github.io/todo_list/"  className='text-blue-400 hover:text-blue-300 transition-colors my-4' target='_blank' >View Project ➡️</a>
            </div>
          </div>
          <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow[0_2px_8px_rgba(59, 130, 246,0.2) transition-all' >
            <h3 className='text-xl font-bold mb-2' >Contacts App</h3>
            <p className='text-gray-300 mb-4' >I have made a contact app. In which user can save his/her contacts in local storage. User can also update and delete contacts from local storage.</p>
            <div className='flex gap-1' >
              {["HTML", "CSS", "Javascript"].map((tech, key) => (
                <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow[0_2px_8px_rgba(59, 130, 246,0.1) transition-all' >{tech}</span>
              ))}
            </div>
            <div className='flex justify-between items-center' >
              <a href="https://polite-klepon-67d421.netlify.app" className='text-blue-400 hover:text-blue-300 transition-colors my-4' target='_blank' >View Project ➡️</a>
            </div>
          </div>
          <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow[0_2px_8px_rgba(59, 130, 246,0.2) transition-all' >
            <h3 className='text-xl font-bold mb-2' >Digital Clock</h3>
            <p className='text-gray-300 mb-4' >I have made a digital clock that shows current time and date using HTML, CSS and Javascript.</p>
            <div className='flex flex-wrap mb-4 gap-2' >
              {["HTML", "CSS", "Javascript"].map((tech, key) => (
                <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow[0_2px_8px_rgba(59, 130, 246,0.1) transition-all' >{tech}</span>
              ))}
            </div>
            <div className='flex justify-between items-center' >
              <a href="https://digitalghari.netlify.app/" className='text-blue-400 hover:text-blue-300 transition-colors my-4' target='_blank' >View Project ➡️</a>
            </div>
          </div>
          <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow[0_2px_8px_rgba(59, 130, 246,0.2) transition-all' >
            <h3 className='text-xl font-bold mb-2' >Birthday Countdown</h3>
            <p className='text-gray-300 mb-4' >I have made a website which calculates the days remaining in one's birthday. User will input his/her coming birthday and it will tell remaining days</p>
            <div className='flex gap-1' >
              {["HTML", "CSS", "Javascript"].map((tech, key) => (
                <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow[0_2px_8px_rgba(59, 130, 246,0.1) transition-all' >{tech}</span>
              ))}
            </div>
            <div className='flex justify-between items-center' >
              <a href="https://countdowntocake.netlify.app" className='text-blue-400 hover:text-blue-300 transition-colors my-4' target='_blank' >View Project ➡️</a>
            </div>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </div>
  )
}

export default Projects
