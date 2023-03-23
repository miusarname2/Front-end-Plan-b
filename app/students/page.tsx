'use client'
import Navbar from '../components/NavBar'
import Hero from '../components/Hero'
import Cards from '../components/cards'
import Footer from '../components/footer'

export default function  Page(){
    return (
      <div>
        <Navbar />
        <Hero />
        <Cards />
        <footer>
          <Footer/>
        </footer>
      </div>
    );
}