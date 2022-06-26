import React from 'react'
import SkillItem from './SkillItem'

const Skills = () => {
  return (
    <div id='skills' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#8A2BE2]'>Skills</p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'>
          <SkillItem
            title='HTML'
            skillImg='/../public/assets/skills/html.png'
          />
          <SkillItem
            title='CSS'
            skillImg='/../public/assets/skills/css.png'
          />
          <SkillItem
            title='JavaScript'
            skillImg='/../public/assets/skills/javascript.png'
          />
          <SkillItem
            title='React'
            skillImg='/../public/assets/skills/react.png'
          />
          <SkillItem
            title='NextJS'
            skillImg='/../public/assets/skills/nextjs.png'
          />
          <SkillItem
            title='Tailwind CSS'
            skillImg='/../public/assets/skills/tailwind.png'
          />
          <SkillItem
            title='Firebase'
            skillImg='/../public/assets/skills/firebase.png'
          />
          <SkillItem
            title='Github'
            skillImg='/../public/assets/skills/github1.png'
          />
        </div>
      </div>
    </div>
  )
}

export default Skills