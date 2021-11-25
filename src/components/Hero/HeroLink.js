import PropTypes from 'prop-types';


export const HeroLink = ({ link, size, icon, name }) => {
    return (
        <a
            href={`${ link }`}
            target='_blank'
            rel='noreferrer'
            className='mr-3 lg:mr-6'
        >
            <svg
                className='fill-current text-primary-font-color transition hover:text-blue-color'
                width={ size }
                height={ size }
                viewBox='0 0 24 24'
            >
                {
                    ( name === 'Linkedin' && <circle cx="4.983" cy="5.009" r="2.188"/> )
                }
                <path
                    d={ icon }
                />
            </svg>
        </a>
    )
}


HeroLink.propTypes = {
    link: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    size: PropTypes.number.isRequired,
}

HeroLink.defaultProps = {
    size: 22,
}
