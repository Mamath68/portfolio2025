"use client";

import React, { Component } from "react";
import ProjectCard from "@/app/projects/ProjectCard";
import AOS from 'aos';
import 'aos/dist/aos.css';

class Projects extends Component {
    componentDidMount() {
        AOS.init({
            duration: 1000,
            easing: 'ease',
            once: true,
            anchorPlacement: 'top-bottom'
        });
    }

    render() {
        return (
            <div className="w-full">
                <div className="text-center">
                    <p className="heading__mini">Mes projets récents</p>
                    <h1 className="heading__primary">
                        Mes meilleurs <span className="text-yellow-300">Projets</span>
                    </h1>
                </div>
                <ProjectCard
                    title="Ma Collection de livres"
                    description="Un site en NextJs qui contient ma collection de livre."
                    code="https://github.com/Mamath68/book-collection-bootstrap"
                    demo="https://collection-mathieu-stamm.vercel.app/"
                    tech1="NextJs"
                    tech1Lien="https://nextjs.org/"
                    tech2="Bootstrap"
                    tech2Lien="https://getbootstrap.com/"
                    tech3="Bootstrap-React"
                    tech3Lien="https://react-bootstrap.github.io/"
                    image="/images/collection.png"
                />
                <ProjectCard
                    title="The Simpsons V1"
                    description="Un site static en HTML-CSS sur les Simpsons"
                    code="https://github.com/Mamath68/Simpsons-V1"
                    demo="https://simpsons-v1.netlify.app/"
                    tech1="HTML"
                    tech1Lien='https://developer.mozilla.org/fr/docs/Web/HTML'
                    tech2="CSS"
                    tech2Lien='https://developer.mozilla.org/fr/docs/Web/CSS'
                    image="/images/simpson.png"
                />
                <ProjectCard
                    title="The Simpsons V2"
                    description="Une seconde version du site sur les Simpsons"
                    code="https://github.com/Mamath68/Simpsons-V2"
                    demo="https://simpson-v2.netlify.app/"
                    tech1="HTML"
                    tech1Lien='https://developer.mozilla.org/fr/docs/Web/HTML'
                    tech2="CSS"
                    tech2Lien='https://developer.mozilla.org/fr/docs/Web/CSS'
                    image="/images/simpson.png"
                />
                <ProjectCard
                    title="Landing Page"
                    description="Un One-Page en html-css et javascript"
                    code="https://github.com/Mamath68/Landing-Page"
                    demo="https://landing-page-ms.netlify.app/"
                    tech1="HTML"
                    tech1Lien='https://developer.mozilla.org/fr/docs/Web/HTML'
                    tech2="CSS"
                    tech2Lien='https://developer.mozilla.org/fr/docs/Web/CSS'
                    tech3="JavaScript"
                    tech3Lien='https://developer.mozilla.org/fr/docs/Web/JavaScript'
                    image="/images/landingPage.jpg"
                />
                <ProjectCard
                    title="Yu-Gi-Oh! App"
                    description="Il s'agit de mon projet de fin de formation. c'est un site sur l'univers de yugioh, utilisant l'api YGOProdeck afin de récupérer les données des cartes du jeu, et d'avoir le détail total des cartes. ce projet est également un forum. Il a été codé avec un framework maison distribué par le centre de formation. "
                    code="https://github.com/Mamath68/ProjetElan2023"
                    tech1="HTML"
                    tech1Lien='https://developer.mozilla.org/fr/docs/Web/HTML'
                    tech2="CSS"
                    tech2Lien='https://developer.mozilla.org/fr/docs/Web/CSS'
                    tech3="PHP"
                    tech3Lien='https://www.php.net/manual/fr/intro-whatis.php'
                    tech4="YGOPRODeck"
                    tech4Lien='https://ygoprodeck.com/api-guide/'
                    tech5="Bootstrap"
                    tech5Lien='https://getbootstrap.com/docs/5.3/getting-started/introduction/'
                    tech6="MySQL"
                    tech6Lien='https://sql.sh/sgbd/mysql'
                    image="/images/yugioh.jpeg"
                />
                <ProjectCard
                    title="Cinema POO"
                    description="Une Application fait avec PHP présentant une liste de film, leurs acteurs et realisateurs, ainsi que les rôles joué par chaque acteurs. mais pas que, vous trouverez également chaque films(ou presque) joué par chaques acteurs, leurs informations personnelles. Il en sera de même pour chaque réalisateurs, vous trouverez les films qu'ils ont réalisé. Il sera également possible d'ajouter un nouveau film, de lui attitrer un acteurs et un realisateur.
                    De même que pour le projet Yu-Gi-Oh!, il est codé en framework maison."
                    code="https://github.com/Mamath68/Cinema_POO/tree/version-Framework"
                    tech1="HTML"
                    tech1Lien='https://developer.mozilla.org/fr/docs/Web/HTML'
                    tech2="CSS"
                    tech2Lien='https://developer.mozilla.org/fr/docs/Web/CSS'
                    tech3="Bootstrap"
                    tech3Lien='https://getbootstrap.com/docs/5.3/getting-started/introduction/'
                    tech4="PHP"
                    tech4Lien='https://www.php.net/manual/fr/intro-whatis.php'
                    tech5="MySQL"
                    tech5Lien="https://sql.sh/sgbd/mysql"
                    image="/images/cinema.jpg"
                />
                <ProjectCard
                    title="DOM JS App"
                    description="Une Application en HTML-CSS et Javascript pour travailler le DOM en Javascript. il s'agit d'un jeu de cub, couplé a un chronomètre, si vous cliquez sur le cub 1, le chronometre demarre, mais uniquement sur le cub 1, et si vous arrivez jusqu'a la fin, c'est à dire 10, le chronometre s'arrete. un jeu simple et interressant."
                    code="https://github.com/Mamath68/D.O.M_JS"
                    demo="https://d-o-m-js.netlify.app/"
                    tech1="HTML"
                    tech1Lien='https://developer.mozilla.org/fr/docs/Web/HTML'
                    tech2="CSS"
                    tech2Lien='https://developer.mozilla.org/fr/docs/Web/CSS'
                    tech3="JavaScript"
                    tech3Lien='https://developer.mozilla.org/fr/docs/Web/JavaScript'
                    tech4="Bootstrap"
                    tech4Lien='https://getbootstrap.com/docs/5.3/getting-started/introduction/'
                    image="/images/domjs.jpg"
                />
                <ProjectCard
                    title="Première Appli PHP"
                    description="C'est une base de E-commerce fait en php."
                    code="https://github.com/Mamath68/Appli_PHP"
                    tech1="HTML"
                    tech1Lien='https://developer.mozilla.org/fr/docs/Web/HTML'
                    tech2="CSS"
                    tech2Lien='https://developer.mozilla.org/fr/docs/Web/CSS'
                    tech3="PHP"
                    tech4="Bootstrap"
                    tech4Lien='https://getbootstrap.com/docs/5.3/getting-started/introduction/'
                    image="/images/appliphp.jpeg"
                />
            </div>
        );
    }
}

export default Projects;
