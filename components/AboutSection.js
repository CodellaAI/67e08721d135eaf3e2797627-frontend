
import { Info, User, Calendar, Cpu } from 'lucide-react';

export default function AboutSection() {
  return (
    <section id="about" className="py-8">
      <div className="retro-card">
        <div className="flex items-center mb-4">
          <Info className="text-retro-yellow mr-2" size={24} />
          <h2 className="text-2xl font-pixel text-retro-teal">About Me</h2>
        </div>
        
        <div className="bg-black p-4 border-2 border-retro-purple">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="flex items-center mb-3">
                <User className="text-retro-pink mr-2" size={18} />
                <h3 className="text-lg font-comic text-retro-yellow">Who Am I?</h3>
              </div>
              <p className="font-system text-white mb-4">
                Hello and welcome to my homepage! I'm a <span className="text-retro-green">webmaster</span> and <span className="text-retro-pink">digital enthusiast</span> creating cool stuff on the Information Superhighway! When I'm not coding in HTML, I enjoy playing <span className="text-retro-yellow">DOOM</span> and collecting <span className="text-retro-teal">floppy disks</span>.
              </p>
            </div>
            
            <div>
              <div className="flex items-center mb-3">
                <Cpu className="text-retro-green mr-2" size={18} />
                <h3 className="text-lg font-comic text-retro-yellow">My Setup</h3>
              </div>
              <ul className="list-disc list-inside font-system text-white space-y-2">
                <li>Pentium 166MHz with <span className="text-retro-pink">MMX Technology</span></li>
                <li><span className="text-retro-green">32MB</span> of RAM</li>
                <li><span className="text-retro-teal">2.1GB</span> Hard Drive</li>
                <li>Sound Blaster 16 Sound Card</li>
                <li>56K <span className="text-retro-yellow">Dial-up Modem</span></li>
                <li>Windows 95 <span className="text-retro-pink">OSR 2</span></li>
              </ul>
            </div>
          </div>
          
          <div className="mt-6 p-3 bg-retro-gray border border-retro-purple text-black font-comic">
            <p className="text-center">
              <span className="text-retro-purple font-bold">Fun fact:</span> This page took me <span className="text-retro-green font-bold">3 weeks</span> to build! I learned HTML from a book I got at <span className="text-retro-blue font-bold">CompUSA</span>!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
