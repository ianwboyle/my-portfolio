import React from 'react'
import Image from 'next/image'
import SolidityImg from '../public/assets/skills/solidity.png'
import NextJSImg from '../public/assets/skills/nextjs.png'
import JavaScriptImg from '../public/assets/skills/javascript.png'
import TailwindImg from '../public/assets/skills/tailwind.png'
import GunJSImg from '../public/assets/skills/gunjs.png'
import EthersJSImg from '../public/assets/skills/ethersjs.png'
import HardhatImg from '../public/assets/skills/hardhat.png'



const style = {
  skillsWrapper: 'w-full md:h-screen p-2 flex items-center py-16',
  skillsContainer: 'max-w-[1240px] mx-auto flex flex-col justify-center h-full p-4',
  skillsList: 'grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8',
  headerContainer: 'py-4',
  header: 'text-xl py-2 tracking-widest uppercase text-[#8A2BE2] dark:text-[#8A2BE2]',
  subheader: 'p-2',
  skillItemWrapper: 'p-4 shadow-xl rounded-md hover:scale-105 ease-in duration-300 dark:bg-[#2A2E35]',
  skillItemContainer: 'grid grid-row-2 gap-2 sm:grid-cols-2 md:gap-8 justify-center items-center',
  skillImgContainer: 'm-auto',
  skillTitle: 'flex flex-col items-center justify-center',
}

const Skills = () => {
  return (
    <div id='skills' className={style.skillsWrapper}>
      <div className={style.skillsContainer}>
        <div className={style.headerContainer}>
          <p className={style.header}>{`Skills`}</p>
          <h2 className={style.subHeader}>{`Blockchain Stack`}</h2>
        </div>
        <div className={style.skillsList}>
          <a href='https://solidity.readthedocs.io/en/v0.7.0/' target='_blank' rel='noopener noreferrer'>
            <div className={style.skillItemWrapper}>
              <div className={style.skillItemContainer}>
                <div className={style.skillImgContainer}>
                  <Image 
                    src={SolidityImg}
                    alt='/' 
                    width={50} 
                    height={50} 
                  />
                </div>
                <div className={style.skillTitle}>
                  <h3>{`Solidity`}</h3>
                </div>
              </div>
            </div>
          </a>
          <a href='https://hardhat.org/' target='_blank' rel='noopener noreferrer'>
            <div className={style.skillItemWrapper}>
              <div className={style.skillItemContainer}>
                <div className={style.skillImgContainer}>
                  <Image 
                    src={HardhatImg}
                    alt='/' 
                    width={70} 
                    height={50} 
                  />
                </div>
                <div className={style.skillTitle}>
                  <h3>{`Hardhat`}</h3>
                </div>
              </div>
            </div>
          </a>
          <a href='https://www.javascript.com/' target='_blank' rel='noopener noreferrer'>
            <div className={style.skillItemWrapper}>
              <div className={style.skillItemContainer}>
                <div className={style.skillImgContainer}>
                  <Image 
                    src={JavaScriptImg}
                    alt='/' 
                    width={50} 
                    height={50} 
                  />
                </div>
                <div className={style.skillTitle}>
                  <h3>{`JavaScript`}</h3>
                </div>
              </div>
            </div>
          </a>
          <a href='https://docs.ethers.io/v5/' target='_blank' rel='noopener noreferrer'>
            <div className={style.skillItemWrapper}>
              <div className={style.skillItemContainer}>
                <div className={style.skillImgContainer}>
                  <Image 
                    src={EthersJSImg}
                    alt='/' 
                    width={70} 
                    height={50} 
                  />
                </div>
                <div className={style.skillTitle}>
                  <h3>{`Ethers.js`}</h3>
                </div>
              </div>
            </div>
          </a>
          <a href='https://nextjs.org/' target='_blank' rel='noopener noreferrer'>
            <div className={style.skillItemWrapper}>
              <div className={style.skillItemContainer}>
                <div className={style.skillImgContainer}>
                  <Image 
                    src={NextJSImg}
                    alt='/' 
                    width={50} 
                    height={50} 
                  />
                </div>
                <div className={style.skillTitle}>
                  <h3>{`Next.js`}</h3>
                </div>
              </div>
            </div>
          </a>
          <a href='https://gun.eco/' target='_blank' rel='noopener noreferrer'> 
            <div className={style.skillItemWrapper}>
              <div className={style.skillItemContainer}>
                <div className={style.skillImgContainer}>
                  <Image 
                    src={GunJSImg}
                    alt='/' 
                    width={50} 
                    height={50} 
                  />
                </div>
                <div className={style.skillTitle}>
                  <h3>{`Gun.js`}</h3>
                </div>
              </div>
            </div>
          </a>
          <a href='https://tailwindcss.com/' target='_blank' rel='noopener noreferrer'>
            <div className={style.skillItemWrapper}>
              <div className={style.skillItemContainer}>
                <div className={style.skillImgContainer}>
                  <Image 
                    src={TailwindImg}
                    alt='/' 
                    width={50} 
                    height={50} 
                  />
                </div>
                <div className={style.skillTitle}>
                  <h3>{`Tailwind CSS`}</h3>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div> 
  )
}

export default Skills