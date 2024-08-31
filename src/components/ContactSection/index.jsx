import styles from './ContactSection.module.css'

const ContactSection = () => {
    return (
        <section id='contact' className={styles.contactSection}>
            <div className={styles.contactInfoContainer}>
                <h3 className={styles.title}>Información de contacto</h3>

                <div className={styles.contactInfoItemsContainer}>
                    <div className={styles.contactInfoItem}>
                        <i class="fa-solid fa-location-dot"></i>
                        <p>Bahía Blanca, Buenos Aires, Argentina</p>
                    </div>

                    <div className={styles.contactInfoItem}>
                        <i class="fa-solid fa-phone"></i>
                        <p>+54 9 11-6745-7009</p>
                    </div>

                    <div className={styles.contactInfoItem}>
                        <i class="fa-solid fa-envelope"></i>
                        <p>leandroheffes2408@gmail.com</p>
                    </div>
                </div>
            </div>

            <div className={styles.contactFormContainer}>
                <h3 className={styles.title}>Formulario de contacto</h3>

                <form className={styles.contactForm} action="https://formspree.io/f/xoqgjpvn" method="POST">
                    <label htmlFor="name">
                        <input className={styles.input} type="text" name='name' id='name' placeholder='Nombre' maxLength={30} />
                    </label>

                    <label htmlFor="email">
                        <input className={styles.input} type="email" name='email' id='email' placeholder='E-mail' maxLength={50} />
                    </label>

                    <textarea className={styles.input} name="message" id="message" cols="30" rows="8" placeholder='Tu mensaje' maxLength={300}></textarea>

                    <button className={styles.submitButton} type='submit'>Enviar</button>
                </form>
            </div>
        </section>
    )
}

export default ContactSection