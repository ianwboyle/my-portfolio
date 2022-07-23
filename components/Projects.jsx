import React from 'react'
import ProjectItem from './ProjectItem'
import CoffeeImg from '../public/assets/projects/coffee.jpg'
import MintingImg from '../public/assets/projects/minting.png'

const style = {
  projectsWrapper: 'w-full md:h-screen p-4 md:pt-10',
  projectsContainer: 'max-w-[1240px] mx-auto px-2 py-16',
  projectsHeader: 'text-xl tracking-widest uppercase text-[#8A2BE2] dark:text-[#8A2BE2]',
  projectsSubHeader: 'py-4',
  projectsItemContainer: 'grid md:grid-cols-4 gap-8'

}

const Projects = () => {
  return (
    <div id='projects' className={style.projectsWrapper}>
      <div className={style.projectsContainer}>
        <p className={style.projectsHeader}>
          {`Projects`}
        </p>
        <h2 className={style.projectsSubHeader}>
          {`Building & Tinkering`}
        </h2>
        <div className={style.projectsItemContainer}>
          <ProjectItem
            title={`NFT Minting Site (dApp)`}
            backgroundImg={MintingImg}
            projectUrl='/minter'
            description={`Connect your wallet and mint NFTs with this minting dApp developed on the Goerli Testnet.`}
          />
          <ProjectItem
            title={`Buy Me A Coffee (dApp)`}
            backgroundImg={CoffeeImg}
            projectUrl='/buymeacoffee'
            description={`Decentralized "Buy Me a Coffee" that allows visitors to send you ETH as tips and leave nice messages.`}
          />
        </div>
      </div>
    </div>
  )
}

export default Projects