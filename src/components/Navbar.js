import React from 'react'
// import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

export default function Navbar(props) {

    return (
        <nav className={`navbar navbar-expand-lg bg-${props.mode_var} navbar-${props.mode_var} border-bottom border-${(props.mode_var === 'light')? 'dark':'light'} p-2 mb-2 border-opacity-75`}>
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"> {props.title} </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <Link className="nav-link" to="/"> {props.home} </Link>
                        <Link className="nav-link" to="/About"> {props.aboutText} </Link>
                        <Link className="nav-link" to="/"> {props.contact} </Link>
                        <Link className="nav-link" to="/Help"> {props.help} </Link>
                    </ul>

                    {/* <form className="d-flex" role="search">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button className="btn btn-outline-primary" type="submit">Search</button>
                    </form> */}

                    <div className={`form-check form-switch text-${(props.mode_var === 'light')? 'dark':'light'}`}>
                        <input className="form-check-input" onClick={props.togglemode_var} type="checkbox" role="switch" id="flexSwitchCheckDefault" />
                            <label className="form-check-label" htmlFor="flexSwitchCheckDefault"> {props.text_var} </label>
                    </div>
                </div>
            </div>
        </nav>
    );
};

// Navbar.propTypes = {
//     title: PropTypes.string,
//     aboutText: PropTypes.string,
//     contact: PropTypes.string.isRequired      // for making it compulsary
// }

// Navbar.defaultProps = {
//     help: 'Set help Here',
// }