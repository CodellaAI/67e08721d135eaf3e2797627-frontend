
import './globals.css'

export const metadata = {
  title: 'Retro Time Machine - 90s Style Landing Page',
  description: 'Travel back to the 90s with this retro-styled landing page',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
        <link href="https://fonts.googleapis.com/css2?family=Press+Start+2P&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-black text-white min-h-screen">
        {children}
      </body>
    </html>
  )
}
