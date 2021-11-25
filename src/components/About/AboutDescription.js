import PropTypes from 'prop-types';


const AboutDescription = ({ size, icon, text }) => {
    return (
        <div
            className='mb-5'
        >
        <svg
            width={ size }
            height={ size }
            viewBox={ `0 0 24 24` }
            className={`fill-current text-primary-font-color mx-auto mb-3`}
        >
            <path
                d={ icon }
            />
        </svg>
        <p
            className='text-justify text-secondary-font-color'
        > { text } </p>
    </div>
    )
}

AboutDescription.propTypes = {
    icon: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

AboutDescription.defaultProps = {
    size: 22,
}


export default AboutDescription
