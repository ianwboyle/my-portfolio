import React from 'react'
import ProjectItem from './ProjectItem'
import LoadingImg from '../public/assets/projects/loading.jpg'



const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#8A2BE2]'>
          {`Projects`}
        </p>
        <h2 className='py-4'>
          {`Building & Tinkering`}
        </h2>
        <div className='grid md:grid-cols-2 gap-8'>
          <ProjectItem
            title='Project X'
            backgroundImg={LoadingImg}
            projectUrl='/#projects'
            description='Loading...'
          />
          <ProjectItem
            title='Project Y'
            backgroundImg={LoadingImg}
            projectUrl='/#projects'
            description='Loading...'
          />
        </div>
      </div>
    </div>
  )
}

export default Projects