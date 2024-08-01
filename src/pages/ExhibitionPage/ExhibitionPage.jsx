import './exhibition.scss';
import ExhibitionSlider from './ExhibitionSlider';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export const ExhibitionPage = () => {
    const [text, setText] = useState({});
    const navigate = useNavigate();

    useEffect(()=>{
        axios('https://bif.webtm.ru/ru/api/v1/exhibition/exhibitions/')
        .then(({data})=> setText(data[0]))
    }, [])
    return (
        <div style={{width: '100%', minHeight: '100vh',  backgroundColor: "#051650"}}
        className='exhibitionPage'
        >
            <div className="container">
                <h1 className="exhibitionPage-title">{text.title}</h1>
                <p className="exhibitionPage-text">{text.descriptions}</p>
                </div>

            <ExhibitionSlider />
            <button className="exhibitionPage-btn"
              onClick={()=>{
                navigate('/funds')
            }}
            >Арендовать стенд</button>

        </div>
    );
}
