import * as React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import { Dropdown } from 'react-bootstrap';
// import { Nav } from 'react-bootstrap';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';

export const Header = ({ languages }) => {
  const intl = useIntl();
  return (
    <>
      {/* <Nav
      activeKey="/home"
      className="py-2 bg-light border-bottom"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="#features">Features</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="#pricing">Pricing</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="#about">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="#faqs" disabled>
          FAQs
        </Nav.Link>
      </Nav.Item>
    </Nav>
    <Nav
      activeKey="/home"
      className="py-2 bg-light border-bottom"
      onSelect={(selectedKey) => alert(`selected ${selectedKey}`)}
    >
      <Nav.Item>
        <Nav.Link eventKey="#login">Login</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="#signup">Signup</Nav.Link>
      </Nav.Item>
    </Nav> */}
      <nav className="py-2 bg-light border-bottom">
        <div className="container d-flex flex-wrap">
          <ul className="nav me-auto">
            <li className="nav-item">
              <Link
                to={intl.formatMessage({ id: 'common.internalLinks.home.linkTo' })}
                className="nav-link link-dark px-2 active"
                aria-current="page"
              >
                {intl.formatMessage({ id: 'common.internalLinks.home.label' })}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={intl.formatMessage({ id: 'common.internalLinks.features.linkTo' })}
                className="nav-link link-dark px-2"
              >
                {intl.formatMessage({ id: 'common.internalLinks.features.label' })}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={intl.formatMessage({ id: 'common.internalLinks.about.linkTo' })}
                className="nav-link link-dark px-2"
              >
                {intl.formatMessage({ id: 'common.internalLinks.about.label' })}
              </Link>
            </li>
          </ul>
          <ul className="nav">
            <li className="nav-item">
              <Link
                to={intl.formatMessage({ id: 'common.internalLinks.login.linkTo' })}
                className="nav-link link-dark px-2"
              >
                {intl.formatMessage({ id: 'common.internalLinks.login.label' })}
              </Link>
            </li>
            <li className="nav-item">
              <Link
                to={intl.formatMessage({ id: 'common.internalLinks.signup.linkTo' })}
                className="nav-link link-dark px-2"
              >
                {intl.formatMessage({ id: 'common.internalLinks.signup.label' })}
              </Link>
            </li>
          </ul>
          <Dropdown>
            <Dropdown.Toggle id="dropdown-basic">{intl.locale.toUpperCase()}</Dropdown.Toggle>

            <Dropdown.Menu>
              {languages.map((x) => (
                <Dropdown.Item key={x} href={`/${x}`}>
                  {x.toUpperCase()}
                </Dropdown.Item>
              ))}
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </nav>
      <header className="py-3 mb-4 border-bottom">
        <div className="container d-flex flex-wrap justify-content-center">
          <a href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
            <svg className="bi me-2" width="40" height="32">
              <use xlinkHref="#bootstrap"></use>
            </svg>
            <span className="fs-4">{intl.formatMessage({ id: 'siteMetadata.title' })}</span>
          </a>
          <form className="col-12 col-lg-auto mb-3 mb-lg-0">
            <input
              type="search"
              className="form-control"
              placeholder={intl.formatMessage({ id: 'header.menu.search' })}
              aria-label="Search"
            />
          </form>
        </div>
      </header>
    </>
  );
};

Header.propTypes = {
  languages: PropTypes.array.isRequired,
};
