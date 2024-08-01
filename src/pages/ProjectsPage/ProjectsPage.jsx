// import { FirstSection } from "@components/ProjectsSections";
// import bannerImage from "../../img/projectsBanner.png";
import classes from "./ProjectsPage.module.scss";
import ages1 from "../../img/projects-ages/2015.svg";
import ages2 from "../../img/projects-ages/2016.svg";
import ages3 from "../../img/projects-ages/2017.svg";
import ages4 from "../../img/projects-ages/2019.svg";
import ages5 from "../../img/projects-ages/2022.svg";
import projectVideoBorder from "@img/projectsVideoBorder.png";
import projectVideoBorderRight from "@img/projectsVideoBorderRight.png";
import vector_left from "../../img/vector-left.svg";
import vector_right from "../../img/vector-right.svg";
import investPrice from "../../img/investPrice.svg";
import investDiagram from "../../img/investDiagram.svg";
import "./projectsPage.scss";
// import ProjectsPageHero from "./ProjectsPageHero";
// import ProjectsPageProjects from "./ProjectsPageProjects";
// import ProjectsPageInfo from "./ProjectsPageInfo";
import { SwiperSlide,Swiper } from "swiper/react";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper.css";
import image1 from '../../img/sliderImage.png'
import image2 from '../../img/header/emblem.png'
export const ProjectsPage = () => {
  return (
    <div
      style={{ width: "100%", backgroundColor: "#051650" }}
      className="projects_page"
    >
      <div className={classes.projects_banner_wrap}>

      <section className={classes.projects_banner + " container"}>
        <div className={classes.projects_banner_content}>
          <h1 className={classes.banner_title}>
            бишкекский инвестиционный форум
          </h1>

          <div className={classes.projects_banner_date}>24-25 октябрь 2024</div>

          <div className={classes.projects_banner_advantages}>
            <div className={classes.projects_banner_advantages_block}>
              <div className={classes.content}>
                <h3 className={classes.projects_banner_title}>
                  20 <span>млн$</span>
                </h3>
                <p className={classes.projects_banner_desc}>
                  Общая сумма <br />
                  привлеченных инвестиций
                </p>
              </div>
            </div>
            <div className={classes.projects_banner_advantages_block}>
              <div className={classes.content}>
                <h3 className={classes.projects_banner_title}>198</h3>
                <p className={classes.projects_banner_desc}>
                  Количество проектов <br /> попавших в каталог
                </p>
              </div>
            </div>
            <div className={classes.projects_banner_advantages_block}>
              <div className={classes.content}>
                <h3 className={classes.projects_banner_title}>44</h3>
                <p className={classes.projects_banner_desc}>
                  Количество чемпионов проектов,
                  <br /> представленных на форуме
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>

      <section className={classes.about_projects + " container "}>
        <h1 className={"title " + classes.about_project_title}>О ПРОЕКТЕ</h1>

        <div className={classes.about_content}>
          <div className={classes.about_logo}>BIF</div>
          <p className={classes.about_text_content}>
            Бишкекский Инвестиционный Форум - эта площадка, где встречаются МСБ
            с крупным бизнесом, внутренними и зарубежными инвесторами,
            представителями парламентариев и государственных структур,
            международных и местных организаций, посольств и бизнес сообщества.
            В рамках форума презентуются самые успешные и перспективные бизнес
            проекты, обсуждение ожидаемых трендов и изменения в экономике и
            бизнес среде и новые векторы сотрудничества для предпринимателей.
            <br />
            <br />
            BIF это уникальная возможность для презентации самых лучших бизнес
            проектов, поиска динамично растущего бизнеса для инвестиций и
            потенциальных инвесторов/бизнес партнеров для заключения реальных
            контрактов и соглашений.
            <br />
            <br />
            За прошедшие годы BIF продемонстрировал высокий спрос на платформу,
            где предприниматели могут встретиться напрямую с инвесторами и
            потенциальными партнерами в своей сфере деятельности. По результатам
            предыдущих лет, а именно с 2015 по 2022 были заключены успешные
            сделки на сумму более чем 20 $ млн. 
          </p>
        </div>
      </section>

      <section className={classes.history + " container"}>
        <h1 className={classes.history_title + " title"}>
          <img src={vector_right} alt="" />
          Истории
          <img src={vector_left} alt="" />
        </h1>
        <p className={classes.history_text}>
          Бишкекский Инвестиционный Форум является продуктом - Бизнес-Ассоциации
          JIA, которая реализуется при поддержке партнеров.
        </p>
        <div className={classes.history_ages}>
          <img src={ages1} alt="" />
          <img src={ages2} alt="" />
          <img src={ages3} alt="" />
          <img src={ages4} alt="" />
          <img src={ages5} alt="" />
        </div>
      </section>

      <section className={classes.history_lines + " container"}>
        <div className={classes.history_lines_block}>
          <h1 className={classes.history_lines_title}>
            <span>2015</span> - “Разбуди деньги!”
          </h1>
          <div className={classes.history_lines_block_content}>
            <p>
              <span>
                Первый Бишкекский Инвестиционный форум состоялся в 2015 году.
                Бишкекский инвестиционный форум выступил мостом, на котором
                успешные компании в быстро растущем секторе экономики
                встретились с потенциальными инвесторами, где каждый имел
                возможность найти источник для увеличения капитала.
              </span>{" "}
              Основной целью форума является привлечение инвестиций в малый и
              средний бизнес, создание платформы для налаживания деловых
              контактов, а также обмен современными технологиями, идеями,
              навыками и опытом по развитию бизнеса.
            </p>
            <div className={classes.history_lines_video}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/OW3eJDr2sn4?si=_rUvjm6rFPk1YQ6H"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <img
                className={classes.history_lines_video_border}
                alt="history_lines_video_border"
                src={projectVideoBorder}
              />
            </div>
          </div>
          <div className={classes.history_lines_footer}>
            <div className={classes.history_lines_footer_item}>
              <img src={investPrice} alt="" /> Количество заявленных проектов -
              116
            </div>
            <div className={classes.history_lines_footer_item}>
              <img src={investDiagram} alt="" /> Объем привлеченных инвестиций
              (USD) - 700 000
            </div>
          </div>
        </div>
        <div className={classes.history_lines_block}>
          <h1
            className={classes.history_lines_title}
            style={{ textAlign: "end" }}
          >
            <span>2016</span> - «Место встречи предпринимателя и инвестора»
          </h1>
          <div className={classes.history_lines_block_content}>
            <div className={classes.history_lines_video}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/OW3eJDr2sn4?si=_rUvjm6rFPk1YQ6H"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <img
                className={classes.history_lines_video_border}
                alt="history_lines_video_border"
                src={projectVideoBorderRight}
                style={{ left: "24px" }}
              />
            </div>
            <p>
              <span>
                {" "}
                BIF - 2016 стал мостом, на котором успешные компании в быстро
                растущем секторе экономики встретились с потенциальными
                инвесторами, где каждый нашел источник для увеличения капитала.
              </span>{" "}
              Представители бизнеса соседних стран и кыргызского бизнеса
              обсудили экономическую ситуацию и бизнес тренды, вызовы и
              возможности в регионе и мире. Суммы запрашиваемых инвестиций для
              бизнес-проектов от $20 000 и свыше $2 000 000.
              <span>
                {" "}
                Данные бизнес проекты были презентованы инвесторам из Индии, а
                также представителям крупного бизнеса Кыргызстана и
                инвестиционных институтов страны.
              </span>
            </p>
          </div>
          <div className={classes.history_lines_footer}>
            <div className={classes.history_lines_footer_item}>
              <img src={investPrice} alt="investPrice" /> Объем привлеченных инвестиций
              (USD) - 3082000
            </div>
            <div className={classes.history_lines_footer_item}>
              <img src={investDiagram} alt="investDiagram" /> Количество заявленных проектов
              - 250
            </div>
          </div>
        </div>
        <div className={classes.history_lines_block}>
          <h1 className={classes.history_lines_title}>
            <span>2017 -</span>
          </h1>
          <div className={classes.history_lines_block_content}>
            <p style={{ width: 575 }}>
              <span>
                Бишкекский Инвестиционный Форум 2017 (BIF 2017) –на сегодняшний
                день это самое крупное в Кыргызстане эффективное бизнес-событие,
                где на одной площадке предприниматели встречают своего
                потенциального инвестора. По результатам первого форума BIF 2015
                более 10 компаний заключили сделки на сумму более $ 750 000,
                второго форума BIF 2016 более пяти сделок на сумму $ 3 млн.
                Помимо участия действующего среднего и крупного бизнеса, в этом
                году концепция форума предусматривает участие старт-ап
                проектов. 
              </span>
              В 2017 году особое внимание было уделено предпринимателям,
              действующим в южных регионах Кыргызской Республики.
            </p>
            <div className={classes.history_lines_video}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/OW3eJDr2sn4?si=_rUvjm6rFPk1YQ6H"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <img
                className={classes.history_lines_video_border}
                alt="history_lines_video_border"
                src={projectVideoBorder}
              />
            </div>
          </div>
          <div className={classes.history_lines_footer}>
            <div className={classes.history_lines_footer_item}>
              <img src={investPrice} alt="" /> Объем привлеченных инвестиций
              (USD) - 6035000
            </div>
            <div className={classes.history_lines_footer_item}>
              <img src={investDiagram} alt="" />
              Количество заявленных проектов - 350
            </div>
          </div>
        </div>
        <div className={classes.history_lines_block}>
          <h1
            className={classes.history_lines_title}
            style={{ textAlign: "end" }}
          >
            <span>2019 -</span> «The Future is Now»
          </h1>
          <div className={classes.history_lines_block_content}>
            <div className={classes.history_lines_video}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/OW3eJDr2sn4?si=_rUvjm6rFPk1YQ6H"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <img
                className={classes.history_lines_video_border}
                src={projectVideoBorderRight}
                style={{ left: "24px" }}
              />
            </div>
            <p>
              <span>
                {" "}
                Самые яркие кыргызстанские предприниматели, задающие тренды в
                своих сферах и добивающиеся успехов на глобальном рынке,
                говорили о трендах и технологиях. Представители
                центрально-азиатского бизнеса обсудили вопросы регионального
                экономического сотрудничества.
              </span>
              Основные фокусы BIF 2019: IT и доступ к финансовым технологиям,
              женское предпринимательство, зеленые технологии и e-commerce.
            </p>
          </div>
          <div className={classes.history_lines_footer}>
            <div className={classes.history_lines_footer_item}>
              <img src={investPrice} alt="" /> Объем привлеченных инвестиций
              (USD) - 3082000
            </div>
            <div className={classes.history_lines_footer_item}>
              <img src={investDiagram} alt="" /> Количество заявленных проектов
              - 250
            </div>
          </div>
        </div>
        <div className={classes.history_lines_block}>
          <h1 className={classes.history_lines_title}>
            <span>2022 -</span> «DAVOS в Центральной Азии»
          </h1>
          <div className={classes.history_lines_block_content}>
            <p>
              <span>
                {" "}
                Бишкекский Инвестиционный форум стал уникальной площадкой для
                обсуждения  и решения вопросов бизнеса и развития экономики
                региона в различных форматах.
                <br />
              </span>
              Основные темы BIF - 2022:
              <br />
              <span>
                 «Перспективы экономической интеграции в Центральной
                Азии»; «Продовольственная безопасность и международная торговля
                в Центральной Азии».
              </span>
            </p>
            <div className={classes.history_lines_video}>
              <iframe
                width="560"
                height="315"
                src="https://www.youtube.com/embed/OW3eJDr2sn4?si=_rUvjm6rFPk1YQ6H"
                title="YouTube video player"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerpolicy="strict-origin-when-cross-origin"
                allowfullscreen
              ></iframe>
              <img
                className={classes.history_lines_video_border}
                src={projectVideoBorderRight}
                style={{ left: "24px" }}
              />
            </div>
          </div>
          <div className={classes.history_lines_footer}>
            <div className={classes.history_lines_footer_item}>
              <img src={investPrice} alt="" /> Объем привлеченных инвестиций
              (USD) - 3082000
            </div>
            <div className={classes.history_lines_footer_item}>
              <img src={investDiagram} alt="" /> Количество заявленных проектов
              - 250
            </div>
          </div>
        </div>
      </section>
      <h1 className="title" style={{ textAlign: "center", marginTop: 150 }}>
        фотографии
      </h1>
      <div className={classes.swiper_projects_wrap}>

      <div className={classes.slider_projects +' container swiper_projects_container'}>
        <div className={classes.emblem}>
      <img src={image2} alt="" />
        </div>
        <Swiper slidesPerView={3} >
          <SwiperSlide>
            <img src={image1}/>
          </SwiperSlide>
          <SwiperSlide>
          <img src={image1}/>

          </SwiperSlide>
          <SwiperSlide>
          <img src={image1}/>

          </SwiperSlide>
          <SwiperSlide>
          <img src={image1}/>

          </SwiperSlide>
          <SwiperSlide>
          <img src={image1}/>

          </SwiperSlide>
        </Swiper>
      </div>
      </div>
    
      {/* <FirstSection />
      style={{ minHeight: "100vh", backgroundColor: "#051650" }}
      className="projectsPage"
    > */}
      {/* <div className="container">
        <ProjectsPageHero />
        <ProjectsPageProjects />
        <button className="projectsPage-btn">Подать заявку</button>
        <ProjectsPageInfo />
      </div> */}
    </div>
  );
};
