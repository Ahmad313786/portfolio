import React,{useState} from 'react'
import RevealOnScroll from '../RevealOnScroll'
import emailjs from "emailjs-com"

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  })
  const handleSubmit = (e) => {
    e.preventDefault()
    emailjs.sendForm(import.meta.env.VITE_SERVICE_ID, import.meta.env.VITE_TEMPLATE_ID, e.target, import.meta.env.VITE_PUBLIC_KEY).then((result) => {
      alert("Message sent!")
      setFormData({name: "",email: "",message: ""})
    }).catch(()=> alert("Oops! Something went wrong"))
  }
  return (
    <div className='min-h-screen flex items-center justify-center py-20' >
      <RevealOnScroll>
        <div className='px-4 w-150' >
          <h2 className='text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center' >Get In Touch</h2>
          <form className='space-y-6' onSubmit={handleSubmit} >
            <div className='relative' >
              <input value={formData.name} onChange={(e) => setFormData({...setFormData, name: e.target.value})} type="text" id='name' name='name' required placeholder='Name...' className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/10' />
            </div>
            <div className='relative' >
              <input value={formData.email} onChange={(e) => setFormData({...setFormData, email: e.target.value})} type="email" id='email' name='email' required placeholder='example@gmail.com' className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/10' />
            </div>
            <div className='relative' >
              <textarea value={formData.message} onChange={(e) => setFormData({...setFormData, message: e.target.value})} rows={5} id='message' name='message' required placeholder='Your Message...' className='w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500 focus:bg-blue-500/10' />
            </div>
            <button type='submit' className='w-full bg-blue-500 text-white py-3 px-6 rounded font-medium relative overflow-hidden hover:-translate-y-0.5 hover:shadow[0_0_15px_rgba(59,130,246,0.4)}' >Send Message</button>
          </form>
        </div>
      </RevealOnScroll>
    </div>
  )
}

export default Contact
