import * as React from 'react';
import { useIntl, Link, FormattedMessage } from 'gatsby-plugin-intl';
// import { Nav } from 'react-bootstrap';

export const Header = () => {
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
              <a href="#" className="nav-link link-dark px-2 active" aria-current="page">
                Home
                <br />
                {intl.formatMessage({ id: 'test' })}
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link link-dark px-2">
                Features
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link link-dark px-2">
                Pricing
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link link-dark px-2">
                FAQs
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link link-dark px-2">
                About
              </a>
            </li>
          </ul>
          <ul className="nav">
            <li className="nav-item">
              <a href="#" className="nav-link link-dark px-2">
                Login
              </a>
            </li>
            <li className="nav-item">
              <a href="#" className="nav-link link-dark px-2">
                Sign up
              </a>
            </li>
          </ul>
        </div>
      </nav>
      <header className="py-3 mb-4 border-bottom">
        <div className="container d-flex flex-wrap justify-content-center">
          <a href="/" className="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto text-dark text-decoration-none">
            <svg className="bi me-2" width="40" height="32">
              <use xlinkHref="#bootstrap"></use>
            </svg>
            <span className="fs-4">Title</span>
          </a>
          <form className="col-12 col-lg-auto mb-3 mb-lg-0">
            <input type="search" className="form-control" placeholder="Search..." aria-label="Search" />
          </form>
        </div>
      </header>
    </>
  );
};
