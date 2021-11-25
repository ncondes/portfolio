import htmlicon from '../../assets/icons/html.png';

export const AboutSkill = ({ icon, name, text, color }) => {
    return (
        <div
            className='h-48 w-full flex flex-col justify-center items-center rounded-md border border-nav-item-color px-5 py-5'
        >
            <div
                className={ `flex justify-center items-center w-14 h-14 bg-${ color } bg-opacity-30 rounded-2xl` }
            >
                <img
                    className='w-3/5'
                    src={ icon }
                    alt={ name }
                />
            </div>
            <h4
                className='text-sm text-primary-font-color font-bold mt-6 mb-2'
            >
                { name} 
            </h4>
            <div
                className='h-8'
            >
                <p
                    className='text-xs text-primary-font-color text-opacity-80 text-center'
                >
                    { text }
                </p>
            </div>

        </div>
    )
}
