import PropTypes from 'prop-types';

export const SectionTitle = ({ title }) => {
    
    return (
        <h1 className='section-title relative text-primary-font-color text-3xl text-center font-bold pb-5 mb-8'> { title } </h1>
    )
}

SectionTitle.propTypes = {
    title: PropTypes.string.isRequired,
}