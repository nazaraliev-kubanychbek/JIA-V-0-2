import styles from './MainBisnesSection.module.scss';
import firstMan from '@img/homepageImg/Component3.png';
import secondMan from '@img/homepageImg/Rectangle4383.jpg';
import thirdMan from '@img/homepageImg/Rectangle4384.jpg';
import fourthMan from '@img/homepageImg/Rectangle4385.jpg';

export const MainBisnesSection = () => {
    return (
        <section className='container'>
            <div className={styles.container}>
                <h2>Что вас будет ждать на главном бизнес событии года?</h2>
                <p>BIF 2024 - Green  Economy 2024</p>

                <div className={styles.flexItem}>
                    <div className={styles.item}>
                        <div className={styles.photoItem}>
                            <img src={firstMan} alt="" />
                        </div>
                        <p>Выставка</p>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.photoItem}>

                            <img src={secondMan} alt="" />
                        </div>

                        <p>Презентации инвест-проектов</p>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.photoItem}>

                            <img src={thirdMan} alt="" />
                        </div>
                        
                        <p>Мастер-классы</p>
                    </div>
                    <div className={styles.item}>
                        <div className={styles.photoItem}>
                            <img src={fourthMan} alt="" />
                        </div>
                        <p>Панельные сессии</p>
                    </div>
                </div>
            </div>

            
        </section>
    );
}

