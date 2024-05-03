import styles from './ProyectsPage.module.css'
import clothingEcommerceImage from '../../assets/images/clothingecommerce.webp'
import generala from '../../assets/images/generala.webp'
import swasistenciavirtual from '../../assets/images/swasistenciavirtual.webp'

const ProyectsPage = () => {
    return (
        <section className={styles.proyectsPage}>
            <div className={styles.proyectContainer}>
                <div className={styles.proyectImageContainer}>
                    <img className={styles.proyectImage} src={swasistenciavirtual} alt="SW Asistencia Virtual mockup" />
                </div>

                <div className={styles.proyectInfo}>
                    <h4 className={styles.proyectTitle}>SW Asistencia Virtual</h4>
                    <a className={styles.proyectLink} href="https://sw-asistencia-virtual.vercel.app/">Visit</a>
                </div>
            </div>

            <div className={styles.proyectContainer}>
                <div className={styles.proyectImageContainer}>
                    <img className={styles.proyectImage} src={clothingEcommerceImage} alt="Clothing e-commerce mockup" />
                </div>

                <div className={styles.proyectInfo}>
                    <h4 className={styles.proyectTitle}>Clothing e-commerce</h4>
                    <a className={styles.proyectLink} href="https://github.com/leandroheffes24/digitalhouse-ecommerce">Visit</a>
                </div>
            </div>

            <div className={styles.proyectContainer}>
                <div className={styles.proyectImageContainer}>
                    <img className={styles.proyectImage} src={generala} alt="Anotador Generala mockup" />
                </div>

                <div className={styles.proyectInfo}>
                    <h4 className={styles.proyectTitle}>Anotador Generala</h4>
                    <a className={styles.proyectLink} href="https://generala.vercel.app/">Visit</a>
                </div>
            </div>
        </section>
    )
}

export default ProyectsPage