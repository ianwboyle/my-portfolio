import React from 'react'
import ProjectItem from './ProjectItem'
import BMACImg from '../public/assets/projects/buymeacoffee.jpg'


const style = {
  projectsWrapper: 'w-full md:h-screen p-4 md:pt-10',
  projectsContainer: 'max-w-[1240px] mx-auto px-2 py-16',
  projectsHeader: 'text-xl tracking-widest uppercase text-[#8A2BE2] dark:text-[#8A2BE2]',
  projectsSubHeader: 'py-4',
  projectsItemContainer: 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8'

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
            title={`Buy Me A Coffee`}
            backgroundImg={BMACImg}
            githubUrl='https://github.com/ianwboyle/BuyMeACoffee-Website'
            demoUrl='https://buy-me-a-coffee-app.vercel.app/'
            description={`Smart contract that allows visitors to send you MATIC as a tip and leave nice messages.`}
          />
        </div>
      </div>
    </div>
  )
}

export default Projects