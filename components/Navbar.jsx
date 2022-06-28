import Image from 'next/image';
import Link from 'next/link';
import { useTheme } from 'next-themes'
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn, FaSun } from 'react-icons/fa'
import { BsTwitter, BsMoonStarsFill } from 'react-icons/bs'
import { SiUpwork } from 'react-icons/si'
import { useRouter } from 'next/router';
import { GrMail } from 'react-icons/gr'
import navLogo from '../public/assets/navLogo.png';

const style = {
  navbarContainer: 'flex justify-between items-center w-full h-full px-2 2xl:px-16 bg-[#FFF] dark:bg-[#2A2E35] ease-in duration-300',
  navLogoContainer: 'md:p-4 lg:p-0',
  logoImg: 'hover:cursor-pointer',
  navbarLinkContainer: 'hidden md:flex  ',
  navbarLink: 'ml-10 text-xl uppercase text-[#454E56] hover:cursor-pointer hover:text-[#12181B] dark:text-[#B2BECD] dark:hover:text-[#F8F8F8]',
  menuOpenIcon:'md:hidden flex items-center justify-center text-[#454E56] dark:text-[#B2BECD]',
  menuCloseIcon: 'rounded-full p-3 text-[#454E56] dark:text-[#B2BECD]',
  navMenuHeaderContainer: 'flex w-full items-center justify-between',
  navMenuTaglineContainer: 'border-b border-gray-300 my-4',
  navMenuTagline: 'w-[85%] md:w-[90%] py-4',
  navMenuLinkContainer: 'py-4 flex flex-col',
  navMenuLinkList: 'uppercase',
  navMenuLink: 'py-4 text-xl ',
  socialsMainContainer: 'pt-20',
  socialsHeader: 'text-xl uppercase tracking-widest text-center text-[#12181B]',
  socialsIconContainer: 'flex items-center justify-evenly my-4 w-full sm:w-[80%]',
  socialsIcon:'rounded-full p-3',
  gitHub: 'text-[#1218B],',
  linkedIn: 'text-[#0072B1]',
  twitter: 'text-[#00ACEE]',
  mail: 'text-[#8A2BE2]',
  upWork: 'text-[#2BE22E]',
}

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const {systemTheme, theme, setTheme} = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, [])

  const renderThemeChanger = () => {
    if (!mounted) return null;

    const currentTheme = theme === 'system' ? systemTheme : theme;

  if (currentTheme === 'dark') {
    return (
      <FaSun className='w-[25px] h-[25px]' role='button' onClick={() => setTheme('light')} />
    )
  }
  else {
    return (
      <BsMoonStarsFill className='w-[25px] h-[25px]' role='button' onClick={() => setTheme('dark')} />
      )
    }
  }

  const toggleNav = () => {
    setNav(!nav);
  };

  return (
    <div
      className={
        nav
          ? 'fixed w-full h-14 md:h-20 shadow-xl z-[100] ease-in-out duration-300'
          : 'fixed w-full h-14 md:h-20 z-[100]'
      }
    >
      <div className={style.navbarContainer}>
        <div className={style.navLogoContainer}>
          <Link href='/'>
            <Image
              className={style.logoImg} 
              src={navLogo} 
              alt="/" 
              width={50} 
              height={50} 
            />
          </Link>
        </div>
        <div className='flex flex-row'>
          <div>
            <ul className={style.navbarLinkContainer}>
              <Link href='/'>
                <li className={style.navbarLink}>{`Home`}</li>
              </Link>
              <Link href='#about'>
                <li className={style.navbarLink}>{`About`}</li>
              </Link>
              <Link href='#skills'>
                <li className={style.navbarLink}>{`Skills`}</li>
              </Link>
              <Link href='#projects'>
                <li className={style.navbarLink}>{`Projects`}</li>
              </Link>
            </ul>
          </div>
        </div>
        <div className='flex flex-row'>
          <div className='flex items-center p-6 justify-center text-[#454E56] hover:cursor-pointer hover:text-[#12181B] dark:text-[#B2BECD] dark:hover:text-[#F8F8F8]'>
              {renderThemeChanger()}
          </div>
          <div 
            onClick={toggleNav} 
            className={style.menuOpenIcon}
          >
            <AiOutlineMenu size={25}/>
          </div>
        </div>
      </div>


    {/* Mobile Menu */}
    {/* Overlay */}
    <div className={
      nav 
        ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' 
        : ''
        }
      >
      {/* Side Drawer Menu */}
      <div className={
        nav 
          ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#FFF] dark:bg-[#2A2E35] p-10 ease-in duration-500' 
          : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
        }
      >
        <div>
          <div className={style.navMenuHeaderContainer}>
            <Link href='/'>
              <Image 
                onClick={toggleNav}
                src={navLogo}
                alt='/' 
                width={50} 
                height={50}
              />
            </Link>
            <div onClick={toggleNav} className={style.menuCloseIcon}>
              <AiOutlineClose size={25}/>
            </div>
          </div>
          <div className={style.navMenuTaglineContainer}>
            <p className={style.navMenuTagline}>{`Let's build the future together.`}</p>
          </div>
        </div>
        <div className={style.navMenuLinkContainer}>
          <ul className={style.navMenuLinkList}>
              <Link href='/'>
                <li onClick={toggleNav} className={style.navMenuLink}>{`Home`}</li>
              </Link>
              <Link href='#about'>
                <li onClick={toggleNav} className={style.navMenuLink}>{`About`}</li>
              </Link>
              <Link href='#skills'>
                <li onClick={toggleNav} className={style.navMenuLink}>{`Skills`}</li>
              </Link>
              <Link href='#projects'>
                <li onClick={toggleNav} className={style.navMenuLink}>{`Projects`}</li>
              </Link>
            </ul>
            <div className={style.socialsMainContainer}>
              <p className={style.socialsHeader}>
                {`Let's Connect`}
              </p>
              <div className={style.socialsIconContainer}>
                <div className={`${style.linkedIn} ${style.socialsIcon}`}>
                  <a href='https://www.linkedin.com/in/iwboyle' target='_blank' rel="noopener noreferrer">
                    <FaLinkedinIn size={25}/>
                  </a>
                </div> 
                <div className={`${style.gitHub} ${style.socialsIcon}`}>
                  <a href='https://github.com/ianboyle' target='_blank' rel="noopener noreferrer">
                    <FaGithub size={25}/>
                  </a>
                </div> 
                <div className={`${style.twitter} ${style.socialsIcon}`}>
                  <a href='https://twitter.com/ianwboyle' target='_blank' rel="noopener noreferrer">
                    <BsTwitter size={25}/>
                  </a>
                </div> 
                <div className={`${style.mail} ${style.socialsIcon}`}>
                  <a href='mailto:ianwboyle@proton.me' target='_blank' rel="noopener noreferrer">
                    <GrMail size={25}/>
                  </a>
                </div> 
                <div className={`${style.upWork} ${style.socialsIcon}`}>
                  <a href='https://www.upwork.com/freelancers/~01b0976c466a0e0363?viewMode=1' target='_blank' rel="noopener noreferrer">
                    <SiUpwork size={25}/>
                  </a>
                </div> 
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar