import { FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaGithubSquare } from "react-icons/fa";

import '../index.css';

function About() {
    return (
        <>
            <h1>About</h1>
            <div className="buttonWrapper">
                <a href="https://www.github.com/ravonhenson" target="_blank">
                    <FaGithubSquare />
                </a>

                <a href="https://www.linkedin.com/in/ravonhenson" target="_blank">
                    <FaLinkedin />
                </a>

                <a href="mailto:ravonhenson@gmail.com">
                    <MdEmail />
                </a>
            </div>
        </>
    )
}

export default About;