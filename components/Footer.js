
import Link from 'next/link';
import Image from 'next/image';
import { Mail, Home, Calendar } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-black border-t-4 border-retro-purple py-6 mt-10">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center">
          <div className="mb-4">
            <Image 
              src="/images/email.gif" 
              alt="Email" 
              width={30} 
              height={20}
              className="inline mr-2"
            />
            <a href="mailto:webmaster@geocities.com" className="text-retro-yellow hover:text-retro-pink font-comic">
              webmaster@geocities.com
            </a>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4 mb-6">
            <Link href="#home" className="text-retro-teal hover:text-retro-pink font-system underline">
              Home
            </Link>
            <Link href="#about" className="text-retro-teal hover:text-retro-pink font-system underline">
              About
            </Link>
            <Link href="#cool-stuff" className="text-retro-teal hover:text-retro-pink font-system underline">
              Cool Stuff
            </Link>
            <Link href="#guestbook" className="text-retro-teal hover:text-retro-pink font-system underline">
              Guestbook
            </Link>
          </div>
          
          <div className="text-xs text-retro-gray font-system mb-2">
            This page is optimized for Netscape Navigator at 800x600
          </div>
          
          <div className="flex items-center text-xs text-retro-gray font-system">
            <Calendar size={12} className="mr-1" />
            <span>© 1997 - Made with GeoCities PageBuilder</span>
          </div>
          
          <div className="mt-4 text-xs text-retro-gray font-system">
            <button className="underline hover:text-retro-yellow" onClick={() => alert("You've found the secret button! You win the internet!")}>
              Don't click this secret button
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
