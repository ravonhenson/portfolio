//import React from 'react';
import { TypeAnimation } from 'react-type-animation';

import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";

import '../index.css';

function TypingEffect() {
    return (
        <TypeAnimation
        sequence={[
            'Software Engineer',
            1000,
            'Graphics Programmer',
            1000,
            'Computer Science at Virginia Tech',
            1000,
        ]}
        wrapper="span"
        speed={50}
        style={{ fontSize: '2em', display: 'inline-block' }}
        repeat={Infinity}
        />
    );
}

function About() {
    return (
        <>
            <h1>Ravon Henson</h1>
            <TypingEffect />
            <p>
                I'm a computer science student looking to specialize in backend engineering.
                Currently I'm looking for backend engineering internships to learn as much as I can about the field.
                I love to build shaders and study mathematics in my free time.
            </p>

            <div className="buttonWrapper">
                <a href="https://www.github.com/ravonhenson" target="_blank">
                    <FaGithubSquare size={50}/>
                </a>
                <a href="https://www.linkedin.com/in/ravonhenson" target="_blank">
                    <FaLinkedin size={50}/>
                </a>
                <a href="mailto:ravonhenson@gmail.com">
                    <MdEmail size={50}/>
                </a>
            </div>
        </>
    )
}

export default About;