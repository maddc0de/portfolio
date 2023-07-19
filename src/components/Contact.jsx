import React, { useRef, useState } from "react"
import { motion } from "framer-motion"
import emailjs from "@emailjs/browser";

import { styles } from "../styles"
import { fadeIn } from "../utils/motion"
import { SectionWrapper } from "../hoc"
import { github, linkedin } from "../assets"



const Contact = () => {
  const formRef = useRef() // accessing DOM elements without triggering re-renders
  const [form, setForm] = useState({ name: "", email: "", message: "" })
  const [loading, setLoading] = useState(false)

  const handleInputChange = (e) => {
    const { name, value } = e.target

    setForm({ ...form, [name]: value })
  }

  const handleSubmit = (e) => {
    e.preventDefault(); // prevents browser's default behaviour of refreshing page after submitting form
    setLoading(true)

    emailjs.send(
      'service_pt9qzh1', 
      'template_c10jgdx', 
      {
        from_name: form.name,
        to_name: "Madelane",
        from_email: form.email,
        to_email: "maddc0de@outlook.com",
        message: form.message,
      },
      '7LR5XqOxeGmPYTI8e'
    ).then(() => {
      setLoading(false)
      alert("Thank you for reaching out! I will get back to you as soon as I can.")

      setForm({
        name: "",
        email: "",
        message: ""
      })
    },
    (error) => {
      setLoading(false);
      console.error(error);

      alert("Oops! something went wrong. Please try again.");
    }
    )
  }

  return (
    <section className={`xl:mt-12 flex xl:flex-row gap-10 overflow-hidden`} >
      <motion.div 
        variants={fadeIn("down", "spring", 0.2, 0.75)}
        className='flex-[0.75] bg-black-100 p-8 rounded-2xl'
      > 
        <div className='flex justify-between items-center'>
          <div>
            <p className={styles.sectionSubText}>Get in touch</p>
            <h3 className={styles.sectionHeadText}>Contact</h3>
          </div>
          <div className="flex gap-2">
            <a href='https://github.com/maddc0de/' target='_blank' rel='noopener noreferrer' className='hover:scale-110 transform transition-transform duration-300'>
              <img src={github} alt='linkedin' className='w-12' />
            </a>
            <a href='https://www.linkedin.com/in/madelanedaz/' target='_blank' rel='noopener noreferrer'  className='hover:scale-110 transform transition-transform duration-300'>
              <img src={linkedin} alt='linkedin' className='w-12 h-12' />
            </a>
          </div>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className='flex flex-col mt-12 gap-8'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input 
              type='text'
              name='name'
              value={form.name}
              onChange={handleInputChange}
              placeholder="What's your name?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your email</span>
            <input 
              type='email'
              name='email'
              value={form.email}
              onChange={handleInputChange}
              placeholder="What's your email address?"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              rows='7'
              name='message'
              value={form.message}
              onChange={handleInputChange}
              placeholder="Got a project idea? Let's chat"
              className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'
            />
          </label>

          <button type='submit' className='bg-tertiary py-3 px-8 rounded-xl outline-none w-fit text-white font-bold shadow-md shadow-primary'>
            {loading ? "Sending..." : "Send"}
          </button>
        </form>
      </motion.div>
    </section>
  )
}

export default SectionWrapper(Contact, "contact")