import { Link } from "react-router-dom";
import styles from './Header.module.scss';
import emblem from '../../img/header/emblem.png';
import secEmblem from '../../img/header/GreenEconomy1.png';
import arrow from '../../img/header/Icons.svg';
import { useState } from "react";
import { motion, AnimatePresence } from 'framer-motion';
import { useMediaQuery } from "@hooks/usemedia/useMedia";
import { BurgerMenu } from "..";

export const Header = () => {
  const [show, setShow] = useState(false);
  const [lang, setLang] = useState('Рус');
  const [route, setRoute] = useState(false);

  const languages = ['Рус', 'Eng', 'Кыр'];

  const changeRoute = () => {
    setRoute(!route);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const showLang = () => {
    setShow(!show);
  };

  const changeLang = (lang) => {
    setLang(lang);
  };

  const w = useMediaQuery('(min-width: 1024px)');
  return (
    <header className={styles.container}>
      <div className="container">
        <div className={styles.headerTop}>
          <img src={emblem} alt="emblem" />
          <img src={secEmblem} alt="secEmblem" />
        </div>

        <div className={styles.header}>
          <div className={styles.links}>
            {!w ? (
              <BurgerMenu />
            ) : (
              <>
                <Link onClick={() => { scrollToTop(); changeRoute() }} to={route ? '/' : '/projects'}>
                  {route ? 'Главная' : 'О проекте'}
                </Link>
                <Link onClick={scrollToTop} to={'/funds'}>Источники финансирования</Link>
                <Link onClick={scrollToTop} to={'/business'}>Бизнес проекты</Link>
                <Link onClick={scrollToTop} to={'/exhibition'}>Выставка</Link>
              </>
            )}
          </div>

          <div onClick={showLang} style={show ? { position: 'absolute', right: '30px', borderRadius: '20px' } : { backgroundColor: 'none' }} className={styles.language}>
            <div className={styles.mainLang}>
              <p>{lang}</p>
              <img style={show ? { transform: 'rotate(-180deg)' } : { transform: 'rotate(0deg)' }} src={arrow} alt="arrow" />
            </div>

            <AnimatePresence>
              {show && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  style={{ overflow: 'hidden' }}
                  transition={{ duration: 0.5 }}
                >
                  <div className={styles.hidden}>
                    {languages.map((language, index) => (
                      language !== lang ? (
                        <p key={index} onClick={() => changeLang(language)}>{language}</p>
                      ) : null
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </header>
  );
}