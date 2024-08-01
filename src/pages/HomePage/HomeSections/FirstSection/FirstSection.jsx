import styles from './FirstSection.module.scss';
import bgImg from '@img/homepageImg/MainPage.jpg'

export const FirstSection = () => {
    return (
        <section className={styles.container}>
            <img width={2000} src={bgImg} alt="" />
            
            <div className={styles.text}>   
                <div className={styles.discription}>
                    <p>О проекте</p>
                </div>
                <h1>Бишкек, Кыргызстан</h1>
            </div>
        </section>
    );
}

