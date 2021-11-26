
import React from 'react'
import { servicesData } from '../../data/servicesData'
import { SectionTitle } from '../SectionTitle/SectionTitle'
import { Service } from './Service';

export const Services = () => {
    return (
        <section className='services pt-14 animate__animated animate__fadeInUp'>
            <div className='container mx-auto px-5 sm:px-10 md:px-20 lg:px-40'>    
                <SectionTitle
                    title='SERVICES'
                />
                <p className='text-center text-secondary-font-color mb-5'>
                    Services I offer
                </p>
                <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
                        {
                            servicesData.map( service => (
                                <Service
                                    key={ service.name }
                                    { ...service }
                                />
                            ))
                        }
                    </div>
            </div>
        </section>
    )
}
