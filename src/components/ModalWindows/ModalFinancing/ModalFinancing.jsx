import { useState } from 'react';
import styles from './ModalFinancing.module.scss';

export const ModalFinancing = ({setOpenModalForm ,openModal, setOpenModal, item}) => {
    const {img, title, description, typeFinancing} = item;
    const [openDescription, setOpenDescription] = useState(false);

    if(!openModal){
        return null;
    }
    return (
        <div onClick={() => {setOpenModal(false); setOpenDescription(false)}} className={styles.open}>
            {
                !openDescription ? (
                    <div style={openDescription ? {visibility: 'hidden'} : {visibility: 'visible'}} onClick={event => event.stopPropagation()} className={styles.block}>
                        <div className={styles.shortName}>
                            <p className={styles.firstLink}>{title}</p>
                        </div>
                        
                        <p onClick={() => setOpenDescription(true)} className={styles.link}>Подробнее</p>
                    </div>
                ) : (
                    <div onClick={event => event.stopPropagation()} className={styles.descriptionBlock}>
                        <div className={styles.img}>
                            <img src={img} alt="logo" />
                        </div>
                        <div className={styles.text}>
                            <h2>Название</h2>
                            <p>{title}</p>

                            <h2>Описание</h2>
                            <p>{description}</p>

                            <h2>Виды финансирования</h2>
                            <p>{typeFinancing}</p>
                        </div>
                    </div>
                )
            }
            
            <div className={styles.button}>
                <button onClick={() => setOpenModalForm(true)} className={styles.callButton}>Связаться</button>
            </div>
        </div>
    );
}

