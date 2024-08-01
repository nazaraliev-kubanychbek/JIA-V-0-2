import icon from './img/projectsIcon.svg';

const BusinessInfo = () => {
    return (
        <div className='businessPage-info'>
        <h2 className="businessPage-info-title">Участие открыто для всех предпринимателей с действующим бизнесом!</h2>
        <p className="businessPage-info-text">Необходимо</p>

        <div className="row">
            <div className="col-4">
                <div className="businessPage-info-card">
                    <img src={icon} alt="" className="businessPage-info-card-icon" />
                    <p className="businessPage-info-card-text">Предоставить все необходимые документы, подтверждающие законность деятельности юридического лица.</p>
                </div>
            </div>
            <div className="col-4">
                <div className="businessPage-info-card">
                    <img src={icon} alt="" className="businessPage-info-card-icon" />
                    <p className="businessPage-info-card-text">Заполнить анкету до 05.09.2024</p>
                </div>
            </div>
            <div className="col-4">
                <div className="businessPage-info-card">
                    <img src={icon} alt="" className="businessPage-info-card-icon" />
                    <p className="businessPage-info-card-text">
                        За дополнительной информацией:
                        <br />
                        <a href="tel: +996 999 895 362">+996 999 895 362</a>
                    </p>
                </div>
            </div>
        </div>
    </div>
    );
}

export default BusinessInfo;
