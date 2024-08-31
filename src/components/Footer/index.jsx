import styles from './Footer.module.css'
import whiteLogo from '../../assets/images/leandro-heffes-white-logo.png'

const Footer = () => {
    return (
        <footer>
            <img className={styles.logo} src={whiteLogo} alt="Leandro Heffes white logo" />

            <div className={styles.socialNetworksContainer}>
                <a href="https://github.com/leandroheffes24">
                    <i className={`${'fa-brands fa-github'} ${styles.socialNetworkIcon}`}></i>
                </a>

                <a href="https://www.linkedin.com/in/leandro-heffes/">
                    <i className={`${'fa-brands fa-linkedin'} ${styles.socialNetworkIcon}`}></i>
                </a>

                <a href="https://stackoverflow.com/users/23576635/leandro">
                    <i className={`${'fa-brands fa-stack-overflow'} ${styles.socialNetworkIcon}`}></i>
                </a>
            </div>

            <p className={styles.developedByText}>Desarrollado por <a className={styles.developedByLink} href="https://leandroheffesportfolio.vercel.app/">Leandro Heffes</a></p>

            <p className={styles.copyrightText}>© Leandro Heffes 2024. Todos los derechos reservados.</p>
        </footer>
    )
}

export default Footer