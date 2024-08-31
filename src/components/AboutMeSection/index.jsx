import styles from './AboutMeSection.module.css'
import aboutMeImage from '../../assets/images/about-me-image.jpg'
import cv from '../../assets/pdf/CV-Leandro-Heffes.pdf'

const AboutMeSection = () => {
    return (
        <section id='aboutMe' className={styles.aboutMeSection}>
            <div className={styles.textContainer}>
                <div className={styles.titleTextContainer}>
                    <h3 className={styles.title}>Sobre mí</h3>
                    <p className={styles.subTitle}>Una breve descripción sobre mí y mi situación actuali.</p>
                </div>

                <div className={styles.aboutMeTextContainer}>
                    <p className={styles.aboutMeText}>Soy un desarrollador web full stack, con una fuerte orientación front-end. Tengo 22 años y actualmente vivo en Bahía Blanca, Buenos Aires, Argentina. Trabajo de manera freelance y busco una nueva experiencia en una empresa o proyecto que me permita poner en práctica mis habilidades y desarrollarme como profesional.</p>
                </div>

                <div className={styles.buttonsContainer}>
                    <a className={styles.hireMeButton} href='#contact'>Contactame</a>

                    <a className={styles.cvButton} href={cv} download={cv}>Descargar mi CV</a>
                </div>
            </div>

            <div className={styles.imageContainer}>
                <img className={styles.image} src={aboutMeImage} alt="about me image" />
            </div>
        </section>
    )
}

export default AboutMeSection