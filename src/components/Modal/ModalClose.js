

export const ModalClose = ({ handleModal }) => {
    return (
        <div
            className='absolute top-5 right-5 cursor-pointer'
            onClick={ handleModal }
        >
            <svg
                className='fill-current text-nav-item-color'
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 24 24"
            >
                <path d="m16.192 6.344-4.243 4.242-4.242-4.242-1.414 1.414L10.535 12l-4.242 4.242 1.414 1.414 4.242-4.242 4.243 4.242 1.414-1.414L13.364 12l4.242-4.242z" />
            </svg>
        </div>
    )
}
