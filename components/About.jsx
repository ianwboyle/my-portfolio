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
          <p className={style.taglineText}>{"// RADICAL TECHNOLOGY & INNOVATIVE DESIGN"}</p>
          <p className={style.taglineFooter}>
              {`READ // WRITE // OWN // AGREE // PROTECT`}
          </p>
          <p className={style.genericText}>
              {`I am passionate about smart contracts and the blockchain. This technology is changing the way we interact with our world and I am excited to be a part of the future.`}
          </p>
          <p className={style.genericText}>
              {`Whether it's DeFi, NFTs, Digital Identity, or any other smart contract use case, I can help you build a beautiful, user-friendly application.`}
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