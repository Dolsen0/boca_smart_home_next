import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from './components/Hero'
import Navbar from './components/Navbar'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <main>
      <Navbar/>
      <div>
      <Hero/>
      <p>Services</p>
      <p>About Us</p>
      <p>Testimonials</p>
      <p>copyright Derek Olsen 2023</p>
      </div> 
    </main>
    </>
  )
}
