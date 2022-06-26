import React from 'react'
import ProjectItem from './ProjectItem'



const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#8A2BE2]'>
          Projects
        </p>
        <h2 className='py-4'>
          What I've Built
        </h2>
        <div className='grid md:grid-cols-2 gap-8'>
        <ProjectItem
            title='Property Finder'
            backgroundImg='/../public/assets/projects/property.jpg'
            projectUrl='/property'
            tech='React JS'
          />
          <ProjectItem
            title='Crypto App'
            backgroundImg='/../public/assets/projects/crypto.jpg'
            projectUrl='/crypto'
            tech='React JS'

          />
          <ProjectItem
            title='Netflix App'
            backgroundImg='/../public/assets/projects/netflix.jpg'
            projectUrl='/netflix'
            tech='React JS'

          />
          <ProjectItem
            title='Twitch UI'
            backgroundImg='/../public/assets/projects/twitch.jpg'
            projectUrl='/twitch'
            tech='Next JS'

          />
        </div>
      </div>
    </div>
  )
}

export default Projects