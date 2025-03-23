
'use client';

export default function VisitorCounter({ count }) {
  // Convert count to string and pad with zeros
  const paddedCount = count.toString().padStart(6, '0');
  
  return (
    <div className="visitor-counter">
      <span className="mr-2 text-white">Visitors:</span>
      {paddedCount.split('').map((digit, index) => (
        <span 
          key={index} 
          className="inline-block bg-black text-retro-green border border-retro-green px-1"
        >
          {digit}
        </span>
      ))}
    </div>
  );
}
