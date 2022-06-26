import React from 'react'
import { AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'

const style = {
  mainWrapper: 'w-full h-screen text-center',
  mainContainer: 'max-w-[1240px] w-full h-full mx-auto p-2 flex flex-col justify-center items-center',
  taglineText: 'uppercase text-sm tracking-widest text-gray-600',
  headerText: 'py-2 text-gray-700',
  focusText: 'py-4 text-gray-600 max-w-[80%] m-auto',
  spanText: 'text-[#8A2BE2]',
  connectContainer: 'flex items-center justify-between max-w-[330px] m-auto py-4',
  linkContainer: 'rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer ease-in duration-300'
}

const Main = () => {
  return (
    <div className={style.mainWrapper}>
      <div className={style.mainContainer}>
        <div>
          <p className={style.taglineText}>
            {`Let's build something together.`}
          </p>
          <h1 className={style.headerText}>
            {`Hi, I'm `}<span className={style.spanText}>{`Ian`}</span>
          </h1>
          <h1 className={style.headerText}> 
            {`A Blockchain Developer`} 
          </h1>
          <p className={style.focusText}>
            {`Smart Contracts | Digital Assets | Protocols | DApps`}
          </p>
          <div className={style.connectContainer}>
            <div className={style.linkContainer}>
              <a href='/' target='_blank' rel='noopener noreferrer'>
                <FaLinkedinIn 
                  size={25}
                />
              </a>
            </div> 
            <div className={style.linkContainer}>
              <a href='/' target='_blank' rel='noopener noreferrer'>
                <FaGithub 
                  size={25}
                />
              </a>
            </div> 
            <div className={style.linkContainer}>
              <a href='/' target='_blank' rel='noopener noreferrer'>
                <AiOutlineMail 
                  size={25}
                />
              </a>
            </div> 
            <div className={style.linkContainer}>
              <a href='/' target='_blank' rel='noopener noreferrer'>
                <BsFillPersonLinesFill
                  size={25}
                />
              </a>
            </div> 
          </div>
        </div>
      </div>
    </div>
  )
}

export default Main