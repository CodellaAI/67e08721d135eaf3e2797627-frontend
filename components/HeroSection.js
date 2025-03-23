
import Image from 'next/image';
import { Star } from 'lucide-react';

export default function HeroSection() {
  return (
    <section id="home" className="py-12 px-4">
      <div className="retro-card bg-black">
        <div className="pixel-border">
          <div className="flex flex-col items-center justify-center text-center">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-pixel text-retro-yellow mb-6 mt-4">
              <span className="text-retro-teal">W</span>
              <span className="text-retro-pink">e</span>
              <span className="text-retro-green">l</span>
              <span className="text-retro-yellow">c</span>
              <span className="text-white">o</span>
              <span className="text-retro-teal">m</span>
              <span className="text-retro-pink">e</span>
              <span className="text-white"> </span>
              <span className="text-retro-green">t</span>
              <span className="text-retro-yellow">o</span>
              <span className="text-white"> </span>
              <span className="text-retro-teal">1</span>
              <span className="text-retro-pink">9</span>
              <span className="text-retro-green">9</span>
              <span className="text-retro-yellow">5</span>
              <span className="text-white">!</span>
            </h1>
            
            <div className="flex items-center justify-center mb-8">
              <Star className="text-retro-yellow animate-spin-slow" size={24} />
              <div className="h-px w-16 bg-gradient-to-r from-retro-purple to-retro-teal mx-2"></div>
              <Star className="text-retro-pink animate-spin-slow" size={24} />
              <div className="h-px w-16 bg-gradient-to-r from-retro-teal to-retro-yellow mx-2"></div>
              <Star className="text-retro-green animate-spin-slow" size={24} />
            </div>
            
            <p className="text-lg font-comic mb-8 max-w-2xl text-retro-yellow">
              This website is <span className="text-retro-pink font-bold">BEST VIEWED</span> with 
              <span className="text-retro-green font-bold"> Netscape Navigator 2.0</span> at 
              <span className="text-retro-teal font-bold"> 800x600</span> resolution!
            </p>
            
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <button className="retro-button bg-retro-green text-black font-comic">
                Enter Site
              </button>
              <button className="retro-button bg-retro-pink text-black font-comic">
                Sign Guestbook
              </button>
            </div>
            
            <div className="flex items-center justify-center gap-4 mb-6">
              <Image 
                src="/images/new.gif" 
                alt="New!" 
                width={50} 
                height={30}
              />
              <p className="font-system text-white blink">Last updated: 12/14/1997</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
