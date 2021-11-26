import { useContext } from 'react';
import ReactDOM from 'react-dom';

import { ModalClose } from './ModalClose';
import { ModalSlider } from './ModalSlider';
import { ModalInfo } from './ModalInfo';
import { ProjectContext } from '../Portfolio/PortfolioProject';


export const Modal = () => {

    const { handleModal } = useContext( ProjectContext )

    return ReactDOM.createPortal(
        <div className='animate__animated animate__fadeIn modal flex items-center justify-center w-screen h-screen fixed inset-0 bg-secondary-font-color bg-opacity-90'>
            <ModalClose
                handleModal={ handleModal } 
            />
            <div
                className=' absolute inset-x-5 inset-y-16 md:inset-x-10 xl:inset-x-20 xl:inset-y-24 bg-nav-item-color shadow-xl rounded-sm overflow-y-scroll lg:overflow-y-auto'
            >
                <div
                    className='modal__grid w-full h-full px-5 py-10 lg:grid lg:py-16 lg:px-14'
                >
                    <ModalSlider />
                    <ModalInfo />
                </div>
            </div>
        </div>,
        document.getElementById('portal')
    )
}
