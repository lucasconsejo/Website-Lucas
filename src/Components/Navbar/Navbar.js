import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import logoNavbar from '../../img/logo/logo-navbar.png'

class Navbar extends Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <div className="container">
                    <Link to="/" className="navbar-brand">
                        <img src={logoNavbar} width="30" height="30" className="d-inline-block align-top" alt="" />
                        Lucas Consejo
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link to="/" className="nav-link">
                                    Accueil
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/competences" className="nav-link">
                                    Compétences
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/projets"  className="nav-link">
                                    Projets récents
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/contact"  className="nav-link">
                                    Contact
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        )
    }
}

export default Navbar

