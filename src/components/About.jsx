import React from 'react'
import { motion } from 'framer-motion'

import { styles } from "../styles";
import { services } from '../constants';

const ServiceCard = ({ index, title, icon}) => {

}


const About = () => {
  return (
    <section>
      <motion.div>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>About Me</h2>
      </motion.div>

      <motion.p className='mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]'>
        I'm a Junior Software Engineer with a strong foundation in JavaScript and Ruby, 
        and a knack for developing user-friendly and visually appealing software solutions. 
        I love learning and have recently completed Makers' Bootcamp, where I expanded my 
        programming skills. Drawing from my background in Interior Architecture and Design, 
        I bring a unique perspective that combines user-centric thinking with technical expertise.
        I'm excited to continue my journey in the tech field, collaborating with teams to develop
        software that combines practicality with a touch of style. Let's create something amazing together!
      </motion.p>

      <div className='mt-20 flex flex-wrap gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </section>
  )
}

export default About