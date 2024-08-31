import styles from './ProyectsSection.module.css'
import clothingEcommerceImage from '../../assets/images/clothingecommerce.webp'
import generala from '../../assets/images/generala.webp'
import swasistenciavirtual from '../../assets/images/swasistenciavirtual.webp'

const ProyectsSection = () => {
    return (
        <section id='proyects' className={styles.proyectsSection}>
            <div className={styles.titleTextContainer}>
                <h3 className={styles.title}>Mis proyectos</h3>
                <p className={styles.subTitle}>Date una vuelta por mis proyectos</p>
            </div>

            <div className={styles.proyectsContainer}>
                <a href="https://sw-asistencia-virtual.vercel.app/">
                    <div className={styles.card}>
                        <img className={styles.card__image} src={swasistenciavirtual} alt="SW Asistencia Virtual mockup" />
                        <div className={styles.card__content}>
                            <p className={styles.card__title}>SW Asistencia Virtual</p>
                            <p className={styles.card__description}>Website made for Silvia Waimann, virtual assistant who needs to show her experience and services to obtain new clients.</p>
                        </div>
                    </div>
                </a>

                <a href="https://generala.vercel.app/">
                    <div className={styles.card}>
                        <img className={styles.card__image} src={generala} alt="Anotador Generala by Leandro Heffes" />
                        <div className={styles.card__content}>
                            <p className={styles.card__title}>Anotador Generala</p>
                            <p className={styles.card__description}>Scorer of the Generala dice game.</p>
                        </div>
                    </div>
                </a>
            </div>
        </section>
    )
}

export default ProyectsSection