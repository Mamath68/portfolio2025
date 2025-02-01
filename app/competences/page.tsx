"use client";

import { Component } from "react";
import SkillCard from "@/app/competences/SkillCard";
import AOS from "aos";
import "aos/dist/aos.css";

class Competences extends Component {
    componentDidMount() {
        AOS.init({
            duration: 1000,
            easing: "ease",
            once: true,
            anchorPlacement: "top-bottom",
        });
    }

    render() {
        const skills = [
            { title: "HTML", image: "/images/html.svg" },
            { title: "CSS", image: "/images/css.svg" },
            { title: "Bootstrap", image: "/images/bootstrap.png" },
            { title: "TailwindCSS", image: "/images/tailwindcss.png" },
            { title: "JavaScript", image: "/images/js.svg" },
            { title: "ReactJS", image: "/images/react.svg" },
            { title: "NextJS", image: "/images/nextjs.png" },
            { title: "Expo", image: "/images/expo.jpeg" },
            { title: "Adonis", image: "/images/adonis.png" },
            { title: "Node JS", image: "/images/node.svg" },
            { title: "PHP", image: "/images/php.svg" },
            { title: "Symfony", image: "/images/symfony.svg" },
            { title: "Laravel", image: "/images/laravel.png" },
            { title: "SQL/MySQL", image: "/images/MySQL.svg" },
        ];

        return (
            <div>
                <div className="grid w-full mx-auto grid-cols-1 lg:grid-cols-7 gap-[2rem] items-center">
                    <div className="col-span-3" data-aos="fade-right" data-aos-anchor-placement="top-center" data-aos-delay="200">
                        <p className="heading__mini">Mes compétences</p>
                        <h1 className="heading__primary">
                            Découvrez mes <span className="text-yellow-300">Compétences</span>
                        </h1>
                        <p className="text-white text-[15px] mb-[1.5rem] opacity-70 mt-[1.5rem]">
                            Voici les langages, frameworks et technologies que je sais utiliser.
                        </p>
                    </div>
                    <div className="col-span-4">
                        <div
                            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-3 xl:grid-cols-4 gap-[1rem] items-center"
                            data-aos="fade-left" data-aos-anchor-placement="top-center" data-aos-delay="400">
                            {skills.map((skill, index) => (
                                <div key={index}>
                                    <SkillCard title={skill.title} image={skill.image} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Competences;
