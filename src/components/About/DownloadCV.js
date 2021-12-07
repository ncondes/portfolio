import pdf from '../../assets/pdf/CV - Nicolas Conde Salazar.pdf'

export const DownloadCV = () => {
    return (
        <a
            href={ pdf }
            target='_blank'
            rel='noreferrer'
            className='about__cv text-md flex mx-auto mt-10 w-56 py-3 px-9 bg-nav-item-color rounded-md transition hover:bg-blue-color text-secondary-font-color hover:text-nav-item-color'
        >
            <span
                className='mr-3'
            >
                Download CV
            </span>
            <svg className='fill-current text-secondary-font-color' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="m12 16 4-5h-3V4h-2v7H8z"/><path d="M20 18H4v-7H2v7c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2v-7h-2v7z"/></svg>
        </a>
    )
}
