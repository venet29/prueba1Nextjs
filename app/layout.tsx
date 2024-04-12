

import { inter } from './ui/fonts';
import './ui/global.css'

export default function 
RootLayout({children,}: {children: React.ReactNode;}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antianliased`}>
        esto es parte del layout raiz
        {children}
        <footer className='py-10 flex justify-center items'>
           hecho con amor
        </footer>
        </body>
    </html>
  );
} 

