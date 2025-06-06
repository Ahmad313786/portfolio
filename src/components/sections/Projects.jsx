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
            <h3 className='text-xl font-bold mb-2' >Todo - List App</h3>
            <p className='text-gray-300 mb-4' >Todo List app which stores todo in local storage.Todos can be edit and deleted.You can also filter todos to hide completed todos</p>
            <div className='flex gap-1' >
              {["ReactJS", "TailwindCSS"].map((tech, key) => (
                <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow[0_2px_8px_rgba(59, 130, 246,0.1) transition-all' >{tech}</span>
              ))}
            </div>
            <div className='flex justify-between items-center' >
              <a href="https://ahmad313786.github.io/todo_list/" className='text-blue-400 hover:text-blue-300 transition-colors my-4'>View Project ➡️</a>
            </div>
          </div>
          <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow[0_2px_8px_rgba(59, 130, 246,0.2) transition-all' >
            <h3 className='text-xl font-bold mb-2' >E-commerce Website</h3>
            <p className='text-gray-300 mb-4' >Ecommerce website from where you can add products to your cart and then from checkout you can proceed to payment.You can also select the quantity of product.</p>
            <div className='flex gap-1' >
              {["React", "Nextjs", "ShadCN", "Stripe"].map((tech, key) => (
                <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow[0_2px_8px_rgba(59, 130, 246,0.1) transition-all' >{tech}</span>
              ))}
            </div>
            <div className='flex justify-between items-center' >
              <a href="https://ecom-lime-three.vercel.app/" className='text-blue-400 hover:text-blue-300 transition-colors my-4'>View Project ➡️</a>
            </div>
          </div>
          <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow[0_2px_8px_rgba(59, 130, 246,0.2) transition-all' >
            <h3 className='text-xl font-bold mb-2' >E-commerce Website</h3>
            <p className='text-gray-300 mb-4' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nobis minus odit voluptatum architecto reprehenderit.</p>
            <div className='flex flex-wrap mb-4 gap-2' >
              {["React", "Node.js", "MongoDB"].map((tech, key) => (
                <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow[0_2px_8px_rgba(59, 130, 246,0.1) transition-all' >{tech}</span>
              ))}
            </div>
            <div className='flex justify-between items-center' >
              <a href="#" className='text-blue-400 hover:text-blue-300 transition-colors my-4'>View Project ➡️</a>
            </div>
          </div>
          <div className='p-6 rounded-xl border border-white/10 hover:-translate-y-1 hover:border-blue-500/30 hover:shadow[0_2px_8px_rgba(59, 130, 246,0.2) transition-all' >
            <h3 className='text-xl font-bold mb-2' >E-commerce Website</h3>
            <p className='text-gray-300 mb-4' >Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus nobis minus odit voluptatum architecto reprehenderit.</p>
            <div className='flex gap-1' >
              {["React", "Node.js", "MongoDB"].map((tech, key) => (
                <span key={key} className='bg-blue-500/10 text-blue-500 py-1 px-3 rounded-full text-sm hover:bg-blue-500/20 hover:shadow[0_2px_8px_rgba(59, 130, 246,0.1) transition-all' >{tech}</span>
              ))}
            </div>
            <div className='flex justify-between items-center' >
              <a href="#" className='text-blue-400 hover:text-blue-300 transition-colors my-4'>View Project ➡️</a>
            </div>
          </div>
        </div>
      </div>
      </RevealOnScroll>
    </div>
  )
}

export default Projects
