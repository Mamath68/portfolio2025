"use client";

import SkillCard from "@/app/competences/SkillCard";
import {useEffect} from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Competences() {
    useEffect(() => {
        AOS.init({
            duration: 1000,
            easing: 'ease',
            once: true,
            anchorPlacement: 'top-bottom'
        })
    }, [])
    return (
        <div>
            <div className="grid w-full mx-auto grid-cols-1 lg:grid-cols-7 gap-[2rem] items-center">
                <div className="col-span-3">
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
                        <div>
                            <SkillCard
                                title="HTML"
                                image="/images/html.svg"
                            />
                        </div>
                        <div>
                            <SkillCard
                                title="CSS"
                                image="/images/css.svg"
                            />
                        </div>
                        <div>
                            <SkillCard
                                title="Bootstrap"
                                image="/images/bootstrap.png"
                            />
                        </div>
                        <div>
                            <SkillCard
                                title="TailwindCSS"
                                image="/images/tailwindcss.png"
                            />
                        </div>
                        <div>
                            <SkillCard
                                title="JavaScript"
                                image="/images/js.svg"
                            />
                        </div>
                        <div>
                            <SkillCard
                                title="ReactJS"
                                image="/images/react.svg"
                            />
                        </div>
                        <div>
                            <SkillCard
                                title="NextJS"
                                image="/images/nextjs.png"
                            />
                        </div>
                        <div>
                            <SkillCard
                                title="Expo"
                                image="/images/expo.jpeg"
                            />
                        </div>
                        <div>
                            <SkillCard
                                title="Adonis"
                                image="/images/adonis.png"
                            />
                        </div>
                        <div>
                            <SkillCard
                                title="Node JS"
                                image="/images/node.svg"
                            />
                        </div>
                        <div>
                            <SkillCard
                                title="PHP"
                                image="/images/php.svg"
                            />
                        </div>
                        <div>
                            <SkillCard
                                title="Symfony"
                                image="/images/symfony.svg"
                            />
                        </div>
                        <div>
                            <SkillCard
                                title="Laravel"
                                image="/images/laravel.png"
                            />
                        </div>
                        <div>
                            <SkillCard
                                title="SQL/MySQL"
                                image="/images/MySQL.svg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
