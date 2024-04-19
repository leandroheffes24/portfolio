import styles from './WhatImDoingSection.module.css'

const WhatImDoingSection = () => {
    return (
        <section id='whatImDoing' className={styles.whatImDoingSection}>
            <div className={styles.titleTextContainer}>
                <h3 className={styles.title}>What I'm Doing</h3>
                <p className={styles.subTitle}>Some things that i'll do for you</p>
            </div>

            <div className={styles.worksContainer}>
                <div className={styles.workContainer}>
                    <div className={styles.workMainContainer}>
                        <i className={`${'fa-solid fa-display'} ${styles.workLogo}`}></i>
                        <h4 className={styles.workTitle}>Web design</h4>
                    </div>

                    <div className={styles.workDescriptionContainer}>
                        <p className={styles.workDescription}>I create your website perfectly aligned with the identity and values of your company, for a unique experience for your customers. Additionally, I guarantee that your website displays correctly on all devices for a comfortable experience.</p>
                    </div>
                </div>

                <div className={styles.workContainer}>
                    <div className={styles.workMainContainer}>
                        <i className={`${'fa-solid fa-gauge-high'} ${styles.workLogo}`}></i>
                        <h4 className={styles.workTitle}>Optimization</h4>
                    </div>

                    <div className={styles.workDescriptionContainer}>
                        <p className={styles.workDescription}>I build your website to be fast and performant, improving user satisfaction and search engine rankings. Search engine optimization (SEO) best practices are also used to make your website more visible and get more traffic.</p>
                    </div>
                </div>

                <div className={styles.workContainer}>
                    <div className={styles.workMainContainer}>
                        <i className={`${'fa-solid fa-pen'} ${styles.workLogo}`}></i>
                        <h4 className={styles.workTitle}>Create, edit and delete</h4>
                    </div>

                    <div className={styles.workDescriptionContainer}>
                        <p className={styles.workDescription}>I develop systems to easily manage content to maintain your website.</p>
                    </div>
                </div>

                <div className={styles.workContainer}>
                    <div className={styles.workMainContainer}>
                        <i className={`${'fa-solid fa-rocket'} ${styles.workLogo}`}></i>
                        <h4 className={styles.workTitle}>Many features</h4>
                    </div>

                    <div className={styles.workDescriptionContainer}>
                        <p className={styles.workDescription}>Advanced features are incorporated depending on what is needed, such as an online store, social network integration, forms, etc.</p>
                    </div>
                </div>

                <div className={styles.workContainer}>
                    <div className={styles.workMainContainer}>
                        <i className={`${'fa-solid fa-shield-halved'} ${styles.workLogo}`}></i>
                        <h4 className={styles.workTitle}>Security</h4>
                    </div>

                    <div className={styles.workDescriptionContainer}>
                        <p className={styles.workDescription}>Encryption practices are used for sensitive data and complete security against cyber threats, guaranteeing the confidentiality and integrity of the data.</p>
                    </div>
                </div>

                <div className={styles.workContainer}>
                    <div className={styles.workMainContainer}>
                        <i className={`${'fa-solid fa-arrows-rotate'} ${styles.workLogo}`}></i>
                        <h4 className={styles.workTitle}>Update and lifetime support</h4>
                    </div>

                    <div className={styles.workDescriptionContainer}>
                        <p className={styles.workDescription}>In addition to creating and finalizing your website, I provide ongoing technical support, updates and improvements to keep your website in perfect condition.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatImDoingSection