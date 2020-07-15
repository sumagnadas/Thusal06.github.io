import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'gatsby'
import Helmet from 'react-helmet'

import '../scss/styles.scss'

const ListLink = props => (
  <li>
    <Link activeClassName="active" to={props.to}>
      {props.children}
    </Link>
  </li>
)

const Navigation = () => (
  <nav className="Navigation">
    <ul className="nav-list">
      <ListLink to="/">Home</ListLink>
      <ListLink to="/projects/">Projects</ListLink>
      <ListLink to="/blog/">Blog</ListLink>
    </ul>
  </nav>
)

const Header = () => {
  return(
    <div className="Header">
      <Link className="logo-link" to="/">
        <div className="diamond" />
        <div className="name">Thusal Ranawaka</div>
      </Link>
      <Navigation />
    </div>
  );
}

const TemplateWrapper = ({ children }) => {

  return (
    <div className={children.props.className == 'front-page' ? 'homepage' : null}>
      <Helmet
        title="Thusal Ranawaka - Student"
        meta={[
          {
            name: 'description',
            content: 'Thusal Ranawaka - Google Code-in 2019 Finalist - BITS20 Winner',
          },
          {
            name: 'keywords',
            content:
              'Thusal Ranawaka, Programmer, Graphic Designer, gatsbyjs, gatsby, blog, frontend, reactjs, react, css, scss, sass',
          },
        ]}
      />
      <Header />
      <div className="content-container">{children}</div>
    </div>
  )
}

TemplateWrapper.propTypes = {
  children: PropTypes.func,
}

export default TemplateWrapper
