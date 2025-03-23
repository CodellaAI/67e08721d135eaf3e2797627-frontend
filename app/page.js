
import Image from 'next/image';
import { Cpu, Globe, Mail, Star, Zap, Music } from 'lucide-react';
import NavBar from '@/components/NavBar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import FeaturesSection from '@/components/FeaturesSection';
import GuestbookSection from '@/components/GuestbookSection';
import Footer from '@/components/Footer';
import VisitorCounter from '@/components/VisitorCounter';
import MarqueeText from '@/components/MarqueeText';

export default function Home() {
  return (
    <main className="min-h-screen">
      <NavBar />
      
      <div className="container mx-auto px-4 py-8">
        <HeroSection />
        
        <MarqueeText text="★ Welcome to my awesome 90s website! Thanks for visiting! Don't forget to sign my guestbook! ★" />
        
        <div className="flex justify-center my-6">
          <div className="under-construction flex items-center gap-2">
            <Zap className="animate-pulse text-yellow-600" size={20} />
            UNDER CONSTRUCTION
            <Zap className="animate-pulse text-yellow-600" size={20} />
          </div>
        </div>
        
        <AboutSection />
        
        <div className="flex justify-center my-8">
          <Image 
            src="/images/divider.gif" 
            alt="Divider" 
            width={400} 
            height={20}
            className="my-4"
          />
        </div>
        
        <FeaturesSection />
        
        <div className="flex justify-center my-8">
          <Image 
            src="/images/divider.gif" 
            alt="Divider" 
            width={400} 
            height={20}
            className="my-4"
          />
        </div>
        
        <GuestbookSection />
        
        <div className="flex justify-center mt-10 mb-4">
          <VisitorCounter count={42069} />
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
