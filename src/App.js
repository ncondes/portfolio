import { Navbar } from './components/Navbar/Navbar';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';

import './scss/main.scss';
import 'animate.css';

export const App = () => {
    return (
        <>
            <Navbar />
            <Hero />
            <About />
        </>
    )
}
