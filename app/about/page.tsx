"use client";
import React, { Component } from "react";
import {
    CalendarIcon,
    MapIcon,
    EnvelopeIcon,
    CheckIcon,
    PhoneIcon
} from "@heroicons/react/24/outline";

// Interface des props pour le calcul de l'âge
interface MyAgeProps {
    dateOfBirth: string;
}

// Composant pour afficher l'âge calculé
class MyAge extends Component<MyAgeProps> {
    calculateAge(dateOfBirth: string): number {
        const [day, month, year] = dateOfBirth.split("/");
        const birthDate = new Date(`${year}-${month}-${day}`);
        const today = new Date();

        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }
        return age;
    }

    render() {
        const { dateOfBirth } = this.props;
        const age = this.calculateAge(dateOfBirth);

        return <p className="text-white text-[18px]">{dateOfBirth} ({age} ans)</p>;
    }
}

// Interface du state pour About (si besoin d'ajouter un état plus tard)
interface AboutState {
    dateOfBirth: string;
}

// Composant principal About
class About extends Component<{}, AboutState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            dateOfBirth: "12/02/1998",
        };
    }

    render() {
        const { dateOfBirth } = this.state;

        return (
            <div className="w-full">
                <div className="w-full py-8 mx-auto grid items-center grid-cols-1 lg:grid-cols-2 gap-[2rem]">
                    <div>
                        <p className="heading__mini">À Propos de Moi</p>
                        <h1 className="heading__primary">
                            Jeune <span className="text-yellow-400">Développeur</span> Web
                        </h1>
                        <div className="space-y-3 mt-[2rem]">
                            <div className="flex items-end space-x-4">
                                <CalendarIcon className="w-[2rem] h-[2rem] text-yellow-400"/>
                                <MyAge dateOfBirth={dateOfBirth}/>
                            </div>
                            <div data-aos-delay="200" className="flex items-end space-x-4">
                                <MapIcon className="w-[2rem] h-[2rem] text-yellow-400"/>
                                <p className="text-white text-[18px]">3 rue Maurice Ravel 68200 Mulhouse</p>
                            </div>
                            <div className="flex items-end space-x-4">
                                <EnvelopeIcon className="w-[2rem] h-[2rem] text-yellow-400"/>
                                <p className="text-white text-[18px]">
                                    <a href="mailto:mathieu.stamm@gmail.com">mathieu.stamm@gmail.com</a>
                                </p>
                            </div>
                            <div className="flex items-end space-x-4">
                                <PhoneIcon className="w-[2rem] h-[2rem] text-yellow-400"/>
                                <p className="text-white text-[18px]">
                                    <a href="tel:+33669142804">+33 6 69 14 28 04</a>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full py-8 mx-auto">
                        <h2 className="heading__secondary">Expérience Professionnelle</h2>
                        <div className="space-y-3 mt-[2rem]">
                            <div className="flex items-start space-x-4">
                                <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400"/>
                                <div>
                                    <p className="text-white text-[18px] font-bold">Projet De fin de formation</p>
                                    <p className="text-white text-[16px]">Avril 2023 - Juillet 2023</p>
                                    <p className="text-white text-[16px]">
                                        Projet de fin de formation fait à élan formation en PHP avec une API externe.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="w-full py-8 mx-auto">
                            <h2 className="heading__secondary">Formation</h2>
                            <div className="space-y-3 mt-[2rem]">
                                {this.renderEducation(
                                    "Licence Professionnelle - Développement d'application Orienté Objet",
                                    "SERFA - Mulhouse",
                                    "Septembre 2024 - Juillet 2025"
                                )}
                                {this.renderEducation(
                                    "Titre Professionnel de niveau 5 - DWWM (Développeur Web et Web-Mobile)",
                                    "Elan Formation - Mulhouse",
                                    "Février 2023 - Juillet 2023"
                                )}
                                {this.renderEducation(
                                    "Préparation au métier de développeur informatique",
                                    "SERFA - Mulhouse",
                                    "Mars 2022 - Novembre 2022"
                                )}
                                {this.renderEducation(
                                    "CAPA Métiers de l'agriculture - Option Production Horticole",
                                    "LEGTA Lucien Quelet (Valdoie, 90)",
                                    "Septembre 2017 - Juillet 2019"
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    private renderEducation(title: string, school: string, dates: string) {
        return (
            <div className="flex items-start space-x-4">
                <CheckIcon className="w-[2rem] h-[2rem] text-yellow-400"/>
                <div>
                    <p className="text-white text-lg font-bold">{title}</p>
                    <p className="text-white text-[17px] font-semibold">{school}</p>
                    <p className="text-white text-[16px]">{dates}</p>
                </div>
            </div>
        );
    }
}

export default About;
