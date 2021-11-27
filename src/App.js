import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Services } from './components/Services/Services';

import './scss/main.scss';
import 'animate.css';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

export const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
            <Portfolio />
            <Services />
            <Contact />
            <Footer />
        </>
    )
}
