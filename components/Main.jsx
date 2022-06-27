import React from 'react'
import Image from 'next/image'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsTwitter } from 'react-icons/bs'
import { SiUpwork } from 'react-icons/si'
import { GrMail } from 'react-icons/gr'
import FleekImg from '../public/assets/skills/fleek.png'



const style = {
  mainWrapper: 'w-full h-screen text-center',
  mainContainer: 'max-w-[1240px] w-full h-full mx-auto p-2 flex flex-col justify-center items-center',
  headerText: 'py-2 text-gray-700',
  focusText: 'uppercase py-4 text-sm font-semibold text-[#454E56] max-w-[80%] m-auto',
  spanText: 'text-[#8A2BE2]',
  socialsContainer: 'flex items-center justify-between max-w-[330px] m-auto py-2',
  socialsIcon:'rounded-full p-3 hover:scale-110 ease-in duration-300',
  linkedIn: 'text-[#0072B1]',
  twitter: 'text-[#00ACEE]',
  mail: 'text-[#8A2BE2]',
  upWork: 'text-[#2BE22E]',
  hostedContainer: 'flex flex-col items-center',
  hosted: 'flex flex-col w-[150px] h-[150px] justify-center items-center'
}

const Main = () => {
  return (
    <div className={style.mainWrapper}>
      <div className={style.mainContainer}>
        <div>
          <h1 className={style.headerText}>
            {`Hi, I'm `}<span className={style.spanText}>{`Ian`}</span>
          </h1>
          <h1 className={style.headerText}> 
            {`A Blockchain Developer`} 
          </h1>
          <p className={style.focusText}>
            {`Smart Contracts | Digital Assets | Protocols | DApps`}
          </p>
          <div className={style.socialsContainer}>
            <div className={`${style.linkedIn} ${style.socialsIcon}`}>
              <a href='https://www.linkedin.com/in/iwboyle' target='_blank' rel="noopener noreferrer">
                <FaLinkedinIn size={30}/>
              </a>
            </div> 
            <div className={style.socialsIcon}>
              <a href='https://github.com/ianboyle' target='_blank' rel="noopener noreferrer">
                <FaGithub size={30}/>
              </a>
            </div> 
            <div className={`${style.twitter} ${style.socialsIcon}`}>
              <a href='https://twitter.com/ianwboyle' target='_blank' rel="noopener noreferrer">
                <BsTwitter size={30}/>
              </a>
            </div> 
            <div className={`${style.mail} ${style.socialsIcon}`}>
              <a href='mailto:ianwboyle@proton.me' target='_blank' rel="noopener noreferrer">
                <GrMail size={30}/>
              </a>
            </div> 
            <div className={`${style.upWork} ${style.socialsIcon}`}>
              <a href='https://www.upwork.com/freelancers/~01b0976c466a0e0363?viewMode=1' target='_blank' rel="noopener noreferrer">
                <SiUpwork size={30}/>
              </a>
            </div>
          </div>
          <div className={style.hostedContainer}>
            <div className={style.hosted}>
              <p>Deployed with Fleek</p>
              <Image
                src={FleekImg}
                width={50}
                height={50}
                alt='Fleek'
              />  
            </div>
          </div>   
        </div>
      </div>
    </div>
  )
}

export default Main