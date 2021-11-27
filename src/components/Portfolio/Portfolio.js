import { SectionTitle } from '../SectionTitle/SectionTitle';
import { PortfolioProject } from './PortfolioProject';
import { portfolioData } from '../../data/portolfioData';
import { forwardRef } from 'react';

export const Portfolio = forwardRef( ( props, portfolio ) => {
    return (
            <section
                ref={ portfolio }
                id='portfolio'
                className='portfolio pt-14 animate__animated animate__fadeInUp'
            >
                <div className='container mx-auto px-5 sm:px-10 md:px-20 lg:px-40'>
                    <SectionTitle
                        title='PORTFOLIO'
                    />
                    <p className='text-center text-secondary-font-color mb-10'>
                        Showcasing some of my best projects
                    </p>
                    <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5'>
                        {
                            portfolioData.map( project => (
                                <PortfolioProject
                                    key={ project.title }
                                    { ...project }
                                /> 
                            ))
                        }
                    </div>
                    <a
                        href='https://github.com/ncondes'
                        target='_blank'
                        rel='noreferrer'
                        className='portfolio__more flex justify-center text-md items-center mx-auto mt-10 w-40 py-3 px-9 bg-nav-item-color rounded-md transition hover:bg-blue-color text-secondary-font-color hover:text-nav-item-color'
                    >
                        <span className='text-center'>View more</span>
                    </a>
                </div>
            </section>
    )
}
)
