import styles from './Navbar.module.css'

const Navbar = () => {
    return (
        <nav>
            <div className={styles.titleContainer}>
                <h1><a className={styles.titleLink} href="/">Leandro Heffes</a></h1>
            </div>

            <div className={styles.openNavbarMenuIconContainer}>
                <i className="fa-regular fa-bars"></i>
            </div>
        </nav>
    )
}

export default Navbar 