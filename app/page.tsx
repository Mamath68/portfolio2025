"use client";

import React, { Component } from "react";
import Link from "next/link";
import Image from "next/image";
import AOS from 'aos';
import 'aos/dist/aos.css';

class Home extends Component {
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
            <div>
                <div className="flex justify-center pt-10 ">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center justify-between">
                        <div>
                            <h1 data-aos="fade-right" className="text-[#c4cfde] mb-[1.3rem]">Bonjour et bienvenue sur mon nouveau Portfolio</h1>
                            <div data-aos="fade-left" data-aos-delay="400">
                                <h1 className="text-center lg:text-start xl:text-[45px] lg:text-[40px] sm:text-[30px] text-[20px] font-semibold leading-[2.6rem] text-white">
                                    Je suis <span className='text-yellow-300'>Mathieu Stamm</span>
                                </h1>
                            </div>
                            <p data-aos="fade-up" data-aos-delay="800" className="mt-[1.2rem] text-[15px] md:text-[17px] text-[#c4cfde]">Jeune Développeur
                                fraichement Diplômé, je suis à la recherche d&apos;un premier emploi afin de faire mes
                                preuves et
                                gagner de l&apos;expérience. Titulaire d&apos;un titre de niveau 5 DWWM(Développeur web
                                et
                                web-mobile), je suis motivé, mobile et près à me mettre au travail.</p>
                            <div className="mt-[2rem] flex items-center justify-center space-x-6">
                                <button data-aos="zoom-in" data-aos-delay="500" type="button"
                                        className="before:ease relative h-12 w-40 overflow-hidden bg-red-500 text-white font-semibold shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-blue-600 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180">
                                    <span className="relative z-10"> <Link href="/contact">Contact Me</Link> </span>
                                </button>
                                <button data-aos="zoom-out" data-aos-delay="600" type="button"
                                        className="before:ease relative h-12 w-40 overflow-hidden bg-orange-600 text-white font-semibold shadow-2xl before:absolute before:left-0 before:-ml-2 before:h-48 before:w-48 before:origin-top-right before:-translate-x-full before:translate-y-12 before:-rotate-90 before:bg-green-700 before:transition-all before:duration-300 hover:text-white hover:shadow-black hover:before:-rotate-180">
                                    <span className="relative z-10">
                                        <a href="/cv.pdf" download="cv_mathieu_stamm.pdf">Download My CV</a>
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div data-aos="fade-left" data-aos-delay="2000" className="hidden md:block">
                            <Image src="/images/hero.jpg" title="Mathieu Stamm" alt="Mathieu Stamm" width={600} height={400}
                                   className="object-contain rounded"/>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Home;
