import React from 'react'
import { motion } from 'framer-motion'
import { Tilt } from 'react-tilt'

import { styles } from "../styles"
import { SectionWrapper } from "../hoc"
import { fadeIn, textVariant } from "../utils/motion"
import { github } from "../assets"
import { projects } from "../constants"

const ProjectCard = ({ index, name, description, tags, gif, sourceCodeLink }) => {
  return (
    <motion.div variants={fadeIn("down", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{ max: 45, scale: 1, speed: 450 }}
        className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img src={gif} alt={name} className='w-full h-full object-cover rounded-2xl'/>

          <div className='absolute inset-0 flex justify-end m-3 card-img_hover'>
            <div
              onClick={() => window.open(sourceCodeLink, "_blank")}
              className='flex justify-center item-center black-gradient w-10 h-10 rounded-full cursor-pointer hover:scale-110 transform transition-transform duration-300'
            >
              <img src={github} alt='github' className='object-contain' />
            </div>
          </div>
        </div>

        <div className='mt-5'>
          <h3 className='text-[24px] text-white font-bold '>{name}</h3>
          <p className='text-[14px] mt-2 text-secondary'>{description}</p>
        </div>

        <div className='flex flex-wrap mt-4 gap-2'>
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[14px] ${tag.color}`}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Projects = () => {
  return (
    <section>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>My work</p>
        <h2 className={styles.sectionHeadText}>Projects</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p 
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Each project is briefly described along with links to their code repositories in the top right corner.  
          It showcases my ability to solve problems, my adaptability to work with different technologies, and manage projects effectively.
        </motion.p>
      </div>

      <div className='flex flex-wrap mt-20 gap-7'>
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project}/>
        ))}
      </div>
    </section>
  )
}

export default SectionWrapper(Projects, "projects")