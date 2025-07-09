import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import themeIcon from '../../assets/sun.svg';
import twitterIcon from '../../assets/twitter-light.svg';
import githubIcon from '../../assets/github-light.svg';
import linkedinIcon from '../../assets/linkedin-light.svg';
import CV from '../../assets/Moreira_Jesus_CV.pdf';

function Hero() {
  return (
    <section id="hero" className={styles.container}>
        <div className={styles.colorModeContainer}>
            <img 
             className={styles.hero}
             src={heroImg} 
             alt="Profile Picture of Jesus Moreira" 
             />
             <img 
             className={styles.colorMode}
             src={themeIcon} 
             alt="Color mode icon" 
             />
        </div>
        <div className={styles.info}>
            <h1>
                Jesus 
                <br />
                Moreira
            </h1>
            <h2>Ing. En Sistemas De
                Informacion
            </h2>
            <span>
                <a href="https://x.com/ElTioYisus9" target="_blank">
                    <img src={twitterIcon} alt="Twitter icon" />
                </a>
                <a href="https://github.com/jesusyourbaby" target="_blank">
                    <img src={githubIcon} alt="Github icon" />
                </a>
                <a href="https://www.linkedin.com/in/jesus-moreira-loor-4734671b8/" target="_blank">
                    <img src={linkedinIcon} alt="Linkedin icon" />
                </a>
            </span>
            <p>
                Ingeniero en Sistemas con experiencia en desarrollo de software, aportando en proyectos reales y buscando nuevos retos profesionales.
            </p>
            <a href={CV} download>
                <button className="hover">
                    Resume
                </button>
            </a>
        </div>
    </section>
  );
}

export default Hero;
