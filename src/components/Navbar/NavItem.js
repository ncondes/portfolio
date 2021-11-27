import PropTypes from 'prop-types';


export const NavItem = ({ size, icon, name, url }) => {
    return (
        <a
            onClick={ () => { console.log( url ) }}
            href={ url }
            className={ `navbar__item flex items-center rounded-full h-14 w-full px-4 my-1 text-nav-item-color cursor-pointer ${ name === 'Home' ? 'nav__item--active' : 'bg-nav-item-color' } ` }
            
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
            <span className='hidden pr-2 pl-3'> { name } </span>
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


