
'use client';

export default function MarqueeText({ text }) {
  return (
    <div className="marquee-container bg-retro-purple text-white font-comic py-2 my-4">
      <div className="marquee-text">
        {text}
      </div>
    </div>
  );
}
