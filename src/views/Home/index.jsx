// import styles from './Home.module.css'
import Header from '../../components/Header'
import HomeSection from '../../components/HomeSection'
import AboutMeSection from '../../components/AboutMeSection'
import WhatImDoingSection from '../../components/WhatImDoingSection'

const Home = () => {
    return(
        <>
            <Header/>
            <HomeSection/>
            <AboutMeSection/>
            <WhatImDoingSection/>
        </>
    )
}

export default Home