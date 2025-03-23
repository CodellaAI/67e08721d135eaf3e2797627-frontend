
'use client';

import Image from 'next/image';
import { Star, Music, Zap, Globe } from 'lucide-react';

export default function FeaturesSection() {
  return (
    <section id="cool-stuff" className="py-8">
      <div className="retro-card">
        <div className="flex items-center mb-4">
          <Star className="text-retro-yellow mr-2" size={24} />
          <h2 className="text-2xl font-pixel text-retro-pink">Cool Stuff</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-black p-4 border-2 border-retro-green">
            <div className="flex items-center mb-3">
              <Music className="text-retro-yellow mr-2" size={18} />
              <h3 className="text-lg font-comic text-retro-teal">My Favorite MIDI Files</h3>
            </div>
            
            <ul className="space-y-3 font-system">
              <li className="flex items-center">
                <div className="w-4 h-4 bg-retro-purple mr-2"></div>
                <span className="text-retro-yellow hover:text-white cursor-pointer" onClick={() => alert('MIDI file not available')}>Smells Like Teen Spirit.mid</span>
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 bg-retro-teal mr-2"></div>
                <span className="text-retro-yellow hover:text-white cursor-pointer" onClick={() => alert('MIDI file not available')}>TakeOnMe.mid</span>
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 bg-retro-pink mr-2"></div>
                <span className="text-retro-yellow hover:text-white cursor-pointer" onClick={() => alert('MIDI file not available')}>MarioTheme.mid</span>
              </li>
              <li className="flex items-center">
                <div className="w-4 h-4 bg-retro-green mr-2"></div>
                <span className="text-retro-yellow hover:text-white cursor-pointer" onClick={() => alert('MIDI file not available')}>X-Files.mid</span>
              </li>
            </ul>
            
            <div className="mt-4 flex justify-center">
              <button 
                className="retro-button bg-retro-yellow text-black font-comic text-sm"
                onClick={() => alert('Downloads are not available')}
              >
                Download All MIDIs (2.3MB)
              </button>
            </div>
          </div>
          
          <div className="bg-black p-4 border-2 border-retro-yellow">
            <div className="flex items-center mb-3">
              <Globe className="text-retro-green mr-2" size={18} />
              <h3 className="text-lg font-comic text-retro-teal">My Web Rings</h3>
            </div>
            
            <div className="flex flex-wrap justify-center gap-3 mb-4">
              <button 
                className="retro-button bg-retro-gray text-black font-system text-xs px-3 py-1"
                onClick={() => alert('Web rings are not available')}
              >
                Previous Site
              </button>
              <button 
                className="retro-button bg-retro-gray text-black font-system text-xs px-3 py-1"
                onClick={() => alert('Web rings are not available')}
              >
                Random Site
              </button>
              <button 
                className="retro-button bg-retro-gray text-black font-system text-xs px-3 py-1"
                onClick={() => alert('Web rings are not available')}
              >
                Next Site
              </button>
            </div>
            
            <div className="grid grid-cols-2 gap-3 mt-4">
              <div className="bg-retro-gray p-2 text-center text-black font-system text-xs border border-black">
                90s Nostalgia Ring
              </div>
              <div className="bg-retro-gray p-2 text-center text-black font-system text-xs border border-black">
                Web Design Masters
              </div>
              <div className="bg-retro-gray p-2 text-center text-black font-system text-xs border border-black">
                Geocities Survivors
              </div>
              <div className="bg-retro-gray p-2 text-center text-black font-system text-xs border border-black">
                HTML 3.2 Experts
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-6 bg-black p-4 border-2 border-retro-teal">
          <div className="flex items-center mb-3">
            <Zap className="text-retro-pink mr-2" size={18} />
            <h3 className="text-lg font-comic text-retro-yellow">Free Animated GIFs!</h3>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3 justify-items-center">
            {[1, 2, 3, 4, 5].map((i) => (
              <div 
                key={i} 
                className="w-16 h-16 bg-retro-gray animate-pulse flex items-center justify-center text-black font-bold"
                onClick={() => alert(`GIF ${i} not available`)}
              >
                GIF {i}
              </div>
            ))}
          </div>
          
          <p className="text-center mt-4 text-retro-green font-system">
            Feel free to use these on your own homepage! Just give me credit!
          </p>
        </div>
      </div>
    </section>
  );
}
