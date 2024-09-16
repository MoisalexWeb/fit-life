import React from 'react'
import "./app.css"
import Header from './components/sections/Header/Header'
import About from './components/sections/About/About'
import Explore from './components/sections/Explore/Explore'
import Classes from './components/sections/Classes/Classes'
import Blog from './components/sections/Blog/Blog'
import Footer from './components/sections/Footer/Footer'
import ScrollToTop from './components/ScrollToTop/ScrollToTop'

const App = () => {
    return (
        <>
            <Header />

            <main>
                <About />
                <Explore />
                <Classes />
                <Blog />
            </main>

            <ScrollToTop />
            
            <Footer />
        </>
    )
}


export default App
