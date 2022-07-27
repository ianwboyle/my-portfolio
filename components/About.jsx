import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Avatar from '../public/assets/avatar.png'

const style = {
  aboutWrapper: 'w-full md:h-screen p-2 flex items-center py-16',
  aboutContainer: 'max-w-[1240px] m-auto flex flex-col xl:flex-row gap-8',
  aboutHeader: 'uppercase text-xl tracking-widest text-[#8A2BE2] dark:text-[#8A2BE2]',
  avatarImgContainer: 'w-auto h-auto m-auto rounded-xl flex items-center justify-center p-4',
  infoContainer: 'col-span-2 xl:w-full p-4',
  taglineText: 'uppercase text-sm py-2',
  roleHeader: 'uppercase text-lg tracking-widest pt-4',
  projectLink: 'py-2 text-[#2BA3E2] hover:text-[#2B83E2] dark:text-[#2BA3E2] dark:hover:hover:text-[#2B83E2] cursor-pointer',
  genericText: 'py-2',
  taglineText: 'py-2 uppercase',
  taglineFooter: 'uppercase text-lg py-2 text-[#12181B] dark:text-[#FFF]'
}

const About = () => {
  return (
    <div id='about' className={style.aboutWrapper}>
      <div className={style.aboutContainer}>
        <div className={style.avatarImgContainer}>
          <Image 
            src={Avatar} 
            alt='/' 
            width={500} 
            height={500} 
          />
        </div>
        <div className={style.infoContainer}>
          <p className={style.aboutHeader}>{`About`}</p>
          <h2 className={style.genericText}>{`My Vision`}</h2>
          <p className={style.taglineText}>{"// Welcome to the Digital Industrial Revolution"}</p>
          <p className={style.taglineFooter}>
              {`READ // WRITE // OWN // AGREE // PROTECT`}
          </p>
          <p className={style.genericText}>
              {`Web3 enables true ownership of Digital Assets. The adoption of this technology is radically changing the way we interact with the world. I design, build, and maintain efficient, reusable, and reliable Smart Contracts that will help shape our digital future.`}
          </p>
          <p className={style.genericText}>
              {`I am a builder. Soemone who can iterate and ship fast, while keeping UX a top priority. Being pixel perfect is in my DNA, ensuring a high quality user experience for all my builds.`}
          </p> 
          <p className={style.genericText}>
              {`Let's build the future together.`}
          </p> 
          <Link href='/#projects'>
            <p className={style.projectLink}>{`Check out some of my latest projects...`}</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About