import PropTypes from 'prop-types';


export const NavItem = ({ size, icon, name }) => {
    return (
        <a href='./' className='flex items-center rounded-full h-14 px-4 ml-4 my-1 bg-nav-item-color text-nav-item-color'>
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
            <span className='hidden ml-2'> { name } </span>
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


