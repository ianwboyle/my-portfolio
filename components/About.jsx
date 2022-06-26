import React from 'react'
import Image from 'next/image'
import Avatar from '../public/assets/avatar.png'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto flex flex-col xl:flex-row gap-8'>
        <div className='w-auto h-auto m-auto rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image 
            src={Avatar} 
            alt='/' 
            width={500} 
            height={500} 
          />
        </div>
        <div className='col-span-2 xl:w-full'>
          <p className='uppercase text-xl tracking-widest text-[#8A2BE2]'>{`About`}</p>
          <h2 className='py-2 text-gray-600'>{`Who I Am`}</h2>
          <p className='py-2 text-gray-600'>{"// I am a Blockchain Developer"}</p>
          <p className='py-2 text-gray-600'>
            {`Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem non maiores velit nam ratione placeat excepturi quia fugiat eveniet. Ducimus quaerat adipisci, reiciendis esse, eos eius quos, ipsam omnis repudiandae nesciunt itaque explicabo neque incidunt illo laborum voluptate? Quasi error similique optio consequatur repudiandae eius natus officiis minima quidem reprehenderit.`}
          </p>
          <p className='py-2 text-gray-600'>
            {`Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero veniam, facere repellendus fugiat modi excepturi fugit voluptates dolores commodi pariatur nesciunt quos adipisci amet eos voluptatum ratione ipsa cum unde voluptatem corporis vel minima! Velit in veniam, vero consequatur, sequi laboriosam numquam beatae, eum doloribus non iste molestiae! Molestiae, facere?`}
          </p>
          <p className='py-2 text-gray-600 underline cursor-pointer'>{`Check out some of my latest projects.`}</p>
        </div>
      </div>
    </div>
  )
}

export default About