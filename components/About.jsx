import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Avatar from '../public/assets/avatar.png'

const style = {
  aboutWrapper: 'w-full md:h-screen p-2 flex items-center py-16',
  aboutContainer: 'max-w-[1240px] m-auto flex flex-col xl:flex-row gap-8',
  aboutHeader: 'uppercase text-xl tracking-widest text-[#8A2BE2] dark:text-[#8A2BE2]',
  avatarImgContainer: 'w-auto h-auto m-auto rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300',
  infoContainer: 'col-span-2 xl:w-full p-4',
  taglineText: 'uppercase text-sm tracking-widest text-gray-600 py-2',
  projectLink: 'py-2 text-[#2BA3E2] dark:text-[#2BA3E2] underline cursor-pointer',
  genericText: 'py-2',
  taglineText: 'py-2 uppercase',
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
          <p className={style.taglineText}>{"// Radical Technology & Innovative Design "}</p>
          <p className={style.genericText}>
            {`Dedicated to onboarding the next wave of digital citizens into the wild & wonderful world of Web3!`}
          </p>
          <p className={style.genericText}>
            {`I believe smart contracts are set for mass adoption. They will soon be far more mainstream as people increasingly understand and gain confidence in blockchain technology.`}
          </p> 
          <p className={style.genericText}>
            {`My goal is to build cross-chain dApps that generate a positive User Experience (UX), and produce a high-quality User Interface (UI), combined  smart contracts and blockchain technology.`}
          </p>
          <p className={style.genericText}>
            {` I design, build, and maintain efficient, reusable, and reliable code, which is supported on all Blockchains using the Ethereum protocol.`}
          </p>
          <p className={style.taglineText}>
            {`Web1 was read-only // Web2 is read-write // Web3 shall be read-write-own`}
          </p>
          <Link href='/#projects'>
            <p className={style.projectLink}>{`Check out some of my latest projects.`}</p>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default About