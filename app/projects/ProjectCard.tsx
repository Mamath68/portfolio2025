"use client";

import React, { Component } from 'react';
import Image from "next/image";

interface Props {
    title: string;
    description: string;
    code: string;
    demo?: string;
    tech1: string;
    tech1Lien?: string;
    tech2: string;
    tech2Lien?: string;
    tech3?: string;
    tech3Lien?: string;
    tech4?: string;
    tech4Lien?: string;
    tech5?: string;
    tech5Lien?: string;
    tech6?: string;
    tech6Lien?: string;
    image: string;
}

class ProjectCard extends Component<Props> {
    render() {
        const {
            title,
            description,
            code,
            demo,
            tech1,
            tech1Lien,
            tech2,
            tech2Lien,
            tech3,
            tech3Lien,
            tech4,
            tech4Lien,
            tech5,
            tech5Lien,
            tech6,
            tech6Lien,
            image
        } = this.props;

        return (
            <div className="grid mx-auto pt-[5rem] grid-cols-1 lg:grid-cols-2 gap-10 items-center">
                <div
                    className="p-4 rounded-xl relative cursor-pointer hover:rotate-6 transform transition-all duration-200 bg-gray-800 shadow-md">
                    <Image
                        src={image}
                        alt={title}
                        title={title}
                        width={500}
                        height={500}
                        className="w-full h-[300px] object-cover rounded-xl mx-auto shadow-md"
                    />
                </div>

                <div>
                    <h1 className="text-[25px] text-white">{title}</h1>
                    <p className="text-white opacity-65 text-[15px] mt-[1rem]">
                        {description}
                    </p>
                    <div className="mt-[1.3rem] grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-3 gap-[2rem]">
                        {[
                            {text: tech1, link: tech1Lien, color: "bg-blue-700"},
                            {text: tech2, link: tech2Lien, color: "bg-green-600"},
                            {text: tech3, link: tech3Lien, color: "bg-white text-black"},
                            {text: tech4, link: tech4Lien, color: "bg-yellow-800"},
                            {text: tech5, link: tech5Lien, color: "bg-yellow-500"},
                            {text: tech6, link: tech6Lien, color: "bg-red-800"}
                        ].map((tech, index) => (
                            tech.text && (
                                <a
                                    key={index}
                                    href={tech.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={`px-6 py-3 ${tech.color} rounded-lg text-center min-w-[8rem] flex justify-center items-center`}
                                >
                                    {tech.text}
                                </a>
                            )
                        ))}
                    </div>
                    <div className="mt-[1.3rem] grid grid-cols-2 sm:grid-cols-2 xl:grid-cols-2 gap-[2rem]">
                        <h1 className="px-6 py-3 bg-green-600 text-white rounded-lg text-center">
                            <a href={code} target="_blank" rel="noopener noreferrer">Code</a>
                        </h1>
                        {demo &&
                            <h1 className="px-6 py-3 bg-white text-black rounded-lg text-center">
                                <a href={demo} target="_blank" rel="noopener noreferrer">Demo</a>
                            </h1>
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default ProjectCard;
