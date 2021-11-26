import { useContext } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import { Autoplay, Navigation, Pagination } from 'swiper';
import { ProjectContext } from '../Portfolio/PortfolioProject';

import 'swiper/swiper.scss';
import 'swiper/modules/navigation/navigation.scss';
import 'swiper/modules/pagination/pagination.scss';


export const ModalSlider = () => {

    const { title, images } = useContext( ProjectContext );

    return (
        <div className='w-full h-2/5 shadow-lg sm:h-1/2 md:h-3/5 lg:h-full'>
            <Swiper
                className='w-full h-full'
                modules={[Autoplay, Navigation, Pagination]}
                centeredSlides={true}
                slidesPerView={1}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false
                }}
                pagination={{ clickable: true }}
            >
                {
                    images.map( ( image, i ) => (
                        <SwiperSlide
                            key={ `${ title }-img-${ i }` }
                        >
                            <img
                                className='w-full h-full object-cover'
                                src={ image }
                                alt={ `${ title }-img-${ i }` }
                            />
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    )
}
