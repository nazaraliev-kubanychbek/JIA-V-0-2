import { useState, useEffect } from "react";
import axios from "axios";

const BusinessPageHero = () => {
  const [text, setText] = useState({});

  useEffect(()=>{
    axios('https://bif.webtm.ru/ru/api/v1/project/projects/')
    .then(({data})=> setText(data[0]))
  }, [])
    return (
        <div className="businessPage-hero">
        <h1 className="businessPage-hero-title">{text.title}</h1>
        <p className="businessPage-hero-text">{text.descriptons}</p>
        </div>
    );
}

export default BusinessPageHero;
