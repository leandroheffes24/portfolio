import styles from './Navbar.module.css'
import whiteLogo from '../../../../assets/images/leandro-heffes-white-logo.png'
import blackLogo from '../../../../assets/images/leandro-heffes-black-logo.png'
import { useRef, useState } from 'react'

const Navbar = ({scrolled}) => {
    const [showNavbarList, setShowNavbarList] = useState(false)
    const [navbarMenuIconClass, setNavbarMenuIconClass] = useState('fa-solid fa-bars')
    const navbarList = useRef()

    const handleShowNavbarList = () => {
        setShowNavbarList(!showNavbarList)
        setNavbarMenuIconClass(navbarMenuIconClass === 'fa-solid fa-bars' ? 'fa-solid fa-xmark' : 'fa-solid fa-bars')
    }

    return (
        <nav>
            <div className={styles.logoContainer}>
                <img className={styles.logo} src={scrolled === true ? blackLogo : whiteLogo} alt="Leandro Heffes white logo" />
            </div>

            <div className={styles.openNavbarMenuIconContainer}>
                <i onClick={handleShowNavbarList} className={scrolled === true ? `${navbarMenuIconClass} ${styles.scrolled} ${styles.openNavbarMenuIcon}` : `${navbarMenuIconClass} ${styles.openNavbarMenuIcon}`}></i>
            </div>

            {showNavbarList && (
                <ul ref={navbarList} className={styles.navbarList}>
                    <li><a className={scrolled === true ? styles.scrolledItem : ''} href="/#home">Home</a></li>
                    <li><a className={scrolled === true ? styles.scrolledItem : ''} href="/#aboutMe">About me</a></li>
                    <li><a className={scrolled === true ? styles.scrolledItem : ''} href="/#whatImDoing">What I'm doing</a></li>
                    <li><a className={scrolled === true ? styles.scrolledItem : ''} href="/#proyects">Proyects</a></li>
                    <li><a className={scrolled === true ? styles.scrolledItem : ''} href="/#contact">Contact</a></li>
                </ul>
            )}

            <ul className={styles.desktopNavbarList}>
                <li><a className={scrolled === true ? `${styles.desktopNavbarLink} ${styles.scrolledItemDesktop}` : styles.desktopNavbarLink} href="/#home">Home</a></li>
                <li><a className={scrolled === true ? `${styles.desktopNavbarLink} ${styles.scrolledItemDesktop}` : styles.desktopNavbarLink} href="/#aboutMe">About me</a></li>
                <li><a className={scrolled === true ? `${styles.desktopNavbarLink} ${styles.scrolledItemDesktop}` : styles.desktopNavbarLink} href="/#whatImDoing">What I'm doing</a></li>
                <li><a className={scrolled === true ? `${styles.desktopNavbarLink} ${styles.scrolledItemDesktop}` : styles.desktopNavbarLink} href="/#proyects">Proyects</a></li>
                <li><a className={scrolled === true ? `${styles.desktopNavbarLink} ${styles.scrolledItemDesktop}` : styles.desktopNavbarLink} href="/#contact">Contact</a></li>
            </ul>
        </nav>
    )
}

export default Navbar 