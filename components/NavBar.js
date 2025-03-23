
import Link from 'next/link';
import { Home, Info, Star, Users, Mail } from 'lucide-react';

export default function NavBar() {
  return (
    <nav className="bg-retro-blue border-b-4 border-retro-purple px-4 py-2 sticky top-0 z-50">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-xl md:text-2xl font-pixel text-retro-yellow tracking-wider">
            <span className="text-white">R</span>
            <span className="text-retro-pink">e</span>
            <span className="text-retro-green">t</span>
            <span className="text-retro-yellow">r</span>
            <span className="text-white">o</span>
            <span className="text-retro-teal">T</span>
            <span className="text-retro-pink">i</span>
            <span className="text-retro-green">m</span>
            <span className="text-retro-yellow">e</span>
          </h1>
        </div>
        
        <div className="flex flex-wrap justify-center gap-2">
          <Link href="#home" className="retro-button flex items-center gap-1 text-sm">
            <Home size={16} />
            <span>Home</span>
          </Link>
          
          <Link href="#about" className="retro-button flex items-center gap-1 text-sm">
            <Info size={16} />
            <span>About</span>
          </Link>
          
          <Link href="#cool-stuff" className="retro-button flex items-center gap-1 text-sm">
            <Star size={16} />
            <span>Cool Stuff</span>
          </Link>
          
          <Link href="#guestbook" className="retro-button flex items-center gap-1 text-sm">
            <Users size={16} />
            <span>Guestbook</span>
          </Link>
          
          <Link href="#contact" className="retro-button flex items-center gap-1 text-sm">
            <Mail size={16} />
            <span>Email Me</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}
