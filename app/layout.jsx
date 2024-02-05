import Footer from '@components/Footer'
import Nav from '@components/Nav'
import '@styles/globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: {
    template: 'Craig\'s Portfolio - %s',
    default: 'Craig\'s Portfolio',
  },
  description: 'Hi, I\'m Craig. Welcome to my Portfolio! This website contains a list of my projects, dev blog posts, travel blog posts and more!'
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
