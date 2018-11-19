import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import LogoWetube from '../../img/projets-img/react-logo.png'
import ImgTravaux from '../../img/projets-img/project.png'
import '../../css/Projets.css'
                    
class Projets extends Component{
    render(){
        return(
            <div id="projets">
                <div id="fond-projets">
                    <div className="navHidden"></div>
                    <div className="container">
                        <h2 className="mt-3 text-light">Projets récents</h2>
                        <div className="row mt-3 mx-auto mt-4">
                            <Link to="/projets/wetube" id="img-wetube" className="col-lg-4  col-12  text-center  text-dark  box">
                                <div className="projet p-3">
                                    <h3>WeTube</h3>
                                    <img src={LogoWetube} className="img-rotation" alt="appli WeTube"/>
                                    <p>WeTube est une application web qui permet de rechercher des bande d'annonce de films. L'appli utilise une API afin de recupérer les données des films.</p>
                                    <p>React js & Bootstrap</p>
                                    <Link to="/projets/wetube" id="btn-wetube" className="btn btn-dark">  
                                        Voir plus les détails
                                    </Link>
                                </div>
                            </Link>

                            <div id="projet-coming" className="col-lg-4  col-12  text-center  box">
                                <div className="projet p-3 projet-coming">
                                    <h3>Indisponible</h3>
                                    <img src={ImgTravaux} className="img-rotation" alt="appli WeTube"/>
                                </div>
                            </div>

                            <div id="projet-coming" className="col-lg-4  col-12  text-center  box">
                                <div className="projet p-3 projet-coming">
                                    <h3>Indisponible</h3>
                                    <img src={ImgTravaux} className="img-rotation" alt="appli WeTube"/>
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

