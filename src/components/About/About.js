import { SectionTitle } from "../SectionTitle/SectionTitle"
import { aboutData } from '../../data/aboutData';
import AboutDescription from "./AboutDescription";
import { DownloadCV } from "./DownloadCV";
import { AboutSkill } from "./AboutSkill";
import { aboutSkillsData } from '../../data/aboutSkillsData';



export const About = () => {
    return (
        <section
            id='about'
            className='about pt-14 animate__animated animate__fadeInUp'
        >
            <div className='container mx-auto px-5 sm:px-10 md:px-20 lg:px-40'>
                <SectionTitle
                    title='ABOUT'
                />
                <h2
                    className='text-center text-2xl font-semibold text-secondary-font-color mb-8'
                >Who I am ?</h2>
                <div
                    className='lg:grid lg:grid-cols-2 lg:gap-x-10 mb-8'
                >
                    <div
                        className='lg:pr-6'
                    >
                        {
                            aboutData.map( description => (
                                <AboutDescription
                                    key={ description.type }
                                    icon={ description.svg }
                                    text={ description.text }
                                    size={ 24 }
                                />
                            ))
                        }
                        <DownloadCV />
                    </div>
                    <div
                        className='hidden lg:flex lg:items-center lg:justify-center object-cover '
                    >
                        <div
                            className='about__img w-80 h-80 bg-center bg-no-repeat bg-cover rounded-full shadow border-2 border-nav-item-color'
                        >
                        </div>
                    </div>
                </div>
                <h2
                    className='text-center text-2xl font-semibold text-secondary-font-color mb-8'
                >
                    My skills
                </h2>
                <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                    {
                        aboutSkillsData.map( skill => (
                            <AboutSkill
                            key={ skill.name }
                                { ...skill }
                            />
                        ))
                    }
                </div>
            </div>
        </section>
    )
}
