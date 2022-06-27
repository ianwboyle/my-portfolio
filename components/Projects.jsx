import React from 'react'
import ProjectItem from './ProjectItem'
import LoadingImg from '../public/assets/projects/loading.jpg'

const style = {
  projectsWrapper: 'w-full md:h-screen p-4',
  projectsContainer: 'max-w-[1240px] mx-auto px-2 py-16',
  projectsHeader: 'text-xl tracking-widest uppercase text-[#8A2BE2] dark:text-[#8A2BE2]',
  projectsSubHeader: 'py-4',
  projectsItemContainer: 'grid md:grid-cols-2 gap-8'

}

const Projects = () => {
  return (
    <div id='projects' className={style.projectsWrapper}>
      <div className={style.projectsContainer}>
        <p className={style.projectsHeader}>
          {`Projects`}
        </p>
        <h2 className={style.projectsSubHeader}>
          {`Building & Tinkering`}
        </h2>
        <div className={style.projectsItemContainer}>
          <ProjectItem
            title={`Project X`}
            backgroundImg={LoadingImg}
            projectUrl='/#projects'
            description={`Loading...`}
          />
          <ProjectItem
            title={`Project Y`}
            backgroundImg={LoadingImg}
            projectUrl='/#projects'
            description={`Loading...`}
          />
        </div>
      </div>
    </div>
  )
}

export default Projects