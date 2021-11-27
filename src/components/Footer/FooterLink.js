
export const FooterLink = ({ link, size, icon, name }) => {
    return (
        <div className='footer__link rounded-full mt-5 mb-10 flex justify-center items-center w-9 h-9 bg-blue-color shadow-md'>
            <a
                href={`${ link }`}
                target='_blank'
                rel='noreferrer'
                className=''
            >
                <svg
                    className='fill-current text-white transition'
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
        </div>
    )
}

