import React ,{useState }from 'react'
import  Hero  from '../components/Hero'
import  About  from '../components/About'
import  Events  from '../components/Events'
import  Schedule  from '../components/Schedule'
import  Registration  from '../components/Registration'
import  Gallery  from '../components/Gallery'
import  Sponsors  from '../components/Sponsors'
import  Contact  from '../components/Contact'


export const Home = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <div className="min-h-screen bg-neutral-900"> 
   <main>
    <Hero />
    <About />
    <Events />
    <Schedule />
    <Registration />
    <Gallery />
    <Sponsors />
    <Contact />
  </main>
  </div>
  )
}
