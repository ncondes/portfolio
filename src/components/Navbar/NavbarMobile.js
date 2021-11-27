import { useContext } from 'react';
import { navbarData } from '../../data/navbarData';
import { NavbarMobileItem } from './NavbarMobileItem';
import { NavbarToggleContext } from '../../App';

export const NavbarMobile = () => {

    const { navbarIsOpen } = useContext( NavbarToggleContext );

    return (
        <div className={ `fixed top-0 bottom-0 navbar-mobile ${ navbarIsOpen && 'navbar-mobile--open' } w-72 shadow-lg flex flex-col items-center justify-center p-5 z-10 bg-white` }>
            {
                navbarData.map( ( item, i ) => (
                    <NavbarMobileItem
                        key={ `${ item.type }-nm-${ i }` }
                        { ...item }
                    />
                ))
            }
        </div>
    )
}
