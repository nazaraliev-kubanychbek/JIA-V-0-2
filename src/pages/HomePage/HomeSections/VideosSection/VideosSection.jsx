import styles from './VideosSection.module.scss';
import YouTubePlayer from './YouTubePlayer/YouTubePlayer';

export const VideosSection = () => {
    return (
        <section className={styles.container}>
            <div className={styles.whiteBlock}>
                <div className='container'>

                    <div className={styles.blockVideo}>
                        <div className={styles.text}>
                            <h2>BIF 2022</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Ac sed orci dignissim neque augue porta. Ac sed orci dignissim neque augue porta.
                            </p>
                        </div>
                        <YouTubePlayer videoId={'https://www.youtube.com/embed/4UPVSX9ymyg?si=fthGnXJ8Wk9pBaJF'}/>

                        {/* <div className={styles.video}>
                            <iframe src="https://www.youtube.com/embed/4eKREu1wceI?si=PEQZzxAoyNYwH1cX" frameborder="0" title="YouTube video player" ></iframe>
                        </div> */}
                    </div>

                    <div className={styles.blockVideo}>
                        <YouTubePlayer videoId={'https://www.youtube.com/embed/yBJ3AlRBAw8?si=5EDalI1zrIs-m9Vg'}/>
                        {/* <div className={styles.video}>
                            <iframe src="https://www.youtube.com/embed/4eKREu1wceI?si=PEQZzxAoyNYwH1cX" frameborder="0" title="YouTube video player" ></iframe>
                        </div> */}
                        <div className={styles.text}>
                            <h2>Green Economy 2022</h2>
                            <p>
                                Lorem ipsum dolor sit amet consectetur. Ac sed orci dignissim neque augue porta. Ac sed orci dignissim neque augue porta.
                            </p>
                        </div>
                    </div>

                </div>
            </div>
            
        </section>
    );
}

