import React from 'react'
import SkillItem from './SkillItem'
import SolidityImg from '../public/assets/skills/solidity.png'
import NextJSImg from '../public/assets/skills/nextjs.png'
import JavaScriptImg from '../public/assets/skills/javascript.png'
import ReactImg from '../public/assets/skills/react.png'
import TailwindImg from '../public/assets/skills/tailwind.png'
import GunJSImg from '../public/assets/skills/gunjs.png'
import FleekImg from '../public/assets/skills/fleek.png'
import EthersJSImg from '../public/assets/skills/ethersjs.png'

const Skills = () => {
  return (
    <div id='skills' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#8A2BE2]'>Skills</p>
        <h2 className='py-4'>Blockchain Stack</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          <SkillItem
            title='Solidity'
            skillImg={SolidityImg}
          />
          <SkillItem
            title='NextJS'
            skillImg={NextJSImg}
          />
          <SkillItem
            title='ReactJS'
            skillImg={ReactImg}
          />
            <SkillItem
            title='JavaScript'
            skillImg={JavaScriptImg}
          />
          <SkillItem
            title='EthersJS'
            skillImg={EthersJSImg}
          />
          <SkillItem
            title='Tailwind CSS'
            skillImg={TailwindImg}
          />
          <SkillItem
            title='GunJS'
            skillImg={GunJSImg}
          />
          <SkillItem
            title='Fleek'
            skillImg={FleekImg}
          />
        </div>
      </div>
    </div>
  )
}

export default Skills