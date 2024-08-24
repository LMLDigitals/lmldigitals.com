import Link from 'next/link';
import { AnimatedLMLDigitalsBadge } from './LmlDigitalsBadge';
import SocialsProfiles from './SocialsProfiles';
import { Button } from './ui/button';

function Hero() {
  return (
    <>
      <div className="lg:mt-10 2xl:mt-24  lg:mx-44 xl:mx-16  2xl:bg-transparent 2xl:mx-72 lg:flex lg:items-center lg:justify-center hidden   transition-all">
        <div className="flex flex-col items-start gap-8 w-full     ">
          <AnimatedLMLDigitalsBadge />
          <h1 className="sm:text-4xl lg:text-4xl xl:text-5xl xl:w-full 2xl:text-6xl  2xl:w-10/12 leading-tight font-bold">
            Transform your <span className="text-red-500">business</span> with
            our innovative digital marketing and software{' '}
            <span className="text-red-500">solutions</span>
            <span className="text-yellow-500">.</span>
          </h1>

          <div className="flex items-center gap-2">
            <Link href={`/services`}>
              <Button className="h-11 w-56 transition-all hover:bg-red-500">
                Browse Our Services
              </Button>
            </Link>
            {/* <Link href={`/about`}>
                     <Button
                        variant={'ghost'}
                        className='hover:bg-transparent space-x-2 group'
                     >
                        <span>Meet our team</span>
                        <MoveRight size={16} className='hover-move-right' />
                     </Button>
                  </Link> */}
          </div>
        </div>

        <div className="flex items-center gap-10">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="xl:w-2/3 2xl:w-11/12 "
          >
            <source src={'/video2.mp4'} type="video/mp4" />
          </video>
          <SocialsProfiles />
        </div>
      </div>
      <MediumSizeHero />
      <MobileHeroSize />
    </>
  );
}

function MediumSizeHero() {
  return (
    <div className="hidden mt-8 sm:mx-28 sm:flex sm:flex-col sm:items-center sm:justify-center space-y-10 lg:hidden transition-all">
      <div className="flex items-center justify-between  ">
        <video className="w-96" autoPlay loop muted>
          <source src={'/video2.mp4'} type="video/mp4" />
        </video>

        <SocialsProfiles />
      </div>
      <div className="flex flex-col items-center gap-8">
        <AnimatedLMLDigitalsBadge />
        <h1 className="sm:text-4xl  lg:text-4xl xl:text-5xl  2xl:text-6xl text-center lg:text-start  2xl:w-3/4 leading-tight font-bold">
          Transform your <span className="text-red-500">business</span> with our
          innovative digital marketing and software{' '}
          <span className="text-red-500">solutions</span>
          <span className="text-yellow-500">.</span>
        </h1>

        <div className="flex items-center">
          <Link href={'/services'}>
            <Button className="h-11 w-56 transition-all hover:bg-red-500">
              Browse Our Services
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
function MobileHeroSize() {
  return (
    <div className=" mt-10 mx-2 flex flex-col items-center justify-center   sm:hidden  transition-all ">
      <div className="flex flex-col items-center justify-center gap-8">
        <AnimatedLMLDigitalsBadge />
        <h1 className="text-3xl leading-tight font-bold text-center ">
          Transform your <span className="text-red-500">business</span> with our
          innovative digital marketing and software{' '}
          <span className="text-red-500">solutions</span>
          <span className="text-yellow-500">.</span>
        </h1>

        <div className="flex flex-col justify-center ">
          <Link href={'/services'}>
            <Button className="h-11 w-56 transition-all hover:bg-red-500">
              Browse Our Services
            </Button>
          </Link>
        </div>
      </div>
      <div>
        <video className="w-96" autoPlay loop muted>
          <source src={'/video2.mp4'} type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default Hero;
