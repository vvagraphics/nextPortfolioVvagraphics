import './globals.css'
import Navigation from './Navigation'

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        
        <Navigation/>
        
        {children}
        {/* ///make a component/// */}
    <div className="stickyToTop">
    <a href="#nav-home">BACK TO TOP</a>
    </div>
    
    </body>
    </html>
  )
}
