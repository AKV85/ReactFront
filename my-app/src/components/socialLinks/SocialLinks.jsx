import {FaGithub, FaLinkedin, FaGitlab, FaEnvelope, FaPhone} from 'react-icons/fa';
import "../../styles/SocialLinks.css"

function SocialLinks() {
    return (
        <div className="SocialLinks">
            <a href="https://github.com/AKV85"><FaGithub/></a>
            <a href="https://www.linkedin.com/in/andrej-kotov-09664a21b/"><FaLinkedin/></a>
            <a href="https://gitlab.com/AKV85"><FaGitlab/></a>
            <a href="mailto:a.kotov.laknojus@gmail.com"><FaEnvelope/></a>
            <a href="tel:+37064571501"><FaPhone/></a>
        </div>
    );
}

export default SocialLinks;
