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
    const [ yPosition, setYPosition ] = useState( window.scrollY );
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
        
    }, [ dimensions ]);

    useEffect(() => {

        const handleYPosition = (e) => {
            setYPosition( window.scrollY );
        }

        window.addEventListener( 'scroll', handleYPosition );

    }, [ yPosition ])

    useEffect(() => {

        const sectionPosition = {
            about: about.current.offsetTop,
            portfolio: portfolio.current.offsetTop,
            services: services.current.offsetTop,
            contact: contact.current.offsetTop,
        }
        const documentHeight = document.body.offsetHeight;

        if ( yPosition < sectionPosition.about ) {
            setActiveSection('Home');
        } else if ( yPosition >= sectionPosition.about && yPosition < sectionPosition.portfolio ) {
            setActiveSection('About');
        } else if ( yPosition >= sectionPosition.portfolio && yPosition < sectionPosition.services ) {
            setActiveSection('Portfolio');
        } else if ( ( documentHeight - dimensions.height ) === yPosition ) {
            setActiveSection('Contact');
        } else if ( yPosition >= sectionPosition.services && yPosition < sectionPosition.contact ) {
            setActiveSection('Services');
        } else {
            setActiveSection('Contact');
        }

    }, [ about, portfolio, services, contact, dimensions.height, yPosition ]);


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
