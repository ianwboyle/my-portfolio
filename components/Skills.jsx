import React from 'react'
import Image from 'next/image'
import SolidityImg from '../public/assets/skills/solidity.png'
import NextJSImg from '../public/assets/skills/nextjs.png'
import JavaScriptImg from '../public/assets/skills/javascript.png'
import ReactImg from '../public/assets/skills/react.png'
import TailwindImg from '../public/assets/skills/tailwind.png'
import GunJSImg from '../public/assets/skills/gunjs.png'
import FleekImg from '../public/assets/skills/fleek.png'
import EthersJSImg from '../public/assets/skills/ethersjs.png'
import HardhatImg from '../public/assets/skills/hardhat.png'
import RainbowKitImg from '../public/assets/skills/rainbowwallet.png'
import ChainlinkImg from '../public/assets/skills/chainlink.png'
import IPFSImg from '../public/assets/skills/ipfs.png'
import LensImg from '../public/assets/skills/lens.png'
import GraphImg from '../public/assets/skills/graph.png'
import RadicleImg from '../public/assets/skills/radicle.png'

const style = {
  skillsWrapper: 'w-full md:h-screen p-2 flex items-center py-16',
  skillsContainer: 'max-w-[1240px] mx-auto flex flex-col justify-center h-full',
  skillsList: 'grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8',
  header: 'text-xl tracking-widest uppercase text-[#8A2BE2]',
  subheader: 'py-4',
  skillItemWrapper: 'p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300',
  skillItemContainer: 'grid grid-cols-2 gap-4 justify-center items-center',
  skillImgContainer: 'm-auto',
  skillTitle: 'flex flex-col items-center justify-center',
}

const Skills = () => {
  return (
    <div id='skills' className={style.skillsWrapper}>
      <div className={style.skillsContainer}>
        <p className={style.header}>{`Skills`}</p>
        <h2 className={style.subHeader}>{`Blockchain Stack`}</h2>
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
          <a href='https://reactjs.org/' target='_blank' rel='noopener noreferrer'>
            <div className={style.skillItemWrapper}>
              <div className={style.skillItemContainer}>
                <div className={style.skillImgContainer}>
                  <Image 
                    src={ReactImg}
                    alt='/' 
                    width={50} 
                    height={50} 
                  />
                </div>
                <div className={style.skillTitle}>
                  <h3>{`React.js`}</h3>
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
          <a href='https://chain.link/' target='_blank' rel='noopener noreferrer'>
            <div className={style.skillItemWrapper}>
              <div className={style.skillItemContainer}>
                <div className={style.skillImgContainer}>
                  <Image 
                    src={ChainlinkImg}
                    alt='/' 
                    width={50} 
                    height={50} 
                  />
                </div>
                <div className={style.skillTitle}>
                  <h3>{`Chainlink`}</h3>
                </div>
              </div>
            </div>
          </a>
          <a href='https://thegraph.com/en/' target='_blank' rel='noopener noreferrer'>
            <div className={style.skillItemWrapper}>
              <div className={style.skillItemContainer}>
                <div className={style.skillImgContainer}>
                  <Image 
                    src={GraphImg}
                    alt='/' 
                    width={50} 
                    height={50} 
                  />
                </div>
                <div className={style.skillTitle}>
                  <h3>{`The Graph`}</h3>
                </div>
              </div>
            </div>
          </a>
          <a href='https://lens.xyz/' target='_blank' rel='noopener noreferrer'>
            <div className={style.skillItemWrapper}>
              <div className={style.skillItemContainer}>
                <div className={style.skillImgContainer}>
                  <Image 
                    src={LensImg}
                    alt='/' 
                    width={50} 
                    height={50} 
                  />
                </div>
                <div className={style.skillTitle}>
                  <h3>{`Lens Protocol`}</h3>
                </div>
              </div>
            </div>
          </a>
          <a href='https://ipfs.io/' target='_blank' rel='noopener noreferrer'>
            <div className={style.skillItemWrapper}>
              <div className={style.skillItemContainer}>
                <div className={style.skillImgContainer}>
                  <Image 
                    src={IPFSImg}
                    alt='/' 
                    width={50} 
                    height={50} 
                  />
                </div>
                <div className={style.skillTitle}>
                  <h3>{`IPFS`}</h3>
                </div>
              </div>
            </div>
          </a>
          <a href='https://www.rainbowkit.com/' target='_blank' rel='noopener noreferrer'>
            <div className={style.skillItemWrapper}>
              <div className={style.skillItemContainer}>
                <div className={style.skillImgContainer}>
                  <Image 
                    src={RainbowKitImg}
                    alt='/' 
                    width={50} 
                    height={50} 
                  />
                </div>
                <div className={style.skillTitle}>
                  <h3>{`RainbowKit`}</h3>
                </div>
              </div>
            </div>
          </a>
          <a href='https://fleek.co/' target='_blank' rel='noopener noreferrer'>
            <div className={style.skillItemWrapper}>
              <div className={style.skillItemContainer}>
                <div className={style.skillImgContainer}>
                  <Image 
                    src={FleekImg}
                    alt='/' 
                    width={50} 
                    height={50} 
                  />
                </div>
                <div className={style.skillTitle}>
                  <h3>{`Fleek`}</h3>
                </div>
              </div>
            </div>
          </a>
          <a href='https://radicle.xyz/' target='_blank' rel='noopener noreferrer'>
            <div className={style.skillItemWrapper}>
              <div className={style.skillItemContainer}>
                <div className={style.skillImgContainer}>
                  <Image 
                    src={RadicleImg}
                    alt='/' 
                    width={50} 
                    height={50} 
                  />
                </div>
                <div className={style.skillTitle}>
                  <h3>{`Radicle`}</h3>
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