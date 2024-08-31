import styles from './WhatImDoingSection.module.css'

const WhatImDoingSection = () => {
    return (
        <section id='whatImDoing' className={styles.whatImDoingSection}>
            <div className={styles.titleTextContainer}>
                <h3 className={styles.title}>¿Que tareas realizo?</h3>
                <p className={styles.subTitle}>Algunas de las cosas que realizo:</p>
            </div>

            <div className={styles.worksContainer}>
                <div className={styles.workContainer}>
                    <div className={styles.workMainContainer}>
                        <i className={`${'fa-solid fa-display'} ${styles.workLogo}`}></i>
                        <h4 className={styles.workTitle}>Diseño web personalizado</h4>
                    </div>

                    <div className={styles.workDescriptionContainer}>
                        <p className={styles.workDescription}>Voy a trabajar contigo para entender tus necesidades y crear un diseño único y atractivo para tu sitio web. El diseño será totalmente personalizado para reflejar la identidad de tu marca y captar la atención de tus visitantes.</p>
                    </div>
                </div>

                <div className={styles.workContainer}>
                    <div className={styles.workMainContainer}>
                        <i className={`${'fa-solid fa-gauge-high'} ${styles.workLogo}`}></i>
                        <h4 className={styles.workTitle}>Optimización</h4>
                    </div>

                    <div className={styles.workDescriptionContainer}>
                        <p className={styles.workDescription}>Construyo tu sitio web para que sea rápido y eficaz, mejorando la satisfacción del usuario y la clasificación en los motores de búsqueda. Utilizo las mejores prácticas de optimización de motores de búsqueda (SEO) para hacer que tu sitio web sea más visible y obtenga más tráfico.</p>
                    </div>
                </div>

                <div className={styles.workContainer}>
                    <div className={styles.workMainContainer}>
                        <i className={`${'fa-solid fa-pen'} ${styles.workLogo}`}></i>
                        <h4 className={styles.workTitle}>Crear, editar y borrar</h4>
                    </div>

                    <div className={styles.workDescriptionContainer}>
                        <p className={styles.workDescription}>Desarrollo sistemas para gestionar fácilmente contenidos para el mantenimiento de tu sitio web.</p>
                    </div>
                </div>

                <div className={styles.workContainer}>
                    <div className={styles.workMainContainer}>
                        <i className={`${'fa-solid fa-rocket'} ${styles.workLogo}`}></i>
                        <h4 className={styles.workTitle}>Muchas funcionalidades</h4>
                    </div>

                    <div className={styles.workDescriptionContainer}>
                        <p className={styles.workDescription}>Se incorporan funcionalidades avanzadas dependiendo de lo que se necesite, como tienda online, integración de redes sociales, formularios, etc.</p>
                    </div>
                </div>

                <div className={styles.workContainer}>
                    <div className={styles.workMainContainer}>
                        <i className={`${'fa-solid fa-shield-halved'} ${styles.workLogo}`}></i>
                        <h4 className={styles.workTitle}>Seguridad</h4>
                    </div>

                    <div className={styles.workDescriptionContainer}>
                        <p className={styles.workDescription}>Se utilizan prácticas de cifrado para datos sensibles y seguridad total contra amenazas cibernéticas, garantizando la confidencialidad e integridad de los datos.</p>
                    </div>
                </div>

                <div className={styles.workContainer}>
                    <div className={styles.workMainContainer}>
                        <i className={`${'fa-solid fa-arrows-rotate'} ${styles.workLogo}`}></i>
                        <h4 className={styles.workTitle}>Actualización y soporte de por vida</h4>
                    </div>

                    <div className={styles.workDescriptionContainer}>
                        <p className={styles.workDescription}>Además de crear y finalizar su sitio web, brindo soporte técnico continuo, actualizaciones y mejoras para mantener su sitio web en perfectas condiciones.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhatImDoingSection