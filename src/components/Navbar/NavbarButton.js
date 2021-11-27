import React, { useContext } from 'react'
import { NavbarToggleContext } from '../../App';

export const NavbarButton = () => {

    const { navbarIsOpen, mobileToggle } = useContext( NavbarToggleContext );
    const svg = navbarIsOpen ? 'm16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z' : 'M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z';

    return (
        <div
            onClick={ mobileToggle }
            className='fixed right-3 top-3 lg:hidden z-10 cursor-pointer p-1'
        >
            <svg
                className='fill-current text-primary-font-color'
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24">
                    <path
                        d={ svg }
                    />
            </svg>
        </div>
    )
}
