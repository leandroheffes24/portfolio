import styles from './HomeSection.module.css'

const HomeSection = () => {
    return (
        <section id='home' className={styles.homeSection}>
            <div className={styles.content}>
                <div className={styles.textContainer}>
                    <p className={styles.introductionText}>¡Bienvenido! Soy</p>
                    <h1 className={styles.title}>Leandro Heffes.</h1>
                    <h2 className={styles.subTitle}>Desarrollador web full stack.</h2>
                </div>

                <div className={styles.socialNetworksContainer}>
                    <div className={styles.main}>
                        <div className={styles.up}>
                            <button className={styles.card1}>
                                <a className={styles.socialNetworksLink} href="https://www.linkedin.com/in/leandro-heffes/">
                                    <i className={`${'fa-brands fa-linkedin-in'} ${styles.linkedin}`}></i>
                                </a>
                            </button>
                            <button className={styles.card2}>
                                <a className={styles.socialNetworksLink} href="https://github.com/leandroheffes24">
                                    <i className={`${'fa-brands fa-github github'} ${styles.github}`}></i>
                                </a>
                            </button>
                        </div>
                        <div className={styles.down}>
                            <button className={styles.card3}>
                                <a className={styles.socialNetworksLink} href="https://stackoverflow.com/users/23576635/leandro">
                                    <i className={`${'fa-brands fa-stack-overflow'} ${styles.stackOverflow}`}></i>
                                </a>
                            </button>
                            <button className={styles.card4}>
                                <a className={styles.socialNetworksLink} href="https://wa.link/tj71f6">
                                    <i className={`${'fa-brands fa-whatsapp'} ${styles.whatsapp}`}></i>
                                </a>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HomeSection