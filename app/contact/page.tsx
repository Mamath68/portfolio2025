"use client";

import {Component} from "react";
import { EnvelopeIcon, PhoneIcon } from "@heroicons/react/24/outline";

class Contact extends Component {
    render() {
        return (
            <div className='pt-9'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center mx-auto">
                    <div>
                        <p className="heading__mini">Contactez moi</p>
                        <h1 className="heading__primary">
                            Commençons notre <span className="text-yellow-400">Légendaire</span> Relation
                        </h1>
                        <p className="text-[15px] text-white mt-[1rem] opacity-75">
                            Vous pouvez utiliser ce formulaire pour me contacter, ou me joindre par téléphone ou email.
                        </p>
                        <h1 className="flex items-center space-x-2 mb-[2rem] mt-[2rem] text-[20px] text-yellow-300 underline font-bold">
                            <PhoneIcon className="w-[1rem] h-[1rem]" />
                            <a href="tel:+33669142804">+33 6 69 14 28 04</a>
                        </h1>
                        <h1 className="flex items-center space-x-2 mb-[2rem] text-[20px] text-yellow-300 underline font-bold">
                            <EnvelopeIcon className="w-[1rem] h-[1rem]" />
                            <a href="mailto:mathieu.stamm@gmail.com">mathieu.stamm@gmail.com</a>
                        </h1>
                    </div>
                    <form action="https://formspree.io/f/mjkgrvle" method="post">
                        <div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-[1rem] items-center">
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    placeholder="Name"
                                    className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
                                />
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    className="py-[0.7rem] outline-none text-white bg-gray-800 rounded-md px-4"
                                />
                            </div>
                            <input
                                type="text"
                                name="subject"
                                id="subject"
                                placeholder="Subject"
                                className="py-[0.7rem] mt-[1.5rem] mb-[1.5rem] w-full outline-none text-white bg-gray-800 rounded-md px-4"
                            />
                            <textarea
                                name="message"
                                id="message"
                                placeholder="Votre Message"
                                className="py-[0.7rem] mb-[1.5rem] w-full outline-none text-white bg-gray-800 rounded-md px-4"
                                cols={50}
                                rows={4}
                            ></textarea>
                            <button
                                type="submit"
                                className="py-[0.7rem] mt-[1.5rem] mb-[1.5rem] w-full outline-none text-white bg-blue-700 hover:bg-blue-800 rounded-md px-4"
                            >
                                Envoyer
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Contact;
