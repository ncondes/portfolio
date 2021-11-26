import { createContext, useState } from 'react';
import { Modal } from '../Modal/Modal';


export const ProjectContext = createContext();

export const PortfolioProject = ({ title, little, images, technologies, description, links }) => {

    const [ modalIsOpen, setModalIsOpen ] = useState( false );

    const handleModal = () => {
        setModalIsOpen( !modalIsOpen );
        if ( modalIsOpen ) {
            document.body.style.overflowY = 'unset';
        } else {
            document.body.style.overflowY = 'hidden';
        }
    }

    return (
        <ProjectContext.Provider value={{
            title,
            little,
            images,
            technologies,
            description,
            handleModal,
            links,
        }}>
            <div
                className='portfolio__project h-72 w-full bg-cover bg-center bg-no-repeat shadow-lg'
                style={{ backgroundImage: `url(${ images[0] })` }}
            >
                <div className='portfolio__wrapper'>
                    <div className='portfolio__info'>
                        <h3 className='text-xl font-bold text-primary-font-color'>
                            { title }
                        </h3>
                        <p className='text-base text-primary-font-color'>
                            { little }
                        </p>
                        <div
                            className='portfolio__link flex flex-col items-center justify-center cursor-pointer mt-4'
                            onClick={ handleModal }
                        >
                            <svg
                                className='fill-current text-primary-font-color'
                                xmlns="http://www.w3.org/2000/svg"
                                width="36"
                                height="36"
                                viewBox="0 0 24 24"
                            >
                                <path d="M19 11h-6V5h-2v6H5v2h6v6h2v-6h6z"></path>
                            </svg>
                            <span className='text-xs'>See details</span>
                        </div>
                    </div>
                </div>
                {
                    modalIsOpen &&
                        <Modal />
                }
            </div>
        </ProjectContext.Provider>
    )
}

