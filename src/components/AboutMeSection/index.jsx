import styles from './AboutMeSection.module.css'
import aboutMeImage from '../../assets/images/about-me-image.jpg'
import cv from '../../assets/pdf/CV-Leandro-Heffes.pdf'

const AboutMeSection = () => {
    return (
        <section id='aboutMe' className={styles.aboutMeSection}>
            <div className={styles.textContainer}>
                <div className={styles.titleTextContainer}>
                    <h3 className={styles.title}>About Me</h3>
                    <p className={styles.subTitle}>A brief description about me and my current situation</p>
                </div>

                <div className={styles.aboutMeTextContainer}>
                    <p className={styles.aboutMeText}>I am a full stack web developer, with a strong front-end orientation. I am 21 years old and currently live in Bahía Blanca, Buenos Aires, Argentina. I am working freelance and looking for a new experience in a company or project that allows me to put my skills into practice and develop as a professional.</p>
                </div>

                <div className={styles.buttonsContainer}>
                    <a className={styles.hireMeButton} href='#contact'>Hire me</a>

                    <a className={styles.cvButton} href={cv} download={cv}>Download CV</a>
                </div>
            </div>

            <div className={styles.imageContainer}>
                <img className={styles.image} src={aboutMeImage} alt="about me image" />
            </div>
        </section>
    )
}

export default AboutMeSection