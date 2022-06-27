import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const style = {
  projectItemWrapper: 'relative flex flex-col items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-sm bg-[#FFF] group',
  ImgContainer: 'p-4',
  projectTitle: 'uppercase text-2xl tracking-wider text-center p-2',
  projectDescription: 'pb-4 pt-2 text-center',
  linkContainer: 'flex items-center w-full px-4 pb-8 pt-4',
  moreInfo: 'uppercase text-center text-[#FFF] py-4 w-full rounded-sm font-bold bg-[#83E22b] text-sm cursor-pointer',
}

const ProjectItem = ({title, backgroundImg, description, projectUrl}) => {
  return (
    <div className={style.projectItemWrapper}>
      <div className={style.ImgContainer}>
        <Image 
          src={backgroundImg} 
          alt='/' width={1000} height={600} 
        />
      </div> 
      <h3 className={style.projectTitle}>{title}</h3>
      <p className={style.projectDescription}>{description}</p>
      <div className={style.linkContainer}>
        <Link href={projectUrl}>
          <p className={style.moreInfo}>{`Coming Soon`}</p>
        </Link>
      </div>
    </div>
  )
}

export default ProjectItem