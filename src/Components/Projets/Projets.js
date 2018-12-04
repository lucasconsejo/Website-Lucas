import React, { Component } from 'react';
import LogoWetube from '../../img/projets-img/react-logo.png'
import '../../css/Projets.css'
import Navbar from '../../Components/Navbar/Navbar.js'
                    
class Projets extends Component{
    render(){
        return(
            <div id="projets">
                <Navbar color="color4" />
                <div id="fond-projets">
                    <div className="navHidden"></div>
                    <div id="box-size" className="container">
                        <h2 className="mt-3 text-light">Projets récents</h2>
                        <div id="list-project" className="row mt-3 mx-auto mt-4">
                            <a href="https://github.com/lucasconsejo/Projects-React-js/tree/master/Movies%20Trailer" id="img-wetube" className="col-lg-4  col-12  text-center  text-dark  box" target="_blank" rel="noopener noreferrer">
                                <div className="projet p-3">
                                    <h3>WeTube</h3>
                                    <img src={LogoWetube} className="img-rotation" alt="appli WeTube"/>
                                    <p>WeTube est une application web qui permet de rechercher des bande d'annonce de films. L'appli utilise une API afin de recupérer les données des films.</p>
                                    <p>React js & Bootstrap</p>
                                    <button className="btn btn-dark">  
                                        Git du projet
                                    </button >
                                </div>
                            </a>

                            <div id="projet-coming" className="col-lg-4  col-12  text-center  box">
                                <div className="projet p-3 projet-coming">
                                    <p className="font-weight-bold">Indisponible</p>
                                </div>
                            </div>

                            <div id="projet-coming" className="col-lg-4  col-12  text-center  box">
                                <div className="projet p-3 projet-coming">
                                    <p className="font-weight-bold">Indisponible</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Projets

