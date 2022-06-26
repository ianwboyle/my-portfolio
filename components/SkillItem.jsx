import React from 'react'
import Image from 'next/image'

const style = {
  skillItemWrapper: 'p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300',
  skillItemContainer: 'grid grid-cols-2 gap-4 justify-center items-center',
  skillImgContainer: 'm-auto',
  skillTitle: 'flex flex-col items-center justify-center',
}

const SkillItem = ({title, skillImg}) => {
  return (
    <div className={style.skillItemWrapper}>
      <div className={style.skillItemContainer}>
        <div className={style.skillImgContainer}>
          <Image 
            src={skillImg}
            alt='/' 
            width={50} 
            height={50} 
          />
        </div>
        <div className={style.skillTitle}>
          <h3>{title}</h3>
        </div>
      </div>
    </div>
  )
}

export default SkillItem