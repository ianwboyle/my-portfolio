import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const style = {
  projectItemWrapper: 'relative flex flex-col items-center justify-center h-auto w-full rounded-sm bg-[#FFF] dark:bg-[#2A2E35] xl:hover:scale-105 ease-in duration-300',
  ImgContainer: 'px-4 pt-4',
  projectTitle: 'p-1 uppercase text-lg tracking-wider text-center',
  projectDescription: 'px-2 text-center text-sm',
  linkContainer: 'flex flex-col items-center w-full px-4 py-2 pb-4',
  moreInfo: 'uppercase text-center text-black dark:text-black p-2 mt-2 w-full rounded-sm font-bold bg-[#83E22b] text-md cursor-pointer',
  repo: 'bg-[#00bbf9]',
  demo: 'bg-[#9b5de5]'
}

const ProjectItem = ({title, backgroundImg, description, githubUrl, demoUrl}) => {
  return (
    <div className={style.projectItemWrapper}>
      <div className={style.ImgContainer}>
        <Image 
          src={backgroundImg} 
          alt='/' width={400} height={400} 
        />
      </div> 
      <h3 className={style.projectTitle}>{title}</h3>
      <p className={style.projectDescription}>{description}</p>
      <div className={style.linkContainer}>
        <Link href={githubUrl} target="_blank" rel="noopener noreferrer">
          <p className={`${style.moreInfo} ${style.repo}`}>{`GO TO REPO`}</p>
        </Link>
        <Link href={demoUrl} target="_blank" rel="noopener noreferrer">
          <p className={`${style.moreInfo} ${style.demo}`}>{`VIEW DEMO`}</p>
        </Link>
      </div>
    </div>
  )
}

export default ProjectItem