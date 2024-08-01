import styles from './SwiperSection.module.scss';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper.css';
import imgMan from '@img/q.png';
import { FreeMode, Navigation, Mousewheel, Keyboard, Autoplay } from 'swiper/modules';
import { useRef } from 'react';
import { useMediaQuery } from '@hooks/usemedia/useMedia';

export const SwiperSection = () => {
    const swiperRef = useRef(null);

    const arrSwiper = [
        {
            id: 1,
            img: imgMan,
            text: 'Lorem ipsum',
        },
        {
            id: 2,
            img: imgMan,
            text: 'Lorem ipsum',
        },
        {
            id: 3,
            img: imgMan,
            text: 'Lorem ipsum',
        },
        {
            id: 4,
            img: imgMan,
            text: 'Lorem ipsum',
        },
         {
            id: 5,
            img: imgMan,
            text: 'Lorem ipsum',
        },
         {
            id: 6,
            img: imgMan,
            text: 'Lorem ipsum',
        },
        // ... остальные элементы массива
    ];

    const wMobile = useMediaQuery('(max-width: 700px)');
    const wTablet = useMediaQuery('(max-width: 1024px)');
    const wLap = useMediaQuery('(max-width: 1300px)');
    const preView = wMobile ? '1' : wTablet ? '2' : wLap ? '2.5' : '4';
    return (
        <section className='container'>
            <div className={styles.container}>
                <h2>Участники выставки 2024</h2>
                <div className={styles.swiperCont}>
                    <Swiper
                        ref={swiperRef}
                        slidesPerView={preView}
                        freeMode={true}
                        loop={true}
                        navigation={false}
                        keyboard={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Navigation, Mousewheel, Keyboard, FreeMode, Autoplay]}
                    >
                        {arrSwiper.map(item => (
                            <SwiperSlide key={item.id}>
                                <div className={styles.swiperItem}>
                                    <div className={styles.photo}>
                                        <img src={item.img} alt="manPhoto" />
                                    </div>
                                    <p>{item.text}</p>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>                
                </div>

                <div className={styles.buttons}>
                        <button
                            className={styles.prevButton}
                            onClick={() => swiperRef.current.swiper.slidePrev()}
                        >
                            <svg width="18" height="34" viewBox="0 0 18 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.129969 3.44998L2.78247 0.799976L17.23 15.2425C17.4629 15.4739 17.6477 15.7491 17.7738 16.0522C17.8999 16.3553 17.9648 16.6804 17.9648 17.0087C17.9648 17.337 17.8999 17.6621 17.7738 17.9652C17.6477 18.2684 17.4629 18.5436 17.23 18.775L2.78247 33.225L0.132467 30.575L13.6925 17.0125L0.129969 3.44998Z" fill="#FFC727"/>
                            </svg>

                        </button>
                        <button
                            className={styles.nextButton}
                            onClick={() => swiperRef.current.swiper.slideNext()}
                        >
                            <svg width="18" height="34" viewBox="0 0 18 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M0.129969 3.44998L2.78247 0.799976L17.23 15.2425C17.4629 15.4739 17.6477 15.7491 17.7738 16.0522C17.8999 16.3553 17.9648 16.6804 17.9648 17.0087C17.9648 17.337 17.8999 17.6621 17.7738 17.9652C17.6477 18.2684 17.4629 18.5436 17.23 18.775L2.78247 33.225L0.132467 30.575L13.6925 17.0125L0.129969 3.44998Z" fill="#FFC727"/>
                            </svg>
                        </button>
                    </div>
            </div>
            
        </section>
    );
};