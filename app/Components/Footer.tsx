"use client";

import {Component} from "react";

class Footer extends Component {
    state = {
        year: new Date().getFullYear(),
    };

    render() {
        return (
            <div className="py-6">
                <div className="mt-6 w-4/5 mx-auto text-center text-white opacity-70">
                    &#169; Copyright Mathieu Stamm {this.state.year}
                </div>
            </div>
        );
    }
}

export default Footer;
