import React from 'react'
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'

import { styles } from "../styles";
import { services } from '../constants';
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from '../hoc';

const ServiceCard = ({ index, title, icon}) => {
  return (
    <Tilt className='xs:w-[100px] w-full'
      options={{ 
        max: 45,
        scale: 1,
        speed: 450
      }}
    >
      <motion.div 
        variants={fadeIn("right", "spring", index * 0.5, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div className='bg-tertiary rounded-[20px] py-3 px-2 min-h-[100px] flex justify-evenly items-center flex-col'>
          <img src={icon} alt='web-development' className='w-10 h-10 object-contain'/>
          <h3 className='text-white text-[15px] font-bold text-center'>{title}</h3>
        </div>
      </motion.div>
    </Tilt>
  )
}


const About = () => {
  return (
    <section>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      <motion.p variants={fadeIn("", "", 0.1, 1)} className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        I'm an enthusiastic individual with a strong foundation in Software Development 
        and a talent for creating user-friendly and visually appealing web applications. 
        I am dedicated to cotinuous learning and have recently completed <span>
          <a 
            href="https://github.com/maddc0de/learning-journey-at-makers/blob/main/README.md" 
            className={`${styles.sectionHyperlinkText}`}
          >
            Makers' Bootcamp
          </a>
        </span>
        , where I expanded my programming skills. Drawing from my background in Interior Architecture and Industrial Digitalisation, 
        I bring a fresh perspective that combines user-centric thinking with technical expertise.
        I'm excited to continue my journey in the tech field, collaborating with teams to develop
        software that seamlessly blend practicality with great user experience!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  )
}

export default SectionWrapper(About, "about")