
import { heroData } from '../../data/heroData';
import { FooterLink } from './FooterLink';


export const Footer = () => {
    return (
        <footer className='footer flex flex-col justify-center items-center w-full h-auto bg-footer-color py-12 px-5 mt-14'>
            <div className='relative h-16 sm:h-12'>
                <q className='text-base italic font-light text-secondary-font-color mt-2'>Programming isn't about what you know; it's about what you can figure out.</q>
                <span className='block absolute bottom-0 right-0 text-sm'>- Chris Pine</span>
            </div>
            <div className='flex'>
                {
                    heroData.map( ( lk, i ) => (
                        <FooterLink
                            key={`${ lk.type }-${ i }`}
                            link={ lk.link }
                            icon={ lk.svg }
                            size={ 24 }
                            name={ lk.type }
                        />
                    ))
                }
            </div>
            <p className='text-sm text-secondary-font-color mb-2'>&copy; Copyright 2021. All rights reserved</p>
            <p className='text-xs text-secondary-font-color'>Coded with ♡ by <a href='./' className='font-semibold'>Nicolas Conde Salazar</a></p>
        </footer>
    )
}
