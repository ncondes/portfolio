import TypeIt from 'typeit-react';
import { heroData } from '../../data/heroData';
import { HeroLink } from './HeroLink';

export const Hero = () => {
    return (
        <section
            className='hero relative h-screen w-full bg-left md:bg-left lg:bg-center bg-no-repeat bg-cover'
        >
            <div className='animate__animated animate__fadeIn container mx-auto px-5 lg:px-40 h-full flex flex-col items-center lg:items-start justify-center'>
                <h2 className='text-primary-font-color font-light text-2xl lg:text-4xl'>Hello World</h2>
                <h1 className='text-primary-font-color font-semibold text-3xl lg:text-6xl my-2.5'>I'm Nicolas Conde</h1>
                <TypeIt className='text-blue-color text-xl lg:text-3xl'>Front-end Developer</TypeIt>
                <div className='flex mt-8'>
                    {
                        heroData.map( ( lk, i ) => (
                            <HeroLink
                                key={`${ lk.type }-${ i }`}
                                link={ lk.link }
                                icon={ lk.svg }
                                size={ 24 }
                                name={ lk.type }
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
