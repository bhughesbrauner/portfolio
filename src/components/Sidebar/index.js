import { Link, NavLink } from 'react-router-dom';
import './index.scss';
import LogoB from '../../assets/images/logo-b.png';
import LogoBSubtitle from '../../assets/images/logob_sub.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faHome, faUser } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';

const Sidebar = () => {
    return (
        <div className='nav-bar'>
            <Link className='logo' to='/'>
                <img src={LogoB} alt="logo" />
                <img className="sub-logo" src={LogoBSubtitle} alt="logo subtitle" />

            </Link>
            <nav>
                <NavLink exact="true" activeclassname="active" to="/">
                    <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="about-link" to="/about">
                    <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
                </NavLink>
                <NavLink exact="true" activeclassname="active" className="contact-link" to="/contact">
                    <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
                </NavLink>
            </nav>
            <ul>
                <li>
                    <a target="_blank" rel='noreferer' href='https://www.linkedin.com/in/brooke-hughes-brauner-aab368b2/'>
                        <FontAwesomeIcon icon={faLinkedin} color="4d4d4e" />

                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferer' href='https://github.com/bhughesbrauner'>
                        <FontAwesomeIcon icon={faGithub} color="4d4d4e" />

                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferer' href='https://www.youtube.com/channel/UC9_MJF15bkCAaLGK6l_qwfw'>
                        <FontAwesomeIcon icon={faYoutube} color="4d4d4e" />

                    </a>
                </li>
                <li>
                    <a target="_blank" rel='noreferer' href='https://www.instagram.com/brooke.hb/'>
                        <FontAwesomeIcon icon={faInstagram} color="4d4d4e" />

                    </a>
                </li>
            </ul>
        </div>
    )
}

export default Sidebar;