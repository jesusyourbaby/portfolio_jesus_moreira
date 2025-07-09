import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg';
import twitterDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/Moreira_Jesus_CV.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
  const githubIcon = theme === 'light' ? githubLight : githubDark;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

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
             onClick={toggleTheme} 
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
            <p className={styles.description}>
                Ingeniero en Sistemas apasionado por desarrollar aplicaciones web modernas y soluciones de software eficientes.
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
