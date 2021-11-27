import { createContext, createRef, useEffect, useState } from 'react';
import { NavbarButton } from './components/Navbar/NavbarButton';
import { Navbar } from './components/Navbar/Navbar';
import { NavbarMobile } from './components/Navbar/NavbarMobile';
import { Hero } from './components/Hero/Hero';
import { About } from './components/About/About';
import { Portfolio } from './components/Portfolio/Portfolio';
import { Services } from './components/Services/Services';
import { Contact } from './components/Contact/Contact';
import { Footer } from './components/Footer/Footer';

import './scss/main.scss';
import 'animate.css';


export const NavbarToggleContext = createContext();

export const App = () => {

    const [ navbarIsOpen, setNavbarIsOpen ] = useState( false );
    const [ dimensions, setDimensions ] = useState({
        height: window.innerHeight,
        width: window.innerWidth,
    });
    const [ y, setY ] = useState( window.scrollY );
    const [ activeSection, setActiveSection ] = useState( 'hero' );

    const about = createRef();
    const portfolio = createRef();
    const services = createRef();
    const contact = createRef();
    
    const mobileToggle = () => {
        setNavbarIsOpen( !navbarIsOpen );
        if ( navbarIsOpen ) {
            document.body.style.overflowY = 'unset';
        } else {
            document.body.style.overflowY = 'hidden';
        }
    }

    useEffect(() => {
        const handleResize = () => {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth,
            });
        }

        window.addEventListener( 'resize', handleResize );

        if ( dimensions.width > 1024) {
            setNavbarIsOpen( false );
        }
        
        const handleY = (e) => {
            setY( window.scrollY );
        }

        window.addEventListener( 'scroll', handleY );

        if ( y < about.current.offsetTop ) {
            setActiveSection('Home');
        } else if ( y >= about.current.offsetTop && y < portfolio.current.offsetTop ) {
            setActiveSection('About');
        } else if ( y >= portfolio.current.offsetTop && y < services.current.offsetTop ) {
            setActiveSection('Portfolio');
        } else if ( (document.body.offsetHeight - dimensions.height) === y ) {
            setActiveSection('Contact');
        } else if ( y >= services.current.offsetTop && y < contact.current.offsetTop ) {
            setActiveSection('Services');
        } else {
            setActiveSection('Contact');
        }

    }, [ dimensions, about, portfolio, services, contact, y]);

    return (
        <NavbarToggleContext.Provider value={{
            navbarIsOpen,
            mobileToggle,
            activeSection,
        }}>
            <NavbarButton />
            <Navbar />
            <NavbarMobile />
            <Hero />
            <About ref={ about }/>
            <Portfolio ref={ portfolio } />
            <Services ref={ services }/>
            <Contact ref={ contact } />
            <Footer />
        </NavbarToggleContext.Provider>
    )
}
