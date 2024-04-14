import styles from './Navbar.module.css'
import whiteLogo from '../../../../assets/images/leandro-heffes-white-logo.png'
import { useRef, useState } from 'react'

const Navbar = () => {
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
                <img className={styles.logo} src={whiteLogo} alt="Leandro Heffes white logo" />
            </div>

            <div className={styles.openNavbarMenuIconContainer}>
                <i onClick={handleShowNavbarList} style={{color: "rgb(250, 250, 250)", fontSize: "1.5rem"}} className={navbarMenuIconClass}></i>
            </div>

            {showNavbarList && (
                <ul ref={navbarList} className={styles.navbarList}>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About me</a></li>
                    <li><a href="/">What I'm doing</a></li>
                    <li><a href="/">Proyects</a></li>
                    <li><a href="/">Contact</a></li>
                </ul>
            )}
        </nav>
    )
}

export default Navbar 