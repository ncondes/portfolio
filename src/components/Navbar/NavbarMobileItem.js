import { useContext } from "react";
import { NavbarToggleContext } from '../../App';


export const NavbarMobileItem = ({ svg, type, url }) => {

    const { mobileToggle, activeSection } = useContext( NavbarToggleContext );

    return (
        <a
            href={ url }
            onClick={ mobileToggle }
            className={ `navbar-mobile__item ${ activeSection === type && 'nav-mobile__item--active' } flex justify-start items-center w-full px-5 py-4 my-1 rounded-full` }
        >
            <svg
                className={`fill-current text-primary-font-color`}
                width={ 22 }
                height={ 22 }
                viewBox={ `0 0 24 24` }
            >
                <path
                    d={ svg }
                />
            </svg>
            <span className='text-md px-3'>
                { type }
            </span>
        </a>
    )
}
