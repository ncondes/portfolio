import PropTypes from 'prop-types';
import { useContext } from 'react';
import { NavbarToggleContext } from '../../App';


export const NavItem = ({ size, icon, name, url }) => {

    const { activeSection } = useContext( NavbarToggleContext );

    return (
        <a
            href={ url }
            className={ `navbar__item ${ activeSection === name && 'nav__item--active' } flex items-center rounded-full h-14 w-full px-4 my-1 text-nav-item-color cursor-pointer` }
            
        >
            <svg
                className={`fill-current text-primary-font-color`}
                width={ size }
                height={ size }
                viewBox={ `0 0 24 24` }
            >
                <path
                    d={ icon }
                />
            </svg>
            <span className='hidden px-3'> { name } </span>
        </a>
    )
}


NavItem.propTypes = {
    icon: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
}

NavItem.defaultProps = {
    size: 22,
}


