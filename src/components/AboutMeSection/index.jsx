import styles from './AboutMeSection.module.css'
import aboutMeImage from '../../assets/images/about-me-image.jpg'
import cv from '../../assets/pdf/CV-Leandro-Heffes.pdf'
import ContactSection from '../ContactSection'

const AboutMeSection = () => {
    return (
        <section id='aboutMe' className={styles.aboutMeSection}>
            <div className={styles.textContainer}>
                <div className={styles.titleTextContainer}>
                    <h3 className={styles.title}>About Me</h3>
                    <p className={styles.subTitle}>A brief description about me and my current situation</p>
                </div>

                <div className={styles.aboutMeTextContainer}>
                    <p className={styles.aboutMeText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quibusdam optio assumenda rerum nisi fugit nostrum placeat laborum, et odit numquam earum unde dolorem ducimus neque vel quae alias eaque.
                    Asperiores dicta vel labore quibusdam at eum in. Porro consequatur eligendi corrupti. Fugiat reiciendis nemo, pariatur ipsam magni eaque voluptatibus explicabo consectetur. Illum voluptatum commodi perspiciatis repudiandae porro aliquam mollitia!</p>
                </div>

                <div className={styles.buttonsContainer}>
                    <a className={styles.hireMeButton} href={ContactSection}>Hire me</a>

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