import memojiImage from '@/assets/images/memoji-computer.png'
import ArrowDown from '@/assets/icons/arrow-down.svg'
import grainImage from '@/assets/images/grain.jpg'
import StarIcon from '@/assets/icons/star.svg'
import SparkleIcon from '@/assets/icons/sparkle.svg'
import Image from 'next/image';
import HeroOrbit from '@/components/HeroOrbit';
export const HeroSection = () => {
  return <div id='hero' className='py-32  lg:py-50 relative  z-0 overflow-x-clip'>
    <div className='absolute inset-0 [mask-image:linear-gradient(to_bottom, transparent, black_10%,black_70%, transparent)]'>

      <div className='absolute inset-0 -z-50 opacity-5' style={{
        backgroundImage: `url(${grainImage.src})`
      }}></div>


      <div className='size-[620px] hero-ring'></div>
      <div className='size-[820px] hero-ring'></div>
      <div className='size-[1020px] hero-ring'></div>
      <div className='size-[1220px] hero-ring'></div>

      <HeroOrbit size={700} rotation={-72}>

        <StarIcon className="size-28 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={550} rotation={20}>

        <StarIcon className="size-12 text-emerald-300" />
      </HeroOrbit>
      <HeroOrbit size={590} rotation={98}>

        <StarIcon className="size-8 text-emerald-300 " />
      </HeroOrbit>
      <HeroOrbit size={430} rotation={-12}>

        <SparkleIcon className="size-8 text-emerald-300/20 " />
      </HeroOrbit>
      <HeroOrbit size={440} rotation={78}>

        <SparkleIcon className="size-10 text-emerald-300/20 " />
      </HeroOrbit>
      <HeroOrbit size={530} rotation={178}>

        <SparkleIcon className="size-8 text-emerald-300/20 " />
      </HeroOrbit>
      <HeroOrbit size={710} rotation={144}>

        <SparkleIcon className="size-14 text-emerald-300/20 " />
      </HeroOrbit>
      <HeroOrbit size={720} rotation={84}>

        <div className='size-3 bg-emerald-300/20 rounded-full'></div>
      </HeroOrbit>
      <HeroOrbit size={520} rotation={-45}>

        <div className='size-2 bg-emerald-300/20 rounded-full'></div>
      </HeroOrbit>
      <HeroOrbit size={650} rotation={-5}>

        <div className='size-3 bg-emerald-300/20 rounded-full'></div>
      </HeroOrbit>
    </div>

    <div className='flex flex-col  items-center '>
      <Image src={memojiImage} className='size-[100px]' alt="peeking peeking from behind laptop" />
      <div className='bg-gray-950 border border-gray-800 px-4 py-1.5 inline-flex items-center gap-4 rounded-lg'>
        <div className='bg-green-500 size-2.5 rounded-full'></div>
        <div className='text-sm font-medium '>Available for new projects</div>
      </div>
    </div>

    <div className='max-w-lg mx-auto ' >
      <h1 className=' font-serif text-3xl md:text-5xl text-center mt-8 tracking-wide '>Hi i'm Rohit Kumar 👋</h1>
      <p className='mt-4 text-center text-white/60 md:text-lg'>I specialize in transforming designs into functional , high performance web applicayion . Let's discuss your next projects</p>
    </div>
    <div className='flex flex-col md:flex-row justify-center items-center mt-8 gap-4'>
      <a href="#projects" className='inline-flex items-center gap-2 border-white/15 px-6 h-12 rounded-xl'>
        <span className='font-semibold z-20'>Explore My Work</span>
        <ArrowDown className='size-4' />
      </a>

      <button className='inline-flex items-center gap-2 border border-white bg-white text-gray-900 h-12 px-6 rounded-xl  '>
        <span >👋</span>
        <a className='z-20' href="https://www.linkedin.com/in/rohit-kumar-454591233/"><span className='font-semibold '>Let's connect</span></a>
      </button>

    </div>
  </div>;
};
