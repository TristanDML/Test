import styles from "../styles/Footer.module.scss"


const Footer = (locale,locales) => {
  
  return (
    <footer className={styles.footerwrapper}>
      <div className={styles.footer}>

        <div className={styles.logo}>
          <img
            src="https://a.storyblok.com/f/143491/960x578/4369959509/schoolhat.png"
            alt="Schoolhat Logo"
            className=""
          />
        </div>
        
        <p>Une nouvelle manière de réviser</p>
      </div>
    </footer>



  )
}

export default Footer
