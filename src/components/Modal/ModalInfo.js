import { useContext } from 'react'
import { ProjectContext } from '../Portfolio/PortfolioProject'

export const ModalInfo = () => {

    const { title, technologies, description, links } = useContext( ProjectContext );

    return (
        <div className='w-full h-full mt-10 lg:mt-0 lg:pl-10 lg:overflow-y-scroll'>
            <div className='w-full p-5 shadow-md bg-white rounded-xs text-primary-font-color'>
                <h3 className='text-xl font-bold text-center py-4 border-b mb-5'>Project information</h3>
                <p className='text-sm font-semibold mb-3'>
                    Title:
                    <span className='text-sm font-normal ml-3'>
                        { title }
                    </span>
                </p>
                <p className='text-sm font-semibold mb-3'>
                    Technologies:
                </p>

                {
                    technologies.map( ( technology, i ) => (
                        <div
                            key={ `${ title }-info-${ i }` }
                            className='inline-block bg-nav-item-color py-1 px-3 rounded-xl mr-3 mb-3'
                        >
                            <span className='text-xs font-semibold '>
                                { technology }
                            </span>
                        </div>
                    ))
                }

                <p className='text-sm font-semibold mb-3'>Links:</p>
                <div className='flex justify-around'>
                    <a className='modal__link flex flex-col justify-center items-center' href={ links[0] } target='_blank' rel='noreferrer'>
                        <svg className='fill-current text-primary-font-color' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 9a3.02 3.02 0 0 0-3 3c0 1.642 1.358 3 3 3 1.641 0 3-1.358 3-3 0-1.641-1.359-3-3-3z" /><path d="M12 5c-7.633 0-9.927 6.617-9.948 6.684L1.946 12l.105.316C2.073 12.383 4.367 19 12 19s9.927-6.617 9.948-6.684l.106-.316-.105-.316C21.927 11.617 19.633 5 12 5zm0 12c-5.351 0-7.424-3.846-7.926-5C4.578 10.842 6.652 7 12 7c5.351 0 7.424 3.846 7.926 5-.504 1.158-2.578 5-7.926 5z" /></svg>
                        <span className='text-xs text-primary-font-color'>Live Demo</span>
                    </a>
                    <a className='modal__link flex flex-col justify-center items-center' href={ links[1]} target='_blank' rel='noreferrer'>
                        <svg className='fill-current text-primary-font-color' xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z" /></svg>
                        <span className='text-xs text-primary-font-color'>Github Repository</span>
                    </a>
                </div>
            </div>

            <div className='px-5 pt-5 pb-10'>
                <h3 className='text-xl font-bold text-center text-primary-font-color py-4 border-b mb-5'>Project description</h3>
                <p className='text-base font-normal text-justify text-primary-font-color'>
                    { description }
                </p>
            </div>
        </div>
    )
}
