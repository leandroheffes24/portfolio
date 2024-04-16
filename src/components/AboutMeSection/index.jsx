import styles from './AboutMeSection.module.css'
import aboutMeImage from '../../assets/images/about-me-image.jpg'

const AboutMeSection = () => {
    return (
        <section className={styles.aboutMeSection}>
            <div className={styles.textContainer}>
                <div className={styles.titleTextContainer}>
                    <h3 className={styles.title}>About Me</h3>
                    <p className={styles.subTitle}>example text</p>
                </div>

                <div className={styles.aboutMeTextContainer}>
                    <p className={styles.aboutMeText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Error perspiciatis ullam quisquam delectus facilis enim pariatur dicta aliquid reiciendis voluptate soluta dolore, sed, molestias laboriosam explicabo at. Incidunt, recusandae accusantium!</p>
                </div>

                <div className={styles.buttonsContainer}>

                </div>
            </div>

            <div className={styles.imageContainer}>
                <img className={styles.image} src={aboutMeImage} alt="about me image" />
            </div>
        </section>
    )
}

export default AboutMeSection