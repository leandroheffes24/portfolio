// import styles from './Home.module.css'
import Header from '../../components/Header'
import HomeSection from '../../components/HomeSection'
import AboutMeSection from '../../components/AboutMeSection'
import WhatImDoingSection from '../../components/WhatImDoingSection'
import ProyectsSection from '../../components/ProyectsSection'
import ContactSection from '../../components/ContactSection'

const Home = () => {
    return(
        <>
            <Header/>
            <HomeSection/>
            <AboutMeSection/>
            <WhatImDoingSection/>
            <ProyectsSection/>
            <ContactSection/>
        </>
    )
}

export default Home