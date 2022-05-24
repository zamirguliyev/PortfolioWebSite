import './index.scss'
import LogoS from '../../assets/images/z3.jpg'
import LogoSubtitle from '../../assets/images/zamir.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { Link, NavLink } from 'react-router-dom'

const Sidebar = () => {
    return (
      <div className="nav-bar">
        <Link className="logo" to="/">
          <img src={LogoS} alt="Logo" />
          <img className="sub-logo" src={LogoSubtitle} alt="Zamir" />
          </Link>
      <nav>
        <NavLink exact="true" activeclassname="active" to="/">
          <FontAwesomeIcon icon={faHome} color="#4d4d4e" />
        </NavLink>
        <NavLink activeclassname="active" className="about-link" to="/about">
          <FontAwesomeIcon icon={faUser} color="#4d4d4e" />
        </NavLink>
        <NavLink
          activeclassname="active"
          className="contact-link"
          to="/contact"
        >
          <FontAwesomeIcon icon={faEnvelope} color="#4d4d4e" />
        </NavLink>
      </nav>
        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href="https://www.linkedin.com/in/zamirguliyev/">
                    <FontAwesomeIcon icon={faLinkedin} color= "#4d4d4e"/>
                </a>
            </li>

            <li>
                <a target="_blank" rel='noreferrer' href="https://github.com/zamirguliyev">
                    <FontAwesomeIcon icon={faGithub} color= "#4d4d4e"/>
                </a>
            </li>

            <li>
                <a target="_blank" rel='noreferrer' href="https://www.instagram.com/the.zamir/">
                    <FontAwesomeIcon icon={faInstagram} color= "#4d4d4e"/>
                </a>
            </li>

            <li>
                <a target="_blank" rel='noreferrer' href="https://www.facebook.com/zamir2003">
                    <FontAwesomeIcon icon={faFacebook} color= "#4d4d4e"/>
                </a>
            </li>

        </ul>
    </div>
  )
}

export default Sidebar
