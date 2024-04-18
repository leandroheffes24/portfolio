import styles from './ProyectsSection.module.css'
import clothingEcommerceImage from '../../assets/images/clothingecommerce.webp'
import movieSearcherImage from '../../assets/images/moviesearcher.png'
import swasistenciavirtual from '../../assets/images/swasistenciavirtual.webp'

const ProyectsSection = () => {
    return (
        <section id='proyects' className={styles.proyectsSection}>
            <div className={styles.titleTextContainer}>
                <h3 className={styles.title}>My Proyects</h3>
                <p className={styles.subTitle}>Let's take a look at my portfolio!</p>
            </div>

            <div className={styles.proyectsContainer}>
                <a href="https://sw-asistencia-virtual.vercel.app/">
                    <div className={styles.card}>
                        <img className={styles.card__image} src={swasistenciavirtual} alt="SW Asistencia Virtual mockup" />
                        <div className={styles.card__content}>
                            <p className={styles.card__title}>SW Asistencia Virtual</p>
                            <p className={styles.card__description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        </div>
                    </div>
                </a>

                <a href="https://movie-searcher-leandroheffes.vercel.app/">
                    <div className={styles.card}>
                        <img className={styles.card__image} src={movieSearcherImage} alt="Movie Searcher by Leandro Heffes" />
                        <div className={styles.card__content}>
                            <p className={styles.card__title}>Movie Searcher</p>
                            <p className={styles.card__description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        </div>
                    </div>
                </a>

                <a href="https://github.com/leandroheffes24/digitalhouse-ecommerce">
                    <div className={styles.card}>
                        <img className={styles.card__image} src={clothingEcommerceImage} alt="Movie Searcher by Leandro Heffes" />
                        <div className={styles.card__content}>
                            <p className={styles.card__title}>Clothing e-commerce</p>
                            <p className={styles.card__description}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                        </div>
                    </div>
                </a>
            </div>

            <div className={styles.moreProyectsButtonContainer}>
                <a className={styles.moreProyectsLink} href="/proyects">More proyects</a>
            </div>
        </section>
    )
}

export default ProyectsSection