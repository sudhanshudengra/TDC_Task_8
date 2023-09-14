import Image from 'next/image'
import { Inter } from 'next/font/google'
import Header from './header'
import Footer from './footer'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div>
      <Header />
    
    <div className="flex flex-col items-center justify-center min-h-screen py-2">
      {/* <Header /> */}
      <h1 className="text-4xl font-bold text-center text-orange-600 font-serif"> Welcome to Airport App</h1>
      <div className="flex flex-col items-center justify-center mt-4">
        <Image src="/airport.jpg" alt="airport" width={400} height={400} />
      </div>
    </div>
    <Footer />
    </div>
  )
}
