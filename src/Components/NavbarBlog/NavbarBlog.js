import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Navbar extends Component{

    render(){
        return(
            <div id="navbar">
                <nav className="navbar navbar-expand-lg navbar-dark fixed-top">
                    <Link className="navbar-brand"to="/blog">
                        Blog Lucas Consejo
                    </Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link to="/blog" className="nav-link">
                                    Accueil
                                    <span className="sr-only">(current)</span>
                                </Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/blog/a-propos" className="nav-link">
                                    A propos 
                                </Link>
                            </li>
                            <li className="nav-item">
                                <a href="https://lucasconsejo.fr/contact" target="_blank" rel="noopener noreferrer" className="nav-link">
                                    Contact
                                </a>
                            </li>
                            <li className="nav-item">
                                <a href="https://lucasconsejo.fr" target="_blank" rel="noopener noreferrer" className="nav-link">
                                    CV
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
            </div>
        )
    }
}

export default Navbar