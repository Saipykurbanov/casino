import React, { useState } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay, Pagination} from 'swiper/modules';


const Slider = () => {

    const [swiper, setSwiper] = useState()
    const [banners, setBanners] = useState(['Тест1', 'Тест2', 'Тест3'])

    return (
        <div className='slider'>
            <Swiper
                onSwiper={setSwiper}
                loop={true}
                spaceBetween={0}
                slidesPerView={1}
                allowTouchMove={true}
                speed={1000}
                
                autoplay={{
                    delay: 10000,
                    disableOnInteraction: false,
                }}

                navigation={false}
                pagination={{ clickable: true }}
                modules={[Navigation, Autoplay, Pagination ]}
                className='swiper'
                >
                {banners?.length ? 
                    banners.map((el, i) => (
                        <SwiperSlide key={i}>
                            <img src="/images/banner1.png" alt="" />
                            <div className="title">{el}</div>
                        </SwiperSlide>
                    ))
                :<></>}

                {banners?.length > 1 
                ?<>
                    <button className="prev slide_btn" onClick={() => swiper.slidePrev()}>&#10094;</button>
                    <button className="next slide_btn" onClick={() => swiper.slideNext()}>&#10095;</button>
                </>:<></>}

            </Swiper>
        </div>
    );
};

export default Slider;