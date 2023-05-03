import Image from 'next/image'
import { Inter } from 'next/font/google'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Services from './components/Services'
import About from './components/About'
import Testimonials from './components/Testimonials'
import Footer from './components/Footer'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <main>
      <Navbar/>
      <Hero/>
      <Services/>
      <About/>
      <Testimonials/>
      <Footer/> 
    </main>
    </>
  )
}
