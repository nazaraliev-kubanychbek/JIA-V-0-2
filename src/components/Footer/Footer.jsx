import emblem from '@img/header/emblem.png';
import email from '@img/footer/email.svg';
import phone from '@img/footer/phone.svg';
import whatsapp from '@img/footer/logos_whatsapp-icon.svg';
import telegram from '@img/footer/logos_telegram.svg';
import facebook from '@img/footer/logo_faceBook.svg';
import insta from '@img/footer/logo_insta.svg';
import geeks from '@img/footer/geeks.png';
import styles from './Footer.module.scss'
import { Link } from 'react-router-dom';
import { useMediaQuery } from '@hooks/usemedia/useMedia';


export const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({
        top: 0,
        // behavior: 'smooth',
        });
    };
    const w = useMediaQuery('(max-width: 840px)');
    return (
        <footer className={styles.footer}>
            <div className='container'>
                <div className={styles.container}>
                    <div className={styles.emblem}>
                        <img src={emblem} alt="emblem" />  
                        {
                            !w && 
                            <div className={styles.geeks}>
                                <img src={geeks} alt="geeks" />
                                <p>Made by Geeks Pro</p>
                            </div>
                        }
                        
                    </div>

                    <div className={styles.contact}>
                        <a href="https://www.instagram.com/bif.kg/">связаться с нами</a>
                        <p><img src={phone} alt="phone" />+996 555 895 362</p>
                        <a target="_blank" href="https://mail.google.com/mail/?view=cm&fs=1&to=bif@jia.kg&su=Тема%20письма&body=Текст%20сообщения" rel="noreferrer"><p><img src={email} alt="email" /> E-mail</p></a>
                    </div>

                    <div className={styles.navigation}>
                        <h3>Навигация</h3>
                        <Link onClick={scrollToTop} to={'/projects'}><p>О проекте</p></Link>
                        <Link onClick={scrollToTop} to={'/funds'}><p>Источники финансирования</p></Link>
                        <Link onClick={scrollToTop} to={'/business'}><p>Бизнес проекты</p></Link>
                        <Link onClick={scrollToTop} to={'/exhibition'}><p>Выставка</p></Link>
                    </div>

                    <div className={styles.social_media}> 
                        <h3>Соц.сети</h3>
                        <div>
                            <a target='_balnk' href="https://api.whatsapp.com/send?%20phone=996555895362">
                                <img src={whatsapp} alt="whatsapp" />
                            </a>
                            <a target='_balnk' href="https://www.facebook.com/bishkekinvestmentforum?mibextid=LQQJ4d ">
                                <img src={facebook} alt="facebook" />
                            </a>
                            <a target='_balnk' href="https://www.instagram.com/bif_kg_/ ">
                                <img src={insta} alt="instagram" />
                            </a>
                            <a target='_balnk' href="https://t.me/bishkekinvestforum"><img src={telegram} alt="telegram" /></a>
                        </div>
                    </div>

                    {
                        w && 
                        <div className={styles.geeks}>
                            <img src={geeks} alt="geeks" />
                            <p>Made by Geeks Pro</p>
                        </div>
                    }
                </div>
                
            </div>
        </footer>
    );
}
