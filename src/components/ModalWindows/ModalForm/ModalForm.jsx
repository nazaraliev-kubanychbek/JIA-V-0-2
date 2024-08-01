import { useState } from 'react';
import styles from './ModalForm.module.scss';
import {motion, AnimatePresence} from 'framer-motion';
import { useMediaQuery } from '@hooks/usemedia/useMedia';

export const ModalForm = ({ openModalForm, setOpenModalForm, setComplate }) => {

    const [isLegalVisible, setLegalVisible] = useState(false);
    const [isSectorVisible, setSectorVisible] = useState(false);
    const [legalChoice, setLegalChoice] = useState('');
    const [sectorChoice, setSectorChoice] = useState('');

    const hundlerLegalVisible = () => {
        setLegalVisible(!isLegalVisible);
    }

    const hundlerSectorVisible = () => {
        setSectorVisible(!isSectorVisible);
    }

    const w = useMediaQuery('(max-width: 700px)');
    const widthIcon = w ? '10' : '18';
    const heightIcon = w ? '26' : '34';

    if(!openModalForm)  {
        return null;
    }
    return (
        <div onClick={() => setOpenModalForm(!openModalForm)} className={styles.open}>
            <div onClick={event => event.stopPropagation()} className={styles.block}>
                
                <div className={styles.container}>
                    <form action="" className={styles.form}>
                        <input type="text" placeholder='ФИО' />
                        <input type="text" placeholder='Название вашей компании'/>
                        <textarea rows={2} type="textArea" placeholder='Краткое описание деятельности вашей компании' />

                        <div onClick={hundlerLegalVisible} className={styles.select}>{legalChoice.length ? legalChoice : 'Юридическое название'} 
                            <span style={isLegalVisible ? {transform: 'rotate(-180deg)', transition: '.3s'} : {transition: '.3s'}}>
                                <svg width={widthIcon} height={heightIcon} viewBox="0 0 18 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.129969 3.44998L2.78247 0.799976L17.23 15.2425C17.4629 15.4739 17.6477 15.7491 17.7738 16.0522C17.8999 16.3553 17.9648 16.6804 17.9648 17.0087C17.9648 17.337 17.8999 17.6621 17.7738 17.9652C17.6477 18.2684 17.4629 18.5436 17.23 18.775L2.78247 33.225L0.132467 30.575L13.6925 17.0125L0.129969 3.44998Z" fill="#000000"/>
                                </svg>
                            </span>
                        </div>
                        
                        <AnimatePresence>
                        {
                            isLegalVisible && (
                                <motion.div 
                                    className={styles.listItem}
                                    initial={{height: 0}}
                                    animate={{height: 'auto'}}
                                    exit={{height: 0}}
                                >
                                    <p onClick={() => {setLegalChoice('ОсОО'); hundlerLegalVisible()}}>ОсОО</p>
                                    <p onClick={() => {setLegalChoice('АО'); hundlerLegalVisible()}}>АО</p>
                                    <p onClick={() => {setLegalChoice('ЗАО'); hundlerLegalVisible()}}>ЗАО</p>
                                    <p onClick={() => {setLegalChoice('КХ'); hundlerLegalVisible()}}>КХ</p>
                                    <p onClick={() => {setLegalChoice('ИП'); hundlerLegalVisible()}}>ИП</p>
                                </motion.div>
                            )
                        }
                        </AnimatePresence>
                        

                        <div onClick={hundlerSectorVisible} className={styles.select}>{sectorChoice.length ? sectorChoice : 'Укажите сектор'}
                            <span style={isSectorVisible ? {transform: 'rotate(-180deg)', transition: '.3s'} : {transition: '.3s'}}>
                                <svg width={widthIcon} height={heightIcon} viewBox="0 0 18 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M0.129969 3.44998L2.78247 0.799976L17.23 15.2425C17.4629 15.4739 17.6477 15.7491 17.7738 16.0522C17.8999 16.3553 17.9648 16.6804 17.9648 17.0087C17.9648 17.337 17.8999 17.6621 17.7738 17.9652C17.6477 18.2684 17.4629 18.5436 17.23 18.775L2.78247 33.225L0.132467 30.575L13.6925 17.0125L0.129969 3.44998Z" fill="#000000"/>
                                </svg>
                            </span>

                        </div>
                        <AnimatePresence>
                        {
                            isSectorVisible && (
                                <motion.div 
                                    className={styles.listItem}
                                    initial={{height: 0}}
                                    animate={{height: 'auto'}}
                                    exit={{height: 0}}
                                >
                                    <p onClick={() => {setSectorChoice('Сельское хозяйство: растениеводство, животноводство, рыбоводство, птицеводство.'); hundlerSectorVisible()}}>
                                        Сельское хозяйство: растениеводство, животноводство, рыбоводство, птицеводство.
                                    </p>
                                    <p onClick={() => {setSectorChoice('Промышленность: пр-во товаров и продуктов, обрабатывающая и добывающая пр-сть.'); hundlerSectorVisible()}}>
                                        Промышленность: пр-во товаров и продуктов, обрабатывающая и добывающая пр-сть.
                                    </p>
                                    <p onClick={() => {setSectorChoice('Строительство'); hundlerSectorVisible()}}>
                                        Строительство
                                    </p>
                                    <p onClick={() => {setSectorChoice('Транспорт и Логистика'); hundlerSectorVisible()}}>
                                        Транспорт и Логистика
                                    </p>
                                </motion.div>
                            )
                        }
                        </AnimatePresence>
                    </form>
                </div>
            </div>
                <div className={styles.button}>
                    <button onClick={() => setComplate(true)} className={styles.callButton}>Связаться</button>
                </div>
        </div>
    );
}

