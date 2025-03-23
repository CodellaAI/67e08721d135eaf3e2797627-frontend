
'use client';

import { Users, MessageSquare } from 'lucide-react';
import { useState } from 'react';

export default function GuestbookSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    url: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks for signing my guestbook! (Form submission not actually implemented)');
    setFormData({
      name: '',
      email: '',
      url: '',
      message: ''
    });
  };

  return (
    <section id="guestbook" className="py-8">
      <div className="retro-card">
        <div className="flex items-center mb-4">
          <Users className="text-retro-yellow mr-2" size={24} />
          <h2 className="text-2xl font-pixel text-retro-green">Sign My Guestbook</h2>
        </div>
        
        <div className="bg-black p-4 border-2 border-retro-teal">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div>
              <label className="block font-comic text-retro-pink mb-1">Your Name:</label>
              <input 
                type="text" 
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="retro-input w-full font-system" 
                placeholder="Enter your name"
              />
            </div>
            
            <div>
              <label className="block font-comic text-retro-pink mb-1">Your Email:</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="retro-input w-full font-system" 
                placeholder="your@email.com"
              />
            </div>
            
            <div>
              <label className="block font-comic text-retro-pink mb-1">Your Homepage URL:</label>
              <input 
                type="text" 
                name="url"
                value={formData.url}
                onChange={handleChange}
                className="retro-input w-full font-system" 
                placeholder="http://"
              />
            </div>
            
            <div>
              <label className="block font-comic text-retro-pink mb-1">Your Message:</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="retro-input w-full h-32 font-system" 
                placeholder="Write something cool!"
              ></textarea>
            </div>
            
            <div className="flex justify-center">
              <button type="submit" className="retro-button bg-retro-green text-black font-comic">
                Submit to Guestbook
              </button>
            </div>
          </form>
          
          <div className="mt-8">
            <div className="flex items-center mb-4">
              <MessageSquare className="text-retro-yellow mr-2" size={20} />
              <h3 className="text-lg font-comic text-retro-teal">Recent Guestbook Entries</h3>
            </div>
            
            <div className="space-y-4">
              {[
                { name: "CoolDude2000", date: "12/10/1997", message: "Awesome site! Love the MIDIs collection!" },
                { name: "WebSurfer95", date: "12/05/1997", message: "This is the coolest homepage I've seen on GeoCities! Adding you to my bookmarks!" },
                { name: "ModemGirl", date: "11/28/1997", message: "Your page took 3 minutes to load on my 28.8k but it was worth it! Love the animated GIFs!" }
              ].map((entry, index) => (
                <div key={index} className="bg-retro-gray p-3 text-black border border-retro-purple">
                  <div className="flex justify-between mb-1">
                    <span className="font-bold font-comic text-retro-blue">{entry.name}</span>
                    <span className="text-xs font-system">{entry.date}</span>
                  </div>
                  <p className="font-system">{entry.message}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
