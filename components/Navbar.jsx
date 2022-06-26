import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { AiOutlineMenu, AiOutlineClose, AiOutlineMail } from 'react-icons/ai'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import { useRouter } from 'next/router';

const style = {
  logoImg: 'hover:cursor-pointer',
  navbarContainer: 'flex justify-between items-center w-full h-full px-2 2xl:px-16',
  navbarLinkContainer: 'hidden md:flex',
  navbarLink: 'ml-10 text-xl uppercase hover:text-[#8A2BE2]',
  menuOpenIcon:'md:hidden',
  menuCloseIcon: 'rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer',
  navMenuHeaderContainer: 'flex w-full items-center justify-between',
  navMenuTaglineContainer: 'border-b border-gray-300 my-4',
  navMenuTagline: 'w-[85%] md:w-[90%] py-4',
  navMenuLinkContainer: 'py-4 flex flex-col',
  navMenuLinkList: 'uppercase',
  navMenuLink: 'py-4 text-xl',
  socialsMainContainer: 'pt-40',
  socialsHeader: 'text-xl uppercase tracking-widest text-[#8A2BE2]',
  socialsIconContainer: 'flex items-center justify-between my-4 w-full sm:w-[80%]',
  socialsIcon:'rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer ease-in duration-300',
}

const Navbar = () => {
  const [nav, setNav] = useState(false)
  const [shadow, setShadow] = useState(false);
  const [navBg, setNavBg] = useState('#ecf0f3');
  const [linkColor, setLinkColor] = useState('#1f2937');
  const router = useRouter();

  useEffect(() => {
    if (
      router.asPath === '/property' ||
      router.asPath === '/crypto' ||
      router.asPath === '/netflix' ||
      router.asPath === '/twitch'
    ) {
      setNavBg('transparent');
      setLinkColor('#ecf0f3');
    } else {
      setNavBg('#ecf0f3');
      setLinkColor('#1f2937');
    }
  }, [router]);

  const toggleNav = () => {
    setNav(!nav);
  };

  useEffect(() => {
    const handleShadow = () => {
      if (window.scrollY >= 90) {
        setShadow(true);
      } else {
        setShadow(false);
      }
    };
    window.addEventListener('scroll', handleShadow);
  }, []);

  return (
    <div
      style={{ backgroundColor: `${navBg}` }}
      className={
        shadow
          ? 'fixed w-full h-20 shadow-xl z-[100] ease-in-out duration-300'
          : 'fixed w-full h-20 z-[100]'
      }
    >
      <div className={style.navbarContainer}>
        <Link href='/'>
          <Image
            className={style.logoImg} 
            src="/../public/assets/navLogo.png" 
            alt="/" 
            width={50} 
            height={50} 
          />
        </Link>
        <div>
          <ul style={{ color: `${linkColor}` }} className={style.navbarLinkContainer}>
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
          <div 
            style={{ color: `${linkColor}` }}
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
          ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] md:w-[45%] h-screen bg-[#ECF0F3] p-10 ease-in duration-500' 
          : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'
        }
      >
        <div>
          <div className={style.navMenuHeaderContainer}>
            <Link href='/'>
              <Image 
                onClick={toggleNav}
                src='/../public/assets/navLogo.png' 
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
            <p className={style.navMenuTagline}>{`Let's build something legendary together.`}</p>
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
                <div className={style.socialsIcon}>
                  <FaLinkedinIn size={25}/>
                </div> 
                <div className={style.socialsIcon}>
                  <FaGithub size={25}/>
                </div> 
                <div className={style.socialsIcon}>
                  <AiOutlineMail size={25}/>
                </div> 
                <div className={style.socialsIcon}>
                  <BsFillPersonLinesFill size={25}/>
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