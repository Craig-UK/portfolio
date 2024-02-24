import Footer from '@components/Footer'
import Nav from '@components/Nav'
import '@styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    template: 'Just Craig Development Ltd - %s',
    default: 'Just Craig Development Ltd',
  },
  description: 'Hi, I\'m Craig. Welcome to my Website! Need help designing your website? Submit a commission application! This website also contains a list of my projects, dev blog posts, etc.'
}

export default function RootLayout ({ children }) {
  return (
    <html lang='en'>
      <body className='app'>
          <Nav />
          <main className='px-6'>
            {children}
          </main>
          <Footer />
      </body>
    </html>
  )
}
