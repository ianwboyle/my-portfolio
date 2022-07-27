import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';
import CBBImg from '../public/assets/projects/chainbattlebanner.jpg';

const minter = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={CBBImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2 text-white dark:text-white'>{"Chain Battle (NFT)"}</h2>
          <h3 className='text-white dark:text-white'>{"Solidity"}</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>{"Project"}</p>
          <h2>{"Overview"}</h2>
          <p>
          {"This is the basics to a blockchain game. It is a fully dynamic NFT with on-chain metadata that changes based on your interactions with it, and deployed on Polygon Mumbai to lower gas fees. You can train this NFT to battle other NFTs and earn rewards."}
          </p>
          <a
            href='https://github.com/ianwboyle/Chain-Battles'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>{"Code"}</button>
          </a>
          <a
            href='https://testnets.opensea.io/assets/mumbai/0xe784439ece59917ed28081c1365a20cd2fbb9ac1/1/'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>{"Demo"}</button>
          </a>
        </div>
        <div className='col-span-4 md:col-span-1 py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>{"Technologies"}</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> {"Solidity"}
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>{"Back"}</p>
        </Link>
      </div>
    </div>
  );
};

export default minter;