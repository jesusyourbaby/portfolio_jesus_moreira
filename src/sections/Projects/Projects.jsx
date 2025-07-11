import React from 'react'
import styles from './ProjectsStyles.module.css';
import crud from '../../assets/CRUD.png';
import dashboard from '../../assets/dashboard.png';
import portfolio from '../../assets/portfolio.png';
import ProjectCard from '../../common/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
        <h1 className="sectionTitle">Projects</h1>
        <div className={styles.projectsContainer}>
            < ProjectCard 
                src = {crud}
                link="https://github.com/jesusyourbaby/Prueba_Tecnica_CRUD.git"
                h3="CRUD"
                p="CRUD Project Include JWT"
            />
            < ProjectCard 
                src = {dashboard}
                link="https://github.com/jesusyourbaby/Maquetacion_Dashboard.git"
                h3="Dashboard"
                p="Dashboard Degree Project"
            />
            < ProjectCard 
                src = {portfolio}
                link="https://github.com/jesusyourbaby/portfolio_jesus_moreira.git"
                h3="Portfolio"
                p="Website portfolio with React"
            />
        </div>
    </section>
  );
}

export default Projects;
