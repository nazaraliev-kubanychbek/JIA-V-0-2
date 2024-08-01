import './businessPage.scss';
import BusinessPageHero from './BusinessPageHero';
import BusinessProjects from './BusinessProjects';
import BusinessInfo from './BusinessInfo';
import { useNavigate } from 'react-router-dom';

const BusinessPage = () => {
    const navigate = useNavigate();
    return (
        <div  style={{ minHeight: "100vh", backgroundColor: "#051650" }}
        className="businessPage">
            <div className="container">
                <BusinessPageHero />
                <BusinessProjects />
                <button className="businessPage-btn"
                onClick={()=>{
                    navigate('/funds')
                }}
                >
                    Подать заявку
                   </button>
                <BusinessInfo />
            </div>
        </div>
    );
}

export  {BusinessPage};
