import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const style = {
  projectItemWrapper: 'relative flex flex-col items-center justify-center h-auto w-full rounded-sm bg-[#FFF] dark:bg-[#2A2E35] xl:hover:scale-105 ease-in duration-300',
  ImgContainer: 'p-4',
  projectTitle: 'uppercase text-lg tracking-wider text-center p-2',
  projectDescription: 'pb-4 p-2 text-center text-sm',
  linkContainer: 'flex items-center w-full px-4 pb-8 pt-4',
  moreInfo: 'uppercase text-center text-black dark:text-black py-4 w-full rounded-sm font-bold bg-[#83E22b] text-md cursor-pointer',
}

const ProjectItem = ({title, backgroundImg, description, projectUrl}) => {
  return (
    <div className={style.projectItemWrapper}>
      <div className={style.ImgContainer}>
        <Image 
          src={backgroundImg} 
          alt='/' width={600} height={500} 
        />
      </div> 
      <h3 className={style.projectTitle}>{title}</h3>
      <p className={style.projectDescription}>{description}</p>
      <div className={style.linkContainer}>
        <Link href={projectUrl}>
          <p className={style.moreInfo}>{`SEE PROJECT`}</p>
        </Link>
      </div>
    </div>
  )
}

export default ProjectItem