import { useState, useEffect } from 'react'
import styles from './Header.module.css'
import Navbar from './components/Navbar'

const Header = () => {

    const [scrolling, setScrolling] = useState(false)
    console.log(scrolling);

    useEffect(() => {
        const handleScroll = () => {
            if(window.scrollY > 0){
                setScrolling(true)
            } else {
                setScrolling(false)
            }
        }

        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])

    return (
        <header className={scrolling === true ? styles.scrolled : ''}>
            <Navbar scrolled={scrolling}/>
        </header>
    )
}

export default Header