"use client";

import { useState, useEffect } from "react";

const Footer = () => {
    const [year, setYear] = useState(new Date().getFullYear());

    useEffect(() => {
        const currentYear = new Date().getFullYear();
        setYear(currentYear);
    }, []);

    return (
        <div className="py-6">
            <div className="mt-6 w-4/5 mx-auto text-center text-white opacity-70">
                &#169; Copyright Mathieu Stamm {year}
            </div>
        </div>
    );
};

export default Footer;
