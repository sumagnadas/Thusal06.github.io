import React from 'react'

import {
  FaGithub,
  FaCodepen,
  FaInstagram,
  FaLinkedin,
  FaEnvelope,
} from 'react-icons/fa'

const Socials = () => {
  const github = 'https://github.com/Thusal06'
  const linkedin = 'https://www.linkedin.com/in/thusal-ranawaka-773aa1189/'
  const codepen = 'https://codepen.io/thusal06'
  const instagram = 'https://instagram.com/thusalrana'
  const mailto = 'mailto:thusalrana@gmail.com'

  return (
    <div className="Socials">
      <ul className="social-icons">
        <li>
          <a href={github} target="_blank">
            <FaGithub />
          </a>
        </li>
        <li>
          <a href={codepen} target="_blank">
            <FaCodepen />
          </a>
        </li>
        <li>
          <a href={instagram} target="_blank">
            <FaInstagram />
          </a>
        </li>
        <li>
          <a href={linkedin} target="_blank">
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a href={mailto}>
            <FaEnvelope />
          </a>
        </li>
      </ul>
    </div>
  )
}

export default Socials
