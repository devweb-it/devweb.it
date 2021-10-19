import * as React from 'react';
import { useIntl } from 'gatsby-plugin-intl';
import { Container, Dropdown, Nav, Navbar } from 'react-bootstrap';
import PropTypes from 'prop-types';

export const Header = ({ languages }) => {
  const intl = useIntl();
  return (
    <>
      <Navbar collapseOnSelect expand="lg" bg="ligth" variant="light" sticky="top">
        <Container>
          <Navbar.Brand href="#home">Boilerplate</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link
                href={intl.formatMessage({
                  id: 'common.internalLinks.home.linkTo',
                })}
                aria-current="page"
              >
                {intl.formatMessage({ id: 'common.internalLinks.home.label' })}
              </Nav.Link>
              <Nav.Link
                href={intl.formatMessage({
                  id: 'common.internalLinks.features.linkTo',
                })}
              >
                {intl.formatMessage({
                  id: 'common.internalLinks.features.label',
                })}
              </Nav.Link>
              <Nav.Link
                href={intl.formatMessage({
                  id: 'common.internalLinks.about.linkTo',
                })}
              >
                {intl.formatMessage({ id: 'common.internalLinks.about.label' })}
              </Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link
                href={intl.formatMessage({
                  id: 'common.internalLinks.login.linkTo',
                })}
              >
                {intl.formatMessage({ id: 'common.internalLinks.login.label' })}
              </Nav.Link>
              <Nav.Link
                href={intl.formatMessage({
                  id: 'common.internalLinks.signup.linkTo',
                })}
              >
                {intl.formatMessage({
                  id: 'common.internalLinks.signup.label',
                })}
              </Nav.Link>
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
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
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
