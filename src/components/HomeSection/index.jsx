import styles from './HomeSection.module.css'

const HomeSection = () => {
    return (
        <section className={styles.homeSection}>
            <div className={styles.content}>
                <div className={styles.textContainer}>
                    <p className={styles.introductionText}>Hello, I'm</p>
                    <h1 className={styles.title}>Leandro Heffes</h1>
                    <h2 className={styles.subTitle}>Full stack web developer.</h2>
                </div>

                <div className={styles.socialNetworksContainer}>
                    <div className={styles.main}>
                        <div className={styles.up}>
                            <button className={styles.card1}>
                                <a className={styles.socialNetworksLink} href="">
                                    <i className={`${'fa-brands fa-linkedin-in'} ${styles.linkedin}`}></i>
                                </a>
                            </button>
                            <button className={styles.card2}>
                                <a className={styles.socialNetworksLink} href="">
                                    <i className={`${'fa-brands fa-github github'} ${styles.github}`}></i>
                                </a>
                            </button>
                        </div>
                        <div className={styles.down}>
                            <button className={styles.card3}>
                                <a className={styles.socialNetworksLink} href="">
                                    <i className={`${'fa-brands fa-stack-overflow'} ${styles.stackOverflow}`}></i>
                                </a>
                            </button>
                            <button className={styles.card4}>
                                <a className={styles.socialNetworksLink} href="">
                                    <i className={`${'fa-brands fa-discord'} ${styles.discord}`}></i>
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